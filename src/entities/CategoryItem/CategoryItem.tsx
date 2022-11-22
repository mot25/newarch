import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { CTouchableOpacity } from '../../shared/ui/CTouchableOpacity';
import { TextLine } from '../../shared/ui/TextLine';


import styles from './CategoryItem.styles';

type Props = {
    data: ICategory
    onPress: (id: number) => void
}
export const aaa = 3
const CategoryItem: FC<Props> = ({ data, onPress }) => {
    return (
        <CTouchableOpacity
            onPress={() => onPress(parseInt(data.category_id))}
            style={styles.categoryItem}
        >
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: data.category_icon }} />
            </View>
            <View style={styles.right}>
                <TextLine style={styles.title}>{data.category_name}</TextLine>
            </View>
        </CTouchableOpacity>
    )
}

export default CategoryItem