import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { COLORS } from '../constant/theme';
import Watch from '../screen/Watch';
import Dashboard from '../screen/Dashboard';
import DashboardIcon from '../assets/svg/DasboardIcon';
import WatchIcon from '../assets/svg/WatchIcon';
import ListIcon from '../assets/svg/ListIcon';
import LibraryIcon from '../assets/svg/LibraryIcon';
import MediaLibrary from '../screen/MediaLibrary';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor={COLORS.white} // "#e91e63"
      barStyle={{ backgroundColor: 'transparent', }}
      screenOptions={{
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.lightGray,
        keyboardHidesTabBar: true,
        headerShown: false,
        tabBarStyle: {
          borderWidth: 1,
          // borderBlockColor:'red',
          height: 76,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // borderBottomRightRadius: 20,
          // borderBottomLeftRadius: 20,
          backgroundColor: COLORS.primary,
          paddingBottom: 6,
          position: 'absolute'
        },
        style: {
          // COLORS.primary,


        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <DashboardIcon color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          tabBarLabel: 'Watch',
          tabBarIcon: ({ color }) => (
            <WatchIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MediaLibrary"
        component={MediaLibrary}
        options={{
          tabBarLabel: 'Media Library',
          tabBarIcon: ({ color }) => (
            <LibraryIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={Watch}
        options={{
          tabBarLabel: 'Watch',
          tabBarIcon: ({ color }) => (
            <ListIcon color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default MyTabs;


