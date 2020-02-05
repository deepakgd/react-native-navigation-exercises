import React, { Component, useEffect } from 'react';

import { createStackNavigator } from 'react-navigation-stack'

import A from './A';
import D from './D';
import E from './E';


export default createStackNavigator({ 
    A,
    D,
    E
 })