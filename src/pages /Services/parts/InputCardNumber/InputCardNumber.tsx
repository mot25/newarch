import React, { FC } from 'react';
import { Image, TextInput, TextStyle, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { IconCloseInput } from '../../../../../assets/icons/IconCloseInput';
import { CTouchableOpacity } from '../../../../components/simple/CTouchableOpacity';
import { TextLine } from '../../../../components/simple/TextLine';
import { EColors } from '../../../../utils/constant';
import styles from './InputCardNumber.styles';

type Props = {
    imgSrc: string | undefined
    onChange: (val: string) => void
    value: string
    classes?: TextStyle
    clearInput: () => void
    error?: boolean
}

const InputCardNumber: FC<Props> = ({
    imgSrc,
    onChange,
    value,
    error,
    classes,
    clearInput
}) => {
    return (
        <View style={[styles.root, classes]}>
            <View
                style={styles.wrapperInput}
            >
                <View style={styles.wrapperImage}>
                    <Image source={{ uri: imgSrc }} style={styles.image} />
                </View>
                <TextInputMask
                    maxLength={18}
                    type={'cel-phone'}
                    keyboardType='numeric'
                    options={{ dddMask: '+7 (999) 999-99-99' }}
                    style={[styles.input, {
                        color: error ? EColors.BG_INPUT_ERROR : EColors.WHITE
                    }]}
                    selectionColor={error ? EColors.BG_INPUT_ERROR : EColors.CURSOR_INPUT}
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor={error ? EColors.BG_INPUT_ERROR : EColors.INPUT_PLACEHOLDER}
                    placeholder={'Номер телефона'}
                />
                <CTouchableOpacity
                    onPress={clearInput}
                    style={styles.wrapperClose}>
                    <IconCloseInput />
                </CTouchableOpacity>
            </View>
        </View>
    )
}

export default InputCardNumber