<!-- 1: Title and Subtitle
A strong H1 title and an H2 subtitle - Just like writing an article or a blog post, you need a great title and subtitle to attract search engines and humans. It doesn’t need to be the name of your project, but it does help if your title includes the name of the project. -->
# A Study of Localization based on Quantized Received Signal Strength

<!-- 2: Introduction and notes
An intro paragraph focused on what the project does - Write an intro paragraph about what this project is, what it does, and how it’s used. This section is still for SEO purposes and for keeping it simple about the value your project provides to the user who is searching for it.-->
## Introduction
This Thesis outlines the limitations of GPS in indoor environments and introduces alternative localization methods that leverage existing wireless transmissions. Key observations highlight the importance of resilient, passive, and energy-efficient localization methods that do not depend on GPS or other Global Navigation Satellite Systems (GNSS), especially in environments susceptible to signal interference or jamming.
The thesis proposes using existing hardware and resources for localization to avoid the need for specialized equipment. This approach includes using pre-computed lookup tables for efficient and scalable localization, which can significantly reduce the computational demands on devices.
The focus then shifts to the Quantized Received Signal Strength Indicator (RSSI)-based method for localization. This method simplifies the complex RSSI data into quantized formats that still retain essential information for effective localization. The feasibility of this approach is tested through various scenarios and challenges, including the noise inherent in RSSI measurements and the limitations of existing transceiver technology.
Additionally, the thesis explores the k-Nearest Neighbor (k-NN) algorithms, which use RSSI data to determine location. This method is seen as advantageous due to its ability to adapt to the quantized RSSI data while maintaining reasonable accuracy and scalability.
Overall, this sets the stage for a detailed exploration of innovative, cost-effective, and efficient localization techniques that circumvent the limitations of traditional GPS-based systems, focusing on indoor and GNSS-denied environments using existing technologies.

* something 1
* something 2
* something 3

<!-- 3: Diagrams and Videos 
Diagram (optional) - If necessary, add a diagram showing where this project fits and how it works. If it’s a CLI tool or a graphical tool, this would be a great opportunity to add an animated GIF of your project in action. Even better, adding a youtube video demo of your project to your README could be very beneficial to gaining more users.-->
## Diagrams and Videos

<!-- 4: User Instructions? 
Installation and usage instructions (for end-users) - Now it’s time to get a little bit nerdier. If a user has gotten this far into your README, you bet there’s a chance they actually want to use your project. Give instructions on how to install or use the tool. Don’t get this confused with how to contribute to this project (like help improve the code), that’s the next section. This section should only talk about how to be a consumer of the project.-->


<!-- 5: Developer Instructions? 
Installation and usage instructions (for contributors) - Ya know the best part of open source projects? If you make something really cool, others will want to help make it better! In this section of the README, give instructions on how to pull the code down and start up the tool for development purposes. This section is usually pretty technical and may require instruction on how to build from source, but hopefully, you have a script for MAKEFILE from stuff like that. Anything you can do to make the development experience easier will help you gain more contributors.-->
## Developer Instructions
* Download Source
* Compling from Source
* using the makefile

<!-- 6: Expectations for Contributions 
Contributor expectations - If you are looking for contributors, make sure you set the ground rules. There’s nothing worse than getting someone who wants to help you but they don’t know how! This section of the README gives the guidelines for contributions. Do you expect someone to create an issue in the issue queue and then resolve it with a pull request? Do you want squashed commits? Do you have a pull requests template? Explain it all here.-->
## Expectations
Before you pull do this ...

<!-- 7: Known Issues 
Known issues - I already talked about this README section above so I’ll keep it short. Make a brief list of known issues here so people don’t report bugs you already know about!-->
## Known Issues
* 1
* 2
* 3
