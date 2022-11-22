import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text } from 'react-native';

import { PlugName } from '../../components/simple/PlugName';
import { TextLine } from '../../components/simple/TextLine';
import { NavMainTabsParamsType } from '../../navigation/types';

type Props = {}
type NSPaymentsProps = NativeStackScreenProps<NavMainTabsParamsType, 'MainPage'>

const MainPage = ({ }: NSPaymentsProps) => {
  return (
    <PlugName>MainPage</PlugName>
  )
}

export default MainPage