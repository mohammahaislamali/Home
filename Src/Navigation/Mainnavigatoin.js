// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wellcome from '../Screen/Wellcome';
import Splase from '../Screen/Splase';
import Swiperrr from '../Screen/Swiperrr';
import Mobailregister from '../Screen/Mobailregister'
import SingUp from '../Screen/SingUp';
import Map from '../Screen/Map';
import Location from '../Screen/Location';
import Onecode from '../Screen/Onecode';
import BotamTab from './BotamTab';
import Lock from '../Screen/Lock';
const Stack = createNativeStackNavigator();
const Mainnavigatoin = () => {
  return (
    <Stack.Navigator initialRouteName="BotamTab" screenOptions={{headerShown:false}} >
      <Stack.Screen name="Wellcome" component={Wellcome}  />
      <Stack.Screen name="Splase" component={Splase} />
      <Stack.Screen name="Swiperrr" component={Swiperrr} />
      <Stack.Screen name="Mobailregister" component={Mobailregister} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Onecode" component={Onecode} />
      <Stack.Screen name="Lock" component={Lock} />
      <Stack.Screen name="BotamTab" component={BotamTab} />

    </Stack.Navigator>
  );
}

export default Mainnavigatoin;