import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../views/Home';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
