import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Skeleton } from '../../components/complex/Skeleton';
import { EmpetyList } from '../../components/simple/EmpetyList';
import Seperator from '../../components/simple/Seperator/Seperator';
import { TextLine } from '../../components/simple/TextLine';
import { NavMainTabsParamsType, NavPaymentsParamsType } from '../../navigation/types';
import { useGetServicesListQuery } from '../../services/ServicesList';
import { CategoryItem } from './parts/CategoryItem';
import styles from './PaymentsMain.styles';

type Props = {}
type NSPaymentsProps = NativeStackScreenProps<NavPaymentsParamsType, 'pm_index'>

const PaymentsMain = (
    { navigation }: NSPaymentsProps
) => {
    const { isFetching, data, refetch } = useGetServicesListQuery()
    const goToCategory = (id: number) => {
        navigation.navigate('pm_categoryList', { id })
    }

    return (
        <View
            style={styles.root}
        >
            <View
                style={styles.top}
            >
                <View
                    style={styles.wrapper_top}
                >
                    <TextLine
                        style={styles.top_text}
                    >Платежи</TextLine>
                </View>
            </View>
            <View
                style={styles.body}
            >

                <View
                    style={styles.wrapperBody}
                >
                    {isFetching ?
                        <Skeleton />
                        :
                        <FlatList
                            onRefresh={refetch}
                            refreshing={isFetching}
                            ListEmptyComponent={<EmpetyList />}
                            data={data?.category}
                            keyExtractor={item => (item.category_id).toString()}
                            renderItem={({ item }) => <CategoryItem onPress={goToCategory} data={item} />}
                            ItemSeparatorComponent={() => <Seperator />}
                        />
                    }

                </View>
            </View>
        </View>)
}

export default PaymentsMain