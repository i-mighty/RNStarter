[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
![Build With TravisCI](https://travis-ci.org/i-mighty/RNStarter.svg?branch=master)
![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

# React Native Starter

<p style="text-align: center;"> ✨ A React Native Starter with 10+ commonly used libraries ✨ </p>

![RNStarter](https://dev-to-uploads.s3.amazonaws.com/i/tiwmovsyxzf5oal0hkwn.png)

## Overview

Anyone who had to setup a React Native project from scratch would agree that it takes a lot of time and really can be quite some stress. This project contains a very easy to use React Native boilerplate for your next app. This project was made from the ground to be robust and very flexible, so it is easy to add new libraries as well remove unused libraries from the initial setup. The initial setup contains: 

- React Native
- Typescript
- [NativeBase](#nativeBase)
- [Styled Components](#styled-components)
- [React Navigation](#react-navigation)
- [Redux](#store)
- [Redux-Saga](#store)
- [Apisauce](#apisauce)
- [Testing Library](#testing-library)
- [Detox](#detox)
- [ESLint and Prettier with pre-commit hooks](#eslint-and-prettier)

## Setting Up

First up, clone the repository

```
git clone https://github.com/i-mighty/RNStarter
```

### Renaming the App

Before proceeding, you might want to rename your app. For that, run

```
yarn rename "Your New App Name"
```

Next in rename your package folder in androidTest and change the package name in your DetoxTest.java folder to match the new package name

```
package Your New Package Name;

import com.wix.detox.Detox;
//Rest of the DetoxTest.java file
```

### Installation

Install the app dependencies by running

```
yarn install
```

That's literally all there is to it. you should be ready to deploy for your device platform

```
yarn run android // for android devices
```

```
yarn run ios // for ios devices
```

### Linking

With RN 0.60+, there is no need for manual linking at all as most libraries are automatically linked. NativeBase however is yet to implement automatic linking so we still have to resort to manually linking it (hopefully they do that soon). To link NativeBase assets files, run

```
react-native link native-base
```

### Directories

The project uses an absolute path resolution system for all files (thanks to tsconfig baseUrl and path). The baseUrl is the `src` folder and the root path alias is `@src`. For example the store is imported as `@src/stores`. If you wish to change this default configuration, edit the following parts of the `tsconfig` file.

```
"compilerOptions":{
  ...
  "baseUrl": "./src",
  "paths": {
  	"@src/": ["*"]
  }
  ...
}
```

## Customizations

### NativeBase

All customizations for NativeBase are in the `native-base-theme` folder. The changes and modification for styling are usually made to the `platform` variables file. Changes can also be made to the individual component files themselves. Any of the variable files can be used for styling. After updating your style variables, be sure to pass your style variable to the StyleProvider. The following code already exists in the project for passing styles to the app root

```
import { StyleProvider } from 'native-base';
import getTheme from '@src/native-base-theme/components';
import platform from '@src/native-base-theme/variables/platform';

<StyleProvider style={getTheme(platform)}>
 {
  //Rest of the app to be wrapped with a style provider
 }
</StyleProvider>
```

**NB:** The order in which the HOC are arranged in `src/App.tsx` is super important to ensure that it all work well. It is advised not to change the order at all (except of course you are totally sure of what you are doing).

Checkout the NativeBase documentation [here](https://docs.nativebase.io/Customize.html) for more explanation

Also to use the Toast from NativeBase (used by default to report errors and messages), we need to add another wrapper to the root component of our application.

```
import { Root } from 'native-base';

<Root>
  {
   // Root component for the application
  }
</Root>
```

This component has also been handled and you might never have to change it. Please refer to the docs here to get a deeper understanding.

##### Further Reference:

- Official NativeBase [documentation](https://docs.nativebase.io/)

### Styled Components

Styled components requires just a simple object to contain all variables passed. Values passed to styled-components are contained in `utils/theme` and can be customized to contain anything you want. Currently it contains `vars` for color and `dimens` for values used in various places within your app. Next up add your theme object to your

```
import { ThemeProvider } from 'styled-components/native';

<ThemeProvider theme={theme}>
  {
  	//Wrapped app component
  }
</ThemeProvider>
```

Please note that all the imports are from `styled-components/native` . For example, to make a Styled Component from the React Native Text component, here is how the code would be.

```
import styled from 'styled-components/native';
import { Text } from 'react-native';

const TitleText = styled(Text)<{ color?: string }>`
  font-size: 21px;
  color: ${({ theme, color }) => (color ? color : theme.vars.black)};
`;
```

As you can see, we can perform almost any kind of logic can within the styled components. Thanks to the template literals (backticks).

##### Further Reference:

- Official Styled Components [documentation](https://styled-components.com/docs)
- Styled Components for React Native [documentation](https://styled-components.com/docs/basics#react-native)

### React Navigation

Navigators should be stored in the `navigator` folder with sub-folders and composed into the RootNavigator which is imported into the Root Component. No special configurations were made from the initial React Navigation installation. From here, simply install your desired navigator and get going with ease.

We are starting with a StackNavigator, simply installed by running:

```
yarn add @react-navigation/stack
```

Next up, create your navigator

```
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      {
	  	//Stack Screen components e.g <Stack.Screen name="Welcome" component={/*Route component goes here*/} />
	  }
    </Stack.Navigator>
  );
};

```

Then you can export your navigator and create use it where ever as a component within your app.

Further reference can be gotten from the official [documentation](https://reactnavigation.org/docs/getting-started).

### Store

Although there is a lot of ways we can structure our files for stores, actions, sagas and their associated types, I was very intentional on creating a directory structure that was as easy to understanding as it was logically clean. It really should not take much to know where to find what file or folder and how to modify it. That being said, everything related to the app state management store is contained in the `stores` folder which should be further structured into sub-folders for the various parts of the store.

Each sub-folder then should contain files for actions. reducers, sagas and types. If there are multiple files of each kind for a single store, sub-folders can be used for actions, sagas, reducers and types.

An example structure for an hypothetical user authentication system would be

```
|-src
  |-stores
     |-auth
       |-actions
          login.actions.ts
          register.actions.ts
       |-reducers
       	  index.ts
          login.reducer.ts
          register.reducer.ts
       |-sagas
          index.ts
          login.sagas.ts
          register.saga.ts
       |-types
          login.types.ts
          register.types.ts
       index.ts
```

I know there are a lot of opinions as regards how to structure the store folders and connect the components. However, I made the current structure to be very intuitive for even anyone who knows the first thing about Redux stores.

Another hard choice I had to make was to Redux-Saga instead of Redux Thunk for side effects. Despite the obvious popularity of Redux Thunk, I personally prefer the easy to understand and very declarative syntax of Redux-Saga. It is straight forward and makes it easier to read through the code (once you have an understanding of the generator functions and how they work) by implementing complex logics in what looks like pure functions. Redux-Saga also have a lot of helpful functions that provide informations about the actions and awesome selectors (takeEvery, takeLatest). Redux sagas also are easily attached to and removed from your app as they do not replace your actions in anyway (another plus on ease of understanding).

##### Further Reference

Redux: Official [Documentation](https://redux.js.org/introduction/getting-started), [Middlewares](https://redux.js.org/advanced/middleware),

Redux-Saga: Official [Documentation](https://redux-saga.js.org/),

### Apisauce

Thanks to Infinitered for this awesome library. Apisauce is an easy to use wrapper around the very famous (or infamous) axios HTTP client. Apisauce provides standardized errors and a set of very easy to use libraries. To use Apisauce, simply create a new Apisauce instance. For this project, all API requests and service files can be imported from `@src/services`.

An example has already been made.

```
import { create } from 'apisauce';

const api = create({
  baseURL: 'app/base/url/goes/here', //Replace with your default api baseUrl
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});


```

Then feel free to use the new Apisauce instance anywhere within your application

```
api.get('/request')';
```

Requests can also be made with types

```
api.get<RequestResponseType, RequestErrorType>('/request');
```

All requests return a promise which can be listened for with an `await` within an `async` function.

The Apisauce [documentation](https://github.com/inifinitered/apisauce) contains more information and usage of the functions.

### Testing Library

One of the biggest concerns of new React Native developers is how to write and run component tests. Also with the use of UI libraries, it becomes much more twisted to setup and run test successfully. Thankfully, the good guys at testing-library gave us @testing-library/react-native (very different from react-native-testing-library). This app contains a very very robust bootstrap for component. It is typesafe and works perfectly with NativeBase and Styled Components.

Test configurations can be found in the `jest.config.js` file which looks like the following

```
module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/react-native/cleanup-after-each',
    'jest-styled-components/native', // adds testMatchers for styled component rules
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.js', // imports additional, custom made setups
  ],
  testPathIgnorePatterns: ['/node_modules', '/e2e/'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|native-base-shoutem-theme|@shoutem/animation|@shoutem/ui|tcomb-form-native)',
  ],
};
```

Feel free to edit the `jest.config.js` file according to the jest configuration [documentation](https://jestjs.io/docs/en/configuration) of course.

**NB:** To make testing of NativeBase Buttons or any other component that uses a TouchableOpacity, the following setup was added to the `jest.config.js` file. Reference this [issue](https://github.com/testing-library/native-testing-library/issues/113)

```
jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity',
);
```

The setup is required to run tests on Components with TouchableOpacity. Hopefully, this would be taken out in the future.

For each component folder, there should be contained within it a `__tests__` folder which holds the test for all the components within that folder. For example, for `@src/components/General`, files for both `CenteredView.tsx` and `Typography.tsx` are both in the `__test__` folder. Also, the structure of the tests should closely mirror the folder structure and each test file should test a single component file. In a situation where a file has more than a single component, I would generally put the tests into the same file. There is really no hard and fast rule about this and it is best to stick with what makes the most sense and would be the most intuitive to whoever goes through it.

### Detox

End to end application testing is a practice that is really not very common among mobile developers generally (or maybe my friends just hate tests). We all know it is usually very error prone, and complex to setup and use for the most part and platforms. However, the good guys at Detox created an awesome tools which can be used to run end to end tests on a variety of devices across both android and iOS. Detox generally solves most of the problems associated with end to end testing of React Native specifically and mobile applications in general.

Although detox is already in the project, you need to have the detox-cli installed. If you can install it by running

```
npm install -g detox-cli
```

#### Android

The following points would be required to get your tests up and running your end to end test for Android.

- First up, install an android virtual device.

- Then create a configuration with the virtual device name set as `avdName`. An example for a debug configuration would be:

  ```
    "android.emu.debug": {
      "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ../",
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_3_API_28"
      }
    },

  ```

  An example for a production build would be:

  ```
    "android.emu.release": {
      "binaryPath": "android/app/build/outputs/apk/release/app-release.apk",
      "build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ../",
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_3_API_28"
      }
    },
  ```

- For attached devices such as a Physical phone or an external emulator (such as [Genymotion](https://www.genymotion.com/)), the configuration would look something like

  ```
    "android.emu.debug": {
      "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ../",
      "type": "android.attached",
      "device": {
        "adbName": ""
      }
    },
  ```

  With type of `android.attached`, `adbName` instead of `avdName` and `adbName` being the name (id) of the device gotten by running `adb devices` e.g `ce071717252a7f23017e`.

- Build your test app by running

  ```
  detox build --configuration "name of your configuration"
  ```

- If tests would run on a debug build, the React Native bundler must be working. Open a new terminal and run:

  ```
  yarn start
  ```

- Finally run your tests by running

  ```
  detox test --configuration "name of your configuration"
  ```

#### iOS

The following points would be required to get your tests up and running your end to end test for iOS.

- First up, install an iOS virtual device.

## Prerequisites

Running Detox (on iOS) requires the following:

- Mac with macOS (at least macOS High Sierra 10.13.6)

- Xcode 10.2+ with Xcode command line tools.
  Xcode can be installed from the App Store, or the online [Apple developers page](https://developer.apple.com/download/more/) (requires a valid Apple ID to login).

> Tip: Verify Xcode command line tools is installed by typing `gcc -v` in terminal (shows a popup if not installed)

## Dependencies

#### Install the latest version of [Homebrew](http://brew.sh)

Homebrew is a package manager for macOS, we'll need it to install other command line tools.

To ensure everything needed for Homebrew tool installation is installed, run

```sh
xcode-select --install
```

> Tip: Verify it works by typing in `brew -h` in a terminal to output list of available commands

#### Install [applesimutils](https://github.com/wix/AppleSimulatorUtils)

A collection of utils for Apple simulators, Detox uses it to communicate with the simulator.

```sh
brew tap wix/brew
brew install applesimutils
```

> Tip: Verify it works by typing in `applesimutils` in a terminal to output the tool help screen

## Configuration

- Create a configuration with the virtual device name set as `type`. An example for a debug configuration would be:

```
  "ios.sim.debug": {
        "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/RNStarter.app",
        "build": "xcodebuild -workspace ios/RNStarter.xcworkspace -scheme RNStarter -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
        "type": "ios.simulator",
        "device": {
          "type": "iPhone 11 Pro"
        }
      }
```

An example for a production build would be:

```
 "ios.sim.release": {
        "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/RNStarter.app",
        "build": "xcodebuild -workspace ios/RNStarter.xcworkspace -scheme RNStarter -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
        "type": "ios.simulator",
        "device": {
          "type": "iPhone 11 Pro"
        }
      }
```

- Build your test app by running

  ```
  detox build --configuration "name of your configuration"
  ```

> Tip: For the debug build, this is how the command looks like `detox build --configuration ios.sim.debug`

- If tests would run on a debug build, the React Native bundler must be working. Open a new terminal and run:

  ```
  yarn start
  ```

- Finally run your tests by running

  ```
  detox test --configuration "name of your configuration"
  ```

> Tip: For the debug test, this is how the command looks like `detox test --configuration ios.sim.debug`

##### Further References:

- Writing Detox tests: https://github.com/wix/Detox/blob/master/docs/Introduction.WritingFirstTest.md
- Detox workflows: https://github.com/wix/Detox/blob/master/docs/Introduction.Workflows.md
- Design principles: https://github.com/wix/Detox/blob/master/docs/More.DesignPrinciples.md

### ESLint and Prettier

To ensure your code is error free and consistently styled, this project uses ESlint and Prettier.

The default ESlint configuration extends `airbnb`, and `airbnb/hooks` and `@react-native-community` configurations. Plugins used are `prettier` and `detox` . The values here can also be modified as you wish. The prettier configuration is contained in the `.prettier` file and can be modified at will.

ESlint and Prettier can also be supercharged with git hooks to make lint and styling checks before git actions are performed. `Husky` is already install to automatically update known git hooks with actions as you may require.

##### Further References:

- ESLint [documentation](https://eslint.org/docs/user-guide/getting-started)
- Prettier [documentation](https://prettier.io/docs/en/index.html)
- Husky [documentation](https://www.npmjs.com/package/husky)
- https://dev.to/botreetechnologies/setting-up-husky-pre-commit-hook-with-eslint-prettier-and-lint-staged-for-react-and-react-native-d05

## License
MIT

## Contributors ✨
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/i-mighty"><img src="https://avatars0.githubusercontent.com/u/21091694?v=4" width="100px;" alt=""/><br /><sub><b>Adegboye Josiah</b></sub></a><br /><a href="https://github.com/i-mighty/RNStarter/commits?author=i-mighty" title="Tests">⚠️</a> <a href="https://github.com/i-mighty/RNStarter/commits?author=i-mighty" title="Code">💻</a> <a href="#ideas-i-mighty" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-i-mighty" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://rowlandekemezie.com"><img src="https://avatars1.githubusercontent.com/u/15085641?v=4" width="100px;" alt=""/><br /><sub><b>Rowland I. Ekemezie</b></sub></a><br /><a href="#ideas-rowlandekemezie" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/i-mighty/RNStarter/pulls?q=is%3Apr+reviewed-by%3Arowlandekemezie" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/iamNarcisse"><img src="https://avatars2.githubusercontent.com/u/43097772?v=4" width="100px;" alt=""/><br /><sub><b>iamNarcisse</b></sub></a><br /><a href="https://github.com/i-mighty/RNStarter/commits?author=iamNarcisse" title="Tests">⚠️</a> <a href="https://github.com/i-mighty/RNStarter/commits?author=iamNarcisse" title="Code">💻</a> <a href="#platform-iamNarcisse" title="Packaging/porting to new platform">📦</a> <a href="#maintenance-iamNarcisse" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
