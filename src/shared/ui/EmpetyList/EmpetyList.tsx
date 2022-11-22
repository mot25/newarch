import React from 'react';
import { View } from 'react-native';

import { TextLine } from '../TextLine';
import styles from './EmpetyList.style';

type Props = {}
const EmpetyList = (props: Props) => {
    return (
        <View style={styles.root}>
            <View style={styles.wrapper}>
                <TextLine style={styles.text}>
                    Список пуст
                </TextLine>
            </View>
        </View>
    )
}

export default EmpetyList

