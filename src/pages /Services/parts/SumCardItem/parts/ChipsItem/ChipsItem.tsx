import React, { FC } from 'react';

import { CTouchableOpacity } from '../../../../../../components/simple/CTouchableOpacity';
import { TextLine } from '../../../../../../components/simple/TextLine';
import { thousand } from '../../../../../../utils/helpers';
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
                {thousand(number)} ₽
            </TextLine>
        </CTouchableOpacity>
    )
}

export default ChipsItem