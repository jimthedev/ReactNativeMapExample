/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import Router from './Router'
export default class ReactNativeMapExample extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeMapExample', () => ReactNativeMapExample);
