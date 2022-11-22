import React, { FC, useRef } from 'react';
import { FlatList, GestureResponderEvent, Keyboard, TextInput, View } from 'react-native';
import { EColors } from '../../shared/config/constant';
import { getProcent, thousand } from '../../shared/lib/helpers';
import { ChipsItem } from '../../shared/ui/ChipsItem';
import { TextLine } from '../../shared/ui/TextLine';

import styles from './SumCardItem.styles';

type Props = {
    value: string
    onChange: (value: string) => void
    error: boolean
}
const procent = 10
const chipsVariants = [100, 500, 1000, 2500, 5000, 10000, 15000, 20000]
const SumCardItem: FC<Props> = ({ onChange, error, value }) => {
    const inputRef = useRef<TextInput>(null)
    const openKeyboard = (e: GestureResponderEvent) => {
        e.stopPropagation()
        inputRef.current?.focus()
    }

    return (
        <View
            style={styles.root}
        >
            <TextLine
                style={styles.title}
            >
                Сумма
            </TextLine>
            <View
                style={styles.chipsWrapper}
            >
                <View
                    onTouchStart={openKeyboard}
                    style={styles.inputWrapper}
                >
                    <TextInput
                        ref={inputRef}
                        style={styles.input}
                        selectionColor={EColors.CURSOR_INPUT}
                        onChangeText={onChange}
                        value={parseInt(!!value ? value : '0').toString()}
                        keyboardType={'numeric'}
                        maxLength={12}

                    />
                    <TextLine style={styles.ruble}>₽</TextLine>
                </View>
                <View style={[styles.line, {
                    backgroundColor: error ? EColors.BG_INPUT_ERROR : EColors.CURSOR_INPUT,
                }]} />
                {
                 getProcent(10, +value) > 1 ?
                        <TextLine
                            style={styles.cashBack}
                        >Ваш кешбек составит {procent}% - {thousand(getProcent(procent, +value).toString())} ₽</TextLine>
                        :
                        <FlatList
                            data={chipsVariants}
                            renderItem={({ item }) => <ChipsItem number={item} onPress={() => onChange(item.toString())} />}
                            ItemSeparatorComponent={() => <View style={styles.seperator} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>
        </View>
    )
}

export default SumCardItem