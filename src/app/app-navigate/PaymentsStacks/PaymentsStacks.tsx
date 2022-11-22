import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { View } from 'react-native';
import { CategoryList } from '../../../pages /CategoryList';
import { PaymentsMain } from '../../../pages /PaymentsMain';
import { Services } from '../../../pages /Services';
import { HeaderBackButton } from '../../../shared/ui/HeaderBackButton';
import { NavPaymentsParamsType } from '../MainTab/config/types';

import styles from './PaymentsStacks.styles';


type Props = {}
const optionsScreeen: NativeStackNavigationOptions = {
    headerTitleAlign: 'center',
    headerStyle: styles.header,
    headerShadowVisible: false,
    headerTitleStyle: styles.header_text,
}
const StackPayments = createNativeStackNavigator<NavPaymentsParamsType>();
const PaymentsStacks = (props: Props) => {
    return (
        <StackPayments.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => <HeaderBackButton onPress={navigation.goBack} />
            })}
        >
            <StackPayments.Screen
                name='pm_index'
                options={{ headerShown: false }}
                component={PaymentsMain}
            />
            <StackPayments.Screen
                name='pm_categoryList'
                options={optionsScreeen}
                component={CategoryList}
            />
            <StackPayments.Screen
                name='pn_itemCategory'
                options={optionsScreeen}
                component={Services}
            />
        </StackPayments.Navigator>
    )
}

export default PaymentsStacks