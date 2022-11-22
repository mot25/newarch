import React, { FC } from 'react';
import { TextStyle, View } from 'react-native';

import { EColors } from '../../../utils/constant';
import { CTouchableOpacity } from '../CTouchableOpacity';
import { TextLine } from '../TextLine';
import styles from './SimpleButton.style';

type Props = {
    onPress: () => void
    bgColor?: string
    text: string
    classes?: TextStyle
    isDisabled?: boolean
}

const SimpleButton: FC<Props> = ({
    onPress,
    bgColor = EColors.CURSOR_INPUT,
    text = '',
    classes,
    isDisabled
}) => {
    return (
        <View
            style={[styles.wrapper, classes]}
        >
            <CTouchableOpacity
                style={[styles.button, {
                    backgroundColor: isDisabled ? EColors.DISABLED_BUTTON : bgColor,
                    paddingHorizontal: 16

                }]}
                disabled={isDisabled}
                onPress={onPress}
            >
                <TextLine
                    style={styles.text}
                >{text}</TextLine>
            </CTouchableOpacity>
        </View>
    )
}

export default SimpleButton