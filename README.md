<!-- 1: Title and Subtitle
A strong H1 title and an H2 subtitle - Just like writing an article or a blog post, you need a great title and subtitle to attract search engines and humans. It doesn’t need to be the name of your project, but it does help if your title includes the name of the project. -->

<!-- 2: Introduction and notes
An intro paragraph focused on what the project does - Write an intro paragraph about what this project is, what it does, and how it’s used. This section is still for SEO purposes and for keeping it simple about the value your project provides to the user who is searching for it.-->

<!-- 3: Diagrams and Videos 
Diagram (optional) - If necessary, add a diagram showing where this project fits and how it works. If it’s a CLI tool or a graphical tool, this would be a great opportunity to add an animated GIF of your project in action. Even better, adding a youtube video demo of your project to your README could be very beneficial to gaining more users.-->

<!-- 4: User Instructions? 
Installation and usage instructions (for end-users) - Now it’s time to get a little bit nerdier. If a user has gotten this far into your README, you bet there’s a chance they actually want to use your project. Give instructions on how to install or use the tool. Don’t get this confused with how to contribute to this project (like help improve the code), that’s the next section. This section should only talk about how to be a consumer of the project.-->

<!-- 5: Developer Instructions? 
Installation and usage instructions (for contributors) - Ya know the best part of open source projects? If you make something really cool, others will want to help make it better! In this section of the README, give instructions on how to pull the code down and start up the tool for development purposes. This section is usually pretty technical and may require instruction on how to build from source, but hopefully, you have a script for MAKEFILE from stuff like that. Anything you can do to make the development experience easier will help you gain more contributors.-->

<!-- 6: Expectations for Contributions 
Contributor expectations - If you are looking for contributors, make sure you set the ground rules. There’s nothing worse than getting someone who wants to help you but they don’t know how! This section of the README gives the guidelines for contributions. Do you expect someone to create an issue in the issue queue and then resolve it with a pull request? Do you want squashed commits? Do you have a pull requests template? Explain it all here.-->

<!-- 7: Known Issues 
Known issues - I already talked about this README section above so I’ll keep it short. Make a brief list of known issues here so people don’t report bugs you already know about!-->

<!-- ## Contents

1. **Introduction**
    - Passive GNSS-Denied Localization
    - Localization Using Limited Resources
    - Quantized RSSI-Based Localization
    - The Family of k–NN Localization Schemes
    - Thesis Structure and Contributions

2. **Related Work**
    - Indoor Localization
    - Localization Techniques
    - Received Signal Strength (RSS)
    - k-Nearest Neighbours (k-NN)
    - RADAR
    - LANDMARC
    - LEMON
    - The Complexity of k-NN Techniques
    - Localization Coverage of k-NN Techniques
    - RSS Quantization
    - Pre-computed Quantization Intervals
    - Data-driven Quantization
    - Global vs. Local Quantization
    - Applications of RSSI Quantization
    - Optimization Techniques
    - Genetic Algorithms (GAs)
    - Tabu Search

3. **Datasets & Baseline Results**
    - Carpark Dataset
    - Library Dataset
    - Other Datasets
    - k-NN Localization Tuning
    - Summary

4. **1-bit Quantization**
    - Methodology
    - Results
    - Coverage
    - Conclusions

5. **Multiple Bit Quantization**
    - Methodology
    - Results
    - Coverage (2-bit)
    - Conclusions

6. **Conclusions and Future Work**
    - Conclusions
    - Future Work!-->

# Quantized RSSI-Based Localization

This repository contains the materials related to the thesis "A Study of Localization based on Quantized Received Signal Strength" by Alan Yong, submitted in partial fulfillment of the requirements for the degree of Master of Science at the University of Alberta.

## Abstract

This thesis bridges localization techniques based on proximity information with those predicated on Received Signal Strength Indication (RSSI) data. By quantizing RSSI values, it facilitates the offline construction of lookup tables that map quantized RSSI to coordinates. This approach enables passive localization and scalable simultaneous localization of numerous devices. The underlying localization algorithm is treated as a black box, and a systematic search process is developed to determine the optimal quantization based on a training dataset. Evaluation is conducted using an RSSI measurement dataset collected in an environment with variable vehicle positions to simulate dynamic conditions.

This thesis outlines the limitations of Global Positioning System (GPS) technology in indoor environments and introduces alternative localization methods that leverage existing wireless transmissions. Key observations underscore the importance of resilient, passive, and energy-efficient localization methods that do not rely on GPS or other Global Navigation Satellite Systems (GNSS), particularly in environments prone to signal interference or jamming.

The proposed approach utilizes existing hardware and resources for localization, thus obviating the need for specialized equipment. This methodology includes the use of pre-computed lookup tables for efficient and scalable localization, significantly reducing computational demands on individual devices. The focus then shifts to a Quantized Received Signal Strength Indicator (RSSI)-based method for localization. This method simplifies complex RSSI data into quantized formats that retain essential information for effective localization.

The feasibility of this approach is tested through various scenarios, addressing challenges such as the inherent noise in RSSI measurements and the limitations of current transceiver technology. Furthermore, the thesis explores the application of k-Nearest Neighbor (k-NN) algorithms, which utilize RSSI data to ascertain location. This method is advantageous due to its ability to adapt to quantized RSSI data while maintaining reasonable accuracy and scalability.

Overall, this work sets the stage for a detailed exploration of innovative, cost-effective, and efficient localization techniques that circumvent the limitations of traditional GPS-based systems. It focuses on indoor and GNSS-denied environments, leveraging existing technologies to develop robust localization solutions.

## Key Diagrams

### Coverage for Optimal Global 2-bit Quantization

#### No Car Present
![Coverage for optimal global 2-bit quantization (no car present)](images/figure_5_2.png)

#### Car Present (Left)
![Coverage for optimal global 2-bit quantization (car present left)](images/figure_5_3.png)

### Coverage for Optimal Local 2-bit Quantization

#### No Car Present
![Coverage for optimal local 2-bit quantization (no car present)](images/figure_5_4.png)

#### Car Present (Left)
![Coverage for optimal local 2-bit quantization (car present left)](images/figure_5_5.png)

### Localization Performance

#### No Quantization, 1-bit Global/Local, and 2-bit Global/Local Quantization
![Localization performance for no quantization, 1-bit global/local and 2-bit global/local quantization](images/figure_6_1.png)

#### No Quantization, 3-bit Global/Local, and 4-bit Global/Local Quantization
![Localization performance for no quantization, 3-bit global/local and 4-bit global/local quantization](images/figure_6_2.png)

## Datasets

- **Carpark Dataset:** Collected in an environment where a vehicle was placed at various positions to capture a dynamically changing environment.
- **Library Dataset:** Collected in an environment where only a small fraction of peg devices can be detected at any given point.

## Methodology

### Quantization Process

1. **1-bit Quantization:** High-level flowchart and detailed methodology for optimal quantization search and testing.
2. **Multiple Bit Quantization:** Evaluation of localization performance with 2-bit, 3-bit, and 4-bit quantization.

## Results

- Detailed results for the Carpark and Library datasets.
- Comparison of localization performance across different quantization levels.
- Analysis of coverage and expressiveness for different quantization schemes.

## Future Work

- Generalization of the performance study to 3-dimensional localization.
- Use of different “black box” localization schemes, including neural network-based algorithms.

## Acknowledgements

I extend my deepest thanks to my supervisors, Doctors Ioanis Nikolaidis and Janelle Harms, and Dr. Paul Lu of the examining committee. I also thank the Networks Lab at the University of Alberta, my friends, and my parents for their unwavering support.

## References

A list of all references cited in the thesis, including key papers and datasets used.

## How to Use This Repository

### Cloning
- Clone the repository: `git clone https://github.com/username/repository.git`
### Location
- Follow the instructions in the `datasets` folder to access and preprocess the datasets.
### Compilation 
- Run the provided makefile script using `make` or `make all` to reproduce the quantization and localization results, and `make clean` to cleanup.
### Running the program
Use the following command format to run the program:
```bash 
./main -p <profile_file> -t <tag_file> -k <k_value> -l <local_algo> -s <search_algo> -q <quant_scheme> -b <num_bounds> -o <pop_size> -g <num_generations> -u <tabu_size> -i <interaction_threshold>
```
#### Parameters:
- -p: Path to the profile file (CSV)
- -t: Path to the tag file (CSV)
- -k: Value of k for k-NN
- -l: Localization algorithm (RADAR, LANDMARC, LEMON)
- -s: Search algorithm (NONE, SEQUENTIAL, EGA, TABU)
- -q: Quantization scheme (NONE, GLOBAL, LOCAL)
- -b: Number of quantization bits
- -o: Population size for EGA
- -g: Number of generations for EGA
- -u: Tabu size for TABU search
- -i: Interaction threshold for TABU search

### Test Cases
#### No Car:
##### Test Case 1: No Quantization for RADAR (average)
**Command:**
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l RADAR -s NONE -q NONE
```
**Expected Results:**
- Fitness = 0.598310
- Mean error = 1.212161
- Std dev = 0.449490

##### Test Case 2: 1-bit Quantization for RADAR (average)
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l RADAR -s SEQUENTIAL -q GLOBAL -b 1
```
**Expected Results:**
- Best bound = 122.7434
- Mean error = 1.25535
- Std dev = 0.648617
- Fitness = 0.500859
##### Test Case 3: 2-bit Quantization for RADAR (average)
**Command:**
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l RADAR -s EGA -q LOCAL -b 3 -o 20 -g 1000
```
**Expected Results:**
- Bounds = 120.608611, 144.454388, 154.762978
- Fitness = 0.842092
- Mean error = 0.967328
- Std dev = 0.501792


##### Test Case 4: No Quantization for LANDMARC (average)
**Command:**
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l LANDMARC -s NONE -q NONE
```
**Expected Results:**
- Fitness = 0.675249
- Mean error = 1.109379
- Std dev = 0.500214
##### Test Case 5: 1-bit Quantization for LANDMARC (average)
**Command:**
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l LANDMARC -s SEQUENTIAL -q GLOBAL -b 1
```
**Expected Results:**
- Best bound = 122.6962
- Mean error = 1.594545
- Std dev = 0.77132
- Fitness = 0.318724

##### Test Case 6: 2-bit Quantization for LANDMARC (average)
**Command:**
```bash 
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l LANDMARC -s EGA -q LOCAL -b 3 -o 20 -g 1000
```
**Expected Results:**
- Bounds = 121.441505, 143.688740, 154.910135
- Fitness = 0.946890
- Mean error = 0.912574
- Std dev = 0.472543

##### Test Case 7: No Quantization (k=4) for LEMON (average)
**Command:**
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l LEMON -s NONE -q NONE
```
**Expected Results:**
- Fitness = 0.591653
- Mean error = 1.134635
- Std dev = 0.634653

##### Test Case 8: 1-bit Quantization for LEMON (average)
**Command:**
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l LEMON -s SEQUENTIAL -q GLOBAL -b 1
```
**Expected Results:**
- Best bound = 123.2958
- Mean error = 1.519689
- Std dev = 0.974819
- Fitness = 0.306774

##### Test Case 9: 2-bit Quantization for LEMON (average)
**Command:**
```bash
./main -p data/without_car/average_profile.csv -t data/without_car/tag.csv -k 4 -l LEMON -s EGA -q LOCAL -b 3 -o 20 -g 1000
```
**Expected Results:**
- Bounds = 95.687733, 122.734673, 136.992391
- Fitness = 0.865463
- Mean error = 0.953673
- Std dev = 0.495941

##### Test Case 10: 1-bit Quantization for RADAR (no average)
**Command:**
```bash
./main -p data/without_car/formatted_profile.csv -t data/without_car/tag.csv -k 55 -l RADAR -s SEQUENTIAL -q GLOBAL -b 1
```
**Expected Results:**
- Best bound = 122.7434
- Mean error = 1.29472
- Std dev = 0.589716
- Fitness = 0.494056

##### Test Case 11: 1-bit Quantization for LANDMARC (no average)
**Command:**
```bash
./main -p data/without_car/formatted_profile.csv -t data/without_car/tag.csv -k 55 -l LANDMARC -s SEQUENTIAL -q GLOBAL -b 1
```
**Expected Results:**
- Best bound = 122.7434
- Mean error = 1.281409
- Std dev = 0.615484
- Fitness = 0.494846

##### Test Case 12: 1-bit Quantization for LEMON (no average)
**Command:**
```bash
./main -p data/without_car/formatted_profile.csv -t data/without_car/tag.csv -k 110 -l LEMON -s SEQUENTIAL -q GLOBAL -b 1
```
**Expected Results:**
- Best bound = 123.4841
- Mean error = 1.393673
- Std dev = 0.761273
- Fitness = 0.396532


### Thesis
- Refer to the thesis PDF for detailed explanations of the methodologies and detailed results.


Testing &#8203;:citation[oaicite:0]{index=0}&#8203;
