###### Note: this README file is dedicated for the Mobile Application side of the project for further details about the other sides of the project i.e. Server side, and Web Application, please check their repositories. You will need to install/setup all the three repositories for the project to work properly (e.g. retrive data from the database, login, etc.)

###### Note: Make sure that the two sides, Mobile and Web Application, have the same IP address of the server. For furter deatils check the Project Installation section in every side's README file


## Motivation

Cardiff Council’s ultimate goal is to make Cardiff a better place to live, work and visit. Additionally, Cardiff Council are facing the need to reduce costs with the annual budget being reduced every year, while still maintaining a high level of service which is expected of them. Despite budget cuts, there is no desirable income to be gained from achieving the ultimate goal.
One way Cardiff Council hopes to achieve this, is through making Cardiff a smart city by the use of smart devices to collect data to better assist policy making.

In order to accomplish a smart city status, there is a strong emphasis on pollution in the Capital such as noise.
This is a major but also a usually overlooked issue facing the city, which can have an adverse effect on the health and productivity of residents. 
Cardiff Council want to be able to have detailed noise data that will allow them to understand trends and correlations as well as to get the public involved to solve these three core problems:

- Lack of detailed noise pollution data in the city to assist in policy and decision making
- Pure cost of monitoring noise levels is expensive
- Lack of awareness among Cardiff residents of the dangers of noise pollution

We believe that the best way to solve the problems above, is to create an Advanced Functionality Mobile and Web Application.
Our solution is a Mobile Application for the general public that will collect detailed noise level data based on the user’s location. This data would be aggregated together to be displayed on a Website in various visual forms such as tables and maps. This will educate and bring awareness to the user on how dangerous high noise levels can be to health and the environment.


## Tech/framework used

**Built with**

* Frontend - React Native (support IOS & Android)
* Local database - Realm
* Styling library - NativeBase
* HTTP Client - axios
* Introduction Slider - react-native-intro-slider
* Noise level recording - react-native-sound-level
* Map - react-native-maps
* Tabbed Navigation - react-navigation **(version 3)**


## Features

- [x] Login & Signup
- [x] Measure noise level in dB
- [x] View current location on a map
- [x] Dark theme map
- [x] Introduction slider
- [x] Logged noise levels history
- [x] Noise level's severity colored indicator
- [x] Add additional detials to logged noise levels manually



## Project Installation

##### 1. Clone the project

```bash
git clone git@gitlab.cs.cf.ac.uk:c1628682/nea_mobile.git
```

##### 2. Follow the instruction in React Native's official docs in how to setup an Android and IOS environment either on Windows or MacOS
https://facebook.github.io/react-native/docs/getting-started
**Note: make sure you follow the instructions for "React Native CLI Quick Start" and NOT "Expo CLI Quickstart"**

##### 3. Install dependencies
```
npm install
```  

##### 4. Run the application
for **ios**
```
react-native run-ios
```  

for **android**  
```
react-native run-android
```



## Status Code

The kind of responses you might recieve are
- 200 - OK
- 400 - Bad Request
- 500 - Internal Server Error
- 401 - Unauthorized



## Contributors
Faisal, Ieuan, Joey, and Matthew 🎉

