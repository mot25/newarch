import { NativeStackScreenProps } from '@react-navigation/native-stack';
import produce from 'immer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { ALERT_TYPE, AlertNotificationRoot, Dialog, Toast } from 'react-native-alert-notification';

import { SafeAreaKeyboard } from '../../components/simple/SafeAreaKeyboard';
import SimpleButton from '../../components/simple/SimpleButton/SimpleButton';
import { TextLine } from '../../components/simple/TextLine';
import { NavPaymentsParamsType } from '../../navigation/types';
import { EColors } from '../../utils/constant';
import { getProcent, thousand } from '../../utils/helpers';
import { InputCardNumber } from './parts/InputCardNumber';
import { SelectCardItem } from './parts/SelectCardItem';
import { ETypeCard } from './parts/SelectCardItem/SelectCardItem';
import { SumCardItem } from './parts/SumCardItem';
import styles from './Services.styles';

type Props = {}
type TSum = {
    number: string
    sum: string
}
type ErrorValidate = {
    sum: boolean
    number: boolean
}
const balanced = 457334.00
type NSServicesItemProps = NativeStackScreenProps<NavPaymentsParamsType, 'pn_itemCategory'>
const ServicesItem = ({ navigation, route }: NSServicesItemProps) => {
    const { service } = route.params
    const [error, serError] = useState<ErrorValidate>({
        number: false,
        sum: false
    })
    const [localState, setLocalState] = useState<TSum>({
        number: '',
        sum: '0'
    })
    const editLocalState = (value: string, key: keyof TSum) => {
        clearError()
        setLocalState(produce(
            draft => {
                const f: TSum = draft
                f[key] = value
            }
        ))
    }
    const changeError = (value: boolean, key: keyof ErrorValidate) => {
        serError(produce(
            draft => {
                const f: ErrorValidate = draft
                f[key] = value
            }
        ))
    }
    const clearError = () => {
        changeError(false, 'number')
        changeError(false, 'sum')
    }

    const clearInput = () => {
        editLocalState('', 'number')
    }
    const openSelectCards = () => {
        let flagError = false
        console.log(
            'localState.number.length',
            localState.number.length,
            'localState.sum.length',
            localState.sum.length,
        );
        if (localState.number.length === 0 && localState.sum.length < 2) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Поля не могут быть пустыми',
            })
            changeError(true, 'number')
            flagError = true
        }
        if (parseInt(localState.sum) > balanced) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Недостаточно средств на счету',
            })
            changeError(true, 'sum')
            flagError = true
        }
        if (localState.number.length < 18 && localState.number.length > 0) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Неправильно введен номер телефона',
            })
            changeError(true, 'number')
            flagError = true

        }
        if (!flagError) {
            const rand = Boolean(Math.round(Math.random()));
            Dialog.show({
                type: rand ? ALERT_TYPE.SUCCESS : ALERT_TYPE.DANGER,
                title: rand ? 'Отправлено' : 'Какой-то сверхразум все сломал',
                textBody: rand ? `Платеж на сумму ${thousand(localState.sum)} ₽ отправлен` : 'Постараемся быстро починить',
                button: 'Закрыть',
            })
        }
        flagError = false
        console.log("file: ServicesItem.tsx ~ line 103 ~ openSelectCards ~ flagError", flagError)

    }
    useEffect(() => {
        navigation.setOptions({
            headerTitle: service?.service_name
        })
    }, [service])



    return (


        <View
            style={styles.root}
        >
            <ScrollView style={styles.top}>
                <SafeAreaKeyboard>

                    <SelectCardItem
                        classes={styles.mb16}
                        balance={balanced}
                        fourNumberCard={7789}
                        title={'Карта зарплатная'}
                        typeCard={ETypeCard.MASTERCARD}
                    />
                    <InputCardNumber
                        onChange={(e) => editLocalState(e, 'number')}
                        value={localState.number}
                        classes={styles.mb16}
                        imgSrc={service?.service_icon}
                        clearInput={clearInput}
                        error={error.number}

                    />
                    <SumCardItem
                        onChange={(e) => editLocalState(e, 'sum')}
                        value={localState.sum}
                        error={error.sum}
                    />
                </SafeAreaKeyboard>
            </ScrollView>
            <View style={styles.bottom}>
                <SimpleButton
                    text='Продолжить'
                    onPress={openSelectCards}
                    classes={styles.button}
                    bgColor={EColors.CURSOR_INPUT}
                />
            </View>
        </View>

    )
}

export default ServicesItem