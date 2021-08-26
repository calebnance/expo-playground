# Expo Playground

[![follow @calebnance](https://img.shields.io/twitter/follow/calebnance.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/calebnance)

## Features

- Expo SDK 42
- iOS, Android and PWA (Web App)
- React Navigation v4
- PropTypes

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

Install: `yarn` or `yarn install`

Run Project Locally: `expo start` or `yarn dev`

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## API/Component Examples in this project

- [Alert](https://facebook.github.io/react-native/docs/alert)
- [Brightness](https://docs.expo.dev/versions/latest/sdk/brightness/)
- [Haptic](https://docs.expo.dev/versions/latest/sdk/haptic/)
- [Image Manipulator](https://docs.expo.dev/versions/latest/sdk/imagemanipulator/)
  - rotate image left or right by 90 degrees
  - save modified image to camera roll (asks for permission to save)
- [Keyboard](https://facebook.github.io/react-native/docs/keyboard)
- [Linking](https://docs.expo.dev/versions/latest/workflow/linking)
- [MapView](https://docs.expo.dev/versions/latest/sdk/map-view/)
  - if on iOS device, option to toggle between Google Maps and Apple Maps
  - example of how to change location dynamically
- [Picker](https://github.com/react-native-picker/picker#readme)
- [Segmented Control](https://github.com/react-native-segmented-control/segmented-control#readme)
- [Speech](https://docs.expo.dev/versions/latest/sdk/speech/)
- [Vibration](https://facebook.github.io/react-native/docs/vibration)
- [Video](https://docs.expo.dev/versions/latest/sdk/video/)
- **Build information**
  - Expo version
  - Expo SDK
  - Orientation
  - Current App Version
- **Device information**
  - Device Type
  - Running On (Physical or Emulator/Simulator)
  - Device Name
  - Device Year
  - Device Dimensions

## Release Notes

- upgraded to [Expo SDK 42](https://blog.expo.dev/expo-sdk-42-579aee2348b6)
- upgraded to [Expo SDK 41](https://blog.expo.dev/expo-sdk-41-12cc5232f2ef)
- upgraded to [Expo SDK 40](https://blog.expo.dev/expo-sdk-40-is-now-available-d4d73e67da33)
- upgraded to [Expo SDK 39](https://blog.expo.dev/expo-sdk-39-is-now-available-4c10aa825e3f)
- upgraded to [React Navigation v4](https://reactnavigation.org/docs/4.x/getting-started)
- upgraded to [Expo SDK 38](https://blog.expo.dev/expo-sdk-38-is-now-available-ab6cd30ca2ee)
- upgraded to [Expo SDK 37](https://blog.expo.dev/expo-sdk-37-is-now-available-dd5770f066a6)
- upgraded to [Expo SDK 36](https://blog.expo.dev/expo-sdk-36-is-now-available-b91897b437fe)
- upgraded to [Expo SDK 35](https://blog.expo.dev/expo-sdk-35-is-now-available-beee0dfafbf4)
- With web build, use of [Platform Specific Code](https://facebook.github.io/react-native/docs/platform-specific-code)
- upgraded to [Expo SDK 34](https://blog.expo.dev/expo-sdk-34-is-now-available-4f7825239319)
- upgraded to [Expo SDK 33](https://blog.expo.dev/expo-sdk-v33-0-0-is-now-available-52d1c99dfe4c)
- upgraded to [Expo SDK 32](https://blog.expo.dev/expo-sdk-v32-0-0-is-now-available-6b78f92a6c52)
