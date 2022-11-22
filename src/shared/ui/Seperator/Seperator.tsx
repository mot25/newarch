import React, { FC } from 'react';
import { Dimensions, View } from 'react-native';
import { EColors } from '../../config/constant';

import styles from './Seperator.styles';

const { width } = Dimensions.get('window')

type Props = {
    bgColor?: EColors
    paddHorizWindow?: number
    widthImage?: number
    gap?: number
}

const Seperator: FC<Props> = ({
    bgColor = EColors.BG_CATEGORY,
    paddHorizWindow = 16,
    widthImage = 40,
    gap = 16,
}) => {
    return (
        <View style={styles.seperatorWrapper} >
            <View style={[styles.seperator, {
                width: (width - (paddHorizWindow * 2) - gap - widthImage),
                backgroundColor: bgColor,
            }]} />
        </View>
    )
}

export default Seperator