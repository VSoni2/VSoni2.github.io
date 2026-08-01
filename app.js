/* Vishit Soni — portfolio v2 */
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- boot sequence (once per session) ---------- */
  var boot = document.getElementById("boot");
  if (boot) {
    var seen = false;
    try { seen = !!sessionStorage.getItem("vsBoot"); } catch (e) {}
    if (reduced || seen) {
      boot.remove();
    } else {
      document.body.classList.add("booting");
      var bls = boot.querySelectorAll(".bl");
      bls.forEach(function (l, i) {
        setTimeout(function () { l.classList.add("on"); }, 140 + i * 115);
      });
      setTimeout(function () {
        boot.classList.add("done");
        try { sessionStorage.setItem("vsBoot", "1"); } catch (e) {}
        setTimeout(function () {
          boot.remove();
          document.body.classList.remove("booting");
        }, 600);
      }, 140 + bls.length * 115 + 300);
    }
  }

  /* ---------- hero name: letter split ---------- */
  var nameEl = document.getElementById("name");
  if (nameEl) {
    var words = nameEl.textContent.trim().split(/\s+/);
    nameEl.textContent = "";
    var idx = 0;
    words.forEach(function (w, wi) {
      var ww = document.createElement("span");
      ww.className = "lw";
      for (var c = 0; c < w.length; c++) {
        var lt = document.createElement("span");
        lt.className = "lt";
        lt.style.setProperty("--i", idx++);
        lt.textContent = w[c];
        ww.appendChild(lt);
      }
      nameEl.appendChild(ww);
      if (wi < words.length - 1) { nameEl.appendChild(document.createTextNode(" ")); }
    });
  }

  /* ---------- hero canvas: signal traces (cursor-reactive) ---------- */
  var cv = document.getElementById("sig");
  var hero = document.querySelector(".hero");
  if (cv && hero) {
    var ctx = cv.getContext("2d");
    var W = 0, H = 0, DPR = 1, channels = [], t = 0, raf = null;
    var mx = -9999, mFade = 0, mTarget = 0;

    function rand(a, b) { return a + Math.random() * (b - a); }

    function buildChannels() {
      channels = [];
      var n = H < 560 ? 5 : (W < 760 ? 6 : 8);
      for (var i = 0; i < n; i++) {
        channels.push({
          y0: H * (0.14 + 0.72 * i / (n - 1)),
          amp: rand(12, 30),
          f: rand(0.0025, 0.006),
          sp: rand(0.006, 0.02) * (Math.random() < .5 ? 1 : -1),
          digital: i % 2 === 1,
          duty: rand(0.35, 0.62),
          hi: i === Math.floor(n / 2)
        });
      }
    }
    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = hero.clientWidth; H = hero.clientHeight;
      cv.width = W * DPR; cv.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildChannels();
      if (reduced) { draw(); }
    }

    function tracePath(ch) {
      ctx.beginPath();
      var step = 6;
      for (var x = -step; x <= W + step; x += step) {
        var g = mFade * Math.exp(-((x - mx) * (x - mx)) / 51200); /* 2*160^2 */
        var a = ch.amp * (1 + 0.8 * g);
        var y;
        if (ch.digital) {
          var ph = (x * ch.f * 1.6 + t * ch.sp * 60);
          var fr = ph - Math.floor(ph);
          y = ch.y0 + (fr < ch.duty ? -1 : 1) * a * 0.85;
        } else {
          y = ch.y0
            + Math.sin(x * ch.f + t * ch.sp * 60) * a
            + Math.sin(x * ch.f * 2.7 + t * ch.sp * 38) * a * 0.35;
        }
        if (x <= -step + 0.01) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < channels.length; i++) {
        var ch = channels[i];
        var col = ch.hi ? "220,235,255" : "92,168,255";
        ctx.strokeStyle = "rgba(" + col + ",0.10)";
        ctx.lineWidth = 3;
        tracePath(ch); ctx.stroke();
        ctx.strokeStyle = "rgba(" + col + ",0.5)";
        ctx.lineWidth = 1.1;
        tracePath(ch); ctx.stroke();
      }
      if (!reduced) {
        var sx = ((t * 46) % (W + 260)) - 130;
        var g = ctx.createLinearGradient(sx - 120, 0, sx + 120, 0);
        g.addColorStop(0, "rgba(92,168,255,0)");
        g.addColorStop(0.5, "rgba(92,168,255,0.05)");
        g.addColorStop(1, "rgba(92,168,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(sx - 120, 0, 240, H);
      }
    }

    function loop() {
      t += 1 / 60;
      mFade += (mTarget - mFade) * 0.06;
      draw();
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("resize", resize);
    resize();

    if (finePointer && !reduced) {
      hero.addEventListener("mousemove", function (e) {
        var r = hero.getBoundingClientRect();
        mx = e.clientX - r.left;
        mTarget = 1;
      });
      hero.addEventListener("mouseleave", function () { mTarget = 0; });
    }

    if (!reduced) {
      new IntersectionObserver(function (es) {
        var vis = es[0].isIntersecting;
        if (vis && raf === null) { raf = requestAnimationFrame(loop); }
        if (!vis && raf !== null) { cancelAnimationFrame(raf); raf = null; }
      }, { threshold: 0 }).observe(hero);
      raf = requestAnimationFrame(loop);
    } else {
      draw();
    }
  }

  /* ---------- cursor glow ---------- */
  var glow = document.getElementById("glowCur");
  if (glow && finePointer && !reduced) {
    var gx = -600, gy = -600, cx = -600, cy = -600, glowRaf = null;
    function glowLoop() {
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;
      glow.style.transform = "translate(" + (cx - 260) + "px," + (cy - 260) + "px)";
      glowRaf = requestAnimationFrame(glowLoop);
    }
    window.addEventListener("mousemove", function (e) {
      gx = e.clientX; gy = e.clientY;
      glow.classList.add("live");
      if (glowRaf === null) { glowRaf = requestAnimationFrame(glowLoop); }
    }, { passive: true });
  }

  /* ---------- scroll reveals ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- stat counters ---------- */
  var cntIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) { return; }
      var el = e.target, to = parseInt(el.getAttribute("data-to"), 10) || 0;
      cntIO.unobserve(el);
      if (reduced) { el.textContent = to; return; }
      var t0 = null, dur = 950;
      function stepFn(ts) {
        if (t0 === null) { t0 = ts; }
        var p = Math.min((ts - t0) / dur, 1);
        var ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * ease);
        if (p < 1) { requestAnimationFrame(stepFn); }
      }
      requestAnimationFrame(stepFn);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".cnt").forEach(function (el) { cntIO.observe(el); });

  /* ---------- rail: active section + progress fill ---------- */
  var railLinks = [].slice.call(document.querySelectorAll(".rail a"));
  var secIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var id = "#" + e.target.id;
        railLinks.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === id); });
      }
    });
  }, { rootMargin: "-42% 0px -52% 0px" });
  ["about", "skills", "experience", "projects", "contact"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) { secIO.observe(el); }
  });

  var fill = document.getElementById("railFill");
  var tlFill = document.getElementById("tlFill");
  var tl = document.querySelector(".tl");
  var ticking = false;
  function onScroll() {
    var d = document.documentElement;
    if (fill) {
      var p = d.scrollTop / (d.scrollHeight - d.clientHeight || 1);
      fill.style.transform = "scaleY(" + p + ")";
    }
    if (tlFill && tl) {
      var r = tl.getBoundingClientRect();
      var mid = window.innerHeight * 0.55;
      var h = Math.max(0, Math.min(mid - r.top, r.height - 12));
      tlFill.style.height = h + "px";
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---------- copy email ---------- */
  var copyBtn = document.getElementById("copyEmail");
  if (copyBtn) {
    var copyTimer = null;
    copyBtn.addEventListener("click", function () {
      var email = copyBtn.getAttribute("data-email");
      function done(ok) {
        copyBtn.textContent = ok ? "Copied \u2713" : email;
        if (copyTimer) { clearTimeout(copyTimer); }
        copyTimer = setTimeout(function () { copyBtn.textContent = "Copy email"; }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
      } else {
        var ta = document.createElement("textarea");
        ta.value = email; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        var ok = false;
        try { ok = document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done(ok);
      }
    });
  }

  /* ---------- contact form (FormSubmit AJAX) ---------- */
  var cform = document.getElementById("cform");
  if (cform) {
    var sendBtn = document.getElementById("cf-send");
    var note = document.getElementById("cf-note");
    cform.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (cform.querySelector(".hp").value) { return; } /* bot */
      if (!cform.checkValidity()) { cform.reportValidity(); return; }
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var msg = document.getElementById("cf-msg").value.trim();
      sendBtn.disabled = true;
      sendBtn.textContent = "Sending\u2026";
      note.className = "fnote mono";
      note.textContent = "";
      fetch("https://formsubmit.co/ajax/vishitsoni@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: msg,
          _subject: "Portfolio message from " + name,
          _template: "table",
          _captcha: "false"
        })
      }).then(function (r) {
        return r.json().then(function (data) { return { ok: r.ok, data: data }; });
      }).then(function (res) {
        var s = res.data && res.data.success;
        if (res.ok && (s === true || s === "true")) {
          note.className = "fnote mono ok";
          note.textContent = "Message sent \u2713 I'll get back to you soon.";
          cform.reset();
        } else {
          console.warn("FormSubmit response:", res.data);
          note.className = "fnote mono err";
          note.textContent = "Couldn't send right now. Email me directly at vishitsoni@gmail.com";
        }
      }).catch(function (err) {
        console.warn("Form send failed:", err);
        note.className = "fnote mono err";
        note.textContent = "Couldn't send right now. Email me directly at vishitsoni@gmail.com";
      }).finally(function () {
        sendBtn.disabled = false;
        sendBtn.textContent = "Send";
      });
    });
  }

  /* ---------- card tilt ---------- */
  if (finePointer && !reduced) {
    document.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.classList.add("tilting");
        card.style.transform = "rotateX(" + (-py * 6) + "deg) rotateY(" + (px * 7) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.classList.remove("tilting");
        card.style.transform = "";
      });
    });
  }
})();