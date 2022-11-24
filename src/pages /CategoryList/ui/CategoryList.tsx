import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { useQuery } from 'react-query';

import { IconSearch } from '../../../../assets/icons/IconSearch';
import { NavPaymentsParamsType } from '../../../app/app-navigate/MainTab/config/types';
import { CategoryItem } from '../../../entities/CategoryItem';
import { Skeleton } from '../../../entities/Skeleton';
import { api } from '../../../shared/model/api/apiaxs';
import { CountryServives } from '../../../shared/model/api/requests/requests';
import { EmpetyList } from '../../../shared/ui/EmpetyList';
import { Input } from '../../../shared/ui/Input';
import { Seperator } from '../../../shared/ui/Seperator';
import { ICategory, IService } from '../config/apiTypes';
import { $input, setInputChange } from '../model/state/modelCategory';
import styles from './CategoryList.styles';


type NSPaymentsProps = NativeStackScreenProps<NavPaymentsParamsType, 'pm_categoryList'>

const CategoryList = ({ navigation, route }: NSPaymentsProps) => {
  const { id } = route.params
const input = useStore($input)
  // const goToCategoryItem = (id: number) => {
  //   navigation.navigate('pn_itemCategory', {
  //     service: findServices?.services.find(item => item.service_id === id.toString()),
  //   })
  // }
  const showHeader = () => {
    navigation.setOptions({
      headerShown: true
    })
  }
  const hiddenHeader = () => {
    navigation.setOptions({
      headerShown: false
    })
  }
  // useEffect(() => {
  //   if (!!search.trim()) {
  //     const sortArr = servicesList?.filter(obj => Object.keys(obj).some((key: string) => {
  //       if (
  //         key === 'service_name'
  //       ) {
  //         return obj[key].toUpperCase().includes(search.toUpperCase())
  //       }
  //     }))
  //     setServicesList(sortArr)
  //   } else {
  //     setServicesList(findServices?.services)
  //   }

  // }, [search])
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: findServices?.category_name || ' '
  //   })

  // }, [id])
  return (
    <View
      style={styles.root}
    >
      <View
        style={styles.search}
      >
        <Input
          placeholder='Поиск'
          value={input}
          onChange={setInputChange}
          onBlur={showHeader}
          onFocus={hiddenHeader}
        />
      </View>
      <View
        style={styles.body_list_wrapper}
      >

        {/* {isFetching ?
          <Skeleton />
          :
          <FlatList
            data={servicesList}
            onRefresh={refetch}
            refreshing={isFetching}
            ListEmptyComponent={<EmpetyList />}
            contentContainerStyle={styles.body_list}
            keyExtractor={item => (item.service_id).toString()}
            renderItem={({ item }) => <CategoryItem onPress={goToCategoryItem} data={item} />}
            ItemSeparatorComponent={() => <Seperator />}
          />
        } */}

      </View>


    </View>
  )
}

export default CategoryList