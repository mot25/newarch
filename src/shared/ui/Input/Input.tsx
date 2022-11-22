import React, { FC } from 'react';
import { TextInput, View } from 'react-native';

import { IconSearch } from '../../../../assets/icons/IconSearch';
import { EColors } from '../../config/constant';
import styles from './Input.styles';

type Props = {
    value: string
    placeholder: string
    onChange: (e: string) => void
    onFocus?: () => void
    onBlur?: () => void

}

const Input: FC<Props> = ({
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur
}) => {
    return (
        <View
            style={styles.root}
        >
            <View
                style={styles.wrapperInput}
            >
                <IconSearch />
                <TextInput
                    selectionColor={EColors.CURSOR_INPUT}
                    style={styles.input}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={EColors.INPUT_PLACEHOLDER}
                    onChangeText={onChange}
                    onFocus={onFocus}
                                        onBlur={onBlur}
                    
                />
            </View>
        </View>
    )
}

export default Input