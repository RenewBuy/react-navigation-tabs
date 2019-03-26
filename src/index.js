/* @flow */
/* eslint-disable import/no-commonjs */
import {
  HIDE_TYPE_OPACITY,
  HIDE_TYPE_POSITION,
} from './navigators/createBottomTabNavigator';

module.exports = {
  /**
   * Navigators
   */
  get createBottomTabNavigator() {
    return require('./navigators/createBottomTabNavigator').default;
  },
  get createMaterialTopTabNavigator() {
    return require('./navigators/createMaterialTopTabNavigator').default;
  },

  /**
   * Views
   */
  get BottomTabBar() {
    return require('./views/BottomTabBar').default;
  },
  get MaterialTopTabBar() {
    return require('./views/MaterialTopTabBar').default;
  },

  /**
   * Utils
   */
  get createTabNavigator() {
    return require('./utils/createTabNavigator').default;
  },

  /**
   * Constant for tabs hide type
   */
  HIDE_TYPE_OPACITY,
  HIDE_TYPE_POSITION,
};
