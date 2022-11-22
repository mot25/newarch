import React, { FC } from 'react';
import { thousand } from '../../lib/helpers';
import { CTouchableOpacity } from '../CTouchableOpacity';
import { TextLine } from '../TextLine';

import styles from './ChipsItem.styles';

type Props = {
    number: number
    onPress: () => void
}

const ChipsItem: FC<Props> = ({ number, onPress }) => {
    return (
        <CTouchableOpacity
            onPress={onPress}
            style={styles.root}
        >
            <TextLine
                style={styles.num}
            >
                {thousand(number.toString())} ₽
            </TextLine>
        </CTouchableOpacity>
    )
}

export default ChipsItem