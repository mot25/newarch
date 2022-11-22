import React from 'react';
import { FlatList } from 'react-native';

import Seperator from '../../simple/Seperator/Seperator';
import { SkeletonListItem } from './parts/SkeletonListItem';

type Props = {}
const arrSList = [1, 2, 4, 5, 6, 7, 8, 9, 10]
const Skeleton = (props: Props) => <FlatList
    data={arrSList}
    keyExtractor={(item) => item.toString()}
    renderItem={() => <SkeletonListItem />}
    ItemSeparatorComponent={() => <Seperator />}
/>



export default Skeleton