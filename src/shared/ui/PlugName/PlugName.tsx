import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Image, TextStyle, View } from 'react-native';

import { TextLine } from '../TextLine';
import styles from './PlugName.styles';

type Props = {
    classes?: {
        wrapper?: TextStyle
        text?: TextStyle
    }
}

const PlugName: FC<PropsWithChildren<Props>> = ({ classes, children }) => {
    return (
        <View
            style={[styles.root, classes?.wrapper]}
        >
            <View
                style={styles.content}
            >
                <Image
                    style={styles.img}
                    source={require('../../../../assets/imgs/inDevelopment.png')} />
            </View>
        </View>
    )
}

export default PlugName