import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { IconCashMachine } from '../../../../../assets/icons/IconCashMachine';
import { IconMainPage } from '../../../../../assets/icons/IconMainPage';
import { IconPayments } from '../../../../../assets/icons/IconPayments';
import { IconProfile } from '../../../../../assets/icons/IconProfile';

import styles from './MainTab.styles';
import { TabOptionsLabel } from '../../../../shared/lib/TabOptionsLabel/TabOptionsLabel';
import { ERouteName, NavMainTabsParamsType, NavPaymentsParamsType, translateLabel } from '../config/types';
import { MainPage } from '../../../../pages /MainPage';
import { PaymentsStacks } from '../../PaymentsStacks';
import { CashMachine } from '../../../../pages /CashMachine';
import { Profile } from '../../../../pages /Profile';
import { isShowTabBarFromName } from '../../../../shared/lib/helpersByNavigation';



const Tab = createBottomTabNavigator<NavMainTabsParamsType>();


const MainTab = () => {
  return (

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
        sceneContainerStyle={styles.root}
        initialRouteName='PaymentsListStack'
      >
        <Tab.Screen name={ERouteName.MAINPAGE}
          options={{
            tabBarIcon: ({ focused }) => <IconMainPage focused={focused} />,
            tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.MainPage)

          }}
          component={MainPage} />
        <Tab.Screen name={ERouteName.PAYMENTSLISTSTACK}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => <IconPayments focused={focused} />,
            tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.PaymentsListStack),
            tabBarStyle: ((route) => isShowTabBarFromName<NavPaymentsParamsType, NavMainTabsParamsType>(['pm_categoryList', 'pn_itemCategory'], route, styles.tabBar))(route),
          })}
          component={PaymentsStacks} />
        <Tab.Screen name={ERouteName.CASHMACHINE}
          options={{
            tabBarIcon: ({ focused }) => <IconCashMachine focused={focused} />,
            tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.CashMachine)
          }}
          component={CashMachine} />
        <Tab.Screen name={ERouteName.PROFILE}
          options={{
            tabBarIcon: ({ focused }) => <IconProfile focused={focused} />,
            tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.Profile)
          }}
          component={Profile} />
      </Tab.Navigator>
  )
}

export default MainTab