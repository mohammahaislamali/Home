import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screen/Home';
import Categories from '../Screen/Categories';
import Training from '../Screen/Training'
import leads from '../Screen/leads';
import Pluse from '../Screen/Pluse';
import CostomTab from './CostomTab';

const Tab = createBottomTabNavigator();

const BotamTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CostomTab {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
     
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
      />
        <Tab.Screen
        name="Pluse"
        component={Pluse}


      />
      <Tab.Screen
        name="Training"
        component={Training}
      />
      <Tab.Screen
        name="leads"
        component={leads}
      />
     
    </Tab.Navigator>
  );
}
export default BotamTab;
