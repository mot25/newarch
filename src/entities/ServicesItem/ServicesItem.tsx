import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { CTouchableOpacity } from '../../../../components/simple/CTouchableOpacity';
import { TextLine } from '../../../../components/simple/TextLine';
import { ICategory, IService } from '../../../../types/types';
import styles from './ServicesItem.styles';

type Props = {
    data: IService
    onPress: (id: number) => void
}

const CategoryItem: FC<Props> = ({ data, onPress }) => {
    return (
        <CTouchableOpacity
            onPress={() => onPress(parseInt(data.service_id))}
            style={styles.categoryItem}
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

export default CategoryItem