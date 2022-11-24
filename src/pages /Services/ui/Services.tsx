import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification';

import { NavPaymentsParamsType } from '../../../app/app-navigate/MainTab/config/types';
import { InputCardNumber } from '../../../features /InputCardNumber';
import SelectCardItem, { ETypeCard } from '../../../features /SelectCardItem/SelectCardItem';
import { SumCardItem } from '../../../features /SumCardItem';
import { EColors } from '../../../shared/config/constant';
import { thousand } from '../../../shared/lib/helpers';
import { SafeAreaKeyboard } from '../../../shared/ui/SafeAreaKeyboard';
import { SimpleButton } from '../../../shared/ui/SimpleButton';
import { clearAllCategory } from '../../CategoryList/model/state/modelCategory';
import {
    $errorService as $error,
    $localStateService as $localState,
    $serviceName,
    changeErrorService as changeError,
    clearAllService as clearAll,
    clearInputService as clearInput,
    editLocalStateService as editLocalState,
    setServices,
} from '../model/state';
import styles from './Services.styles';


type Props = {}

const balanced = 457334.00
type NSServicesItemProps = NativeStackScreenProps<NavPaymentsParamsType, 'pn_itemCategory'>
const Services = ({ navigation, route }: NSServicesItemProps) => {
    const { service } = route.params
    const localState = useStore($localState)
    const error = useStore($error)
    const servicesName = useStore($serviceName)



    const openSelectCards = () => {
        let flagError = false

        if (localState.number.length === 0 && localState.sum.length < 2) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Поля не могут быть пустыми',
            })
            changeError({ value: true, key: 'number' })
            flagError = true
        }
        if (parseInt(localState.sum) > balanced) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Недостаточно средств на счету',
            })
            changeError({ value: true, key: 'sum' })
            flagError = true
        }
        if (localState.number.length < 18 && localState.number.length > 0) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Неправильно введен номер телефона',
            })
            changeError({ value: true, key: 'number' })
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

    }
    useEffect(() => {
        navigation.setOptions({
            headerTitle: servicesName
        })
    }, [servicesName])
    useEffect(() => {
        setServices(service)
    }, [service])
    navigation.addListener('transitionEnd', () => clearAllCategory())

    useEffect(() => {
        return () => clearAll()
    }, [])
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
                        onChange={(e) => editLocalState({ value: e, key: 'number' })}
                        value={localState.number}
                        classes={styles.mb16}
                        imgSrc={service?.service_icon}
                        clearInput={clearInput}
                        error={error.number}

                    />
                    <SumCardItem
                        onChange={(e) => editLocalState({ value: e, key: 'sum' })}
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

export default Services