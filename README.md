# Expo Playground

example usage of Expo and React Native's API

---

- [Install & Build](#install--build)
- [Linting](#linting)
- [Release Notes](#release-notes)

---

#### Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

---

#### Linting

- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

---

#### Release Notes

**version 0.0.1 (current)**

- Examples of:
  - [Alert](https://facebook.github.io/react-native/docs/alert)
  - [Keyboard](https://facebook.github.io/react-native/docs/keyboard)
  - [Linking](https://docs.expo.io/versions/latest/workflow/linking)
  - [MapView](https://docs.expo.io/versions/latest/sdk/map-view/)
    - if on iOS device, option to toggle between Google Maps and Apple Maps
    - example of how to change location dynamically
  - [Vibration](https://facebook.github.io/react-native/docs/vibration)
- More Stack
  - Device information
- Updated to latest [Expo SDK 32](https://blog.expo.io/expo-sdk-v32-0-0-is-now-available-6b78f92a6c52)
