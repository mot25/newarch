import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text } from 'react-native';
import { NavMainTabsParamsType } from '../../app/app-navigate/MainTab/config/types';
import { PlugName } from '../../shared/ui/PlugName';


type Props = {}
type NSPaymentsProps = NativeStackScreenProps<NavMainTabsParamsType, 'MainPage'>

const MainPage = ({ }: NSPaymentsProps) => {
  return (
    <PlugName>MainPage</PlugName>
  )
}

export default MainPage