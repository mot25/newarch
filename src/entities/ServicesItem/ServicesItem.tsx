import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { IService } from '../../pages /CategoryList/config/apiTypes';
import { CTouchableOpacity } from '../../shared/ui/CTouchableOpacity';
import { TextLine } from '../../shared/ui/TextLine';
import styles from './ServicesItem.styles';

type Props = {
    data: IService
    onPress: (id: string) => void
}

const ServicesItem: FC<Props> = ({ data, onPress }) => {
    return (
        <CTouchableOpacity
            onPress={() => onPress(data.service_id)}
            style={styles.ServicesItem}
        >
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: data.service_icon }} />
            </View>
            <View style={styles.right}>
                <TextLine style={styles.title}>{data.service_name}</TextLine>
            </View>
        </CTouchableOpacity>
    )
}

export default ServicesItem