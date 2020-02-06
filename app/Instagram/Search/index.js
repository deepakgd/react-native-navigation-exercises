import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Search from './Search';
import IGTV from './IGTV';
import Shop from './Shop';

export default createStackNavigator({
    Search,
    IGTV,
    Shop
})