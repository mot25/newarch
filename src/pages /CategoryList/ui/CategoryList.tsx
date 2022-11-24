import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { useQuery } from 'react-query';

import { IconSearch } from '../../../../assets/icons/IconSearch';
import { NavPaymentsParamsType } from '../../../app/app-navigate/MainTab/config/types';
import { CategoryItem } from '../../../entities/CategoryItem';
import { ServicesItem } from '../../../entities/ServicesItem';
import { Skeleton } from '../../../entities/Skeleton';
import { api } from '../../../shared/model/api/apiaxs';
import { CountryServives } from '../../../shared/model/api/requests/requests';
import { EmpetyList } from '../../../shared/ui/EmpetyList';
import { Input } from '../../../shared/ui/Input';
import { Seperator } from '../../../shared/ui/Seperator';
import { ICategory, IService } from '../config/apiTypes';
import {
  $categoryeName,
  $input,
  $selectServicesById,
  $services,
  $servicesBySearch,
  clearAllCategory as clearAll,
  setCategoryes,
  setIdCategory,
  setInputChange,
  setSelectServicesById,
} from '../model/state/modelCategory';
import styles from './CategoryList.styles';


type NSPaymentsProps = NativeStackScreenProps<NavPaymentsParamsType, 'pm_categoryList'>

const CategoryList = ({ navigation, route }: NSPaymentsProps) => {
  const { id } = route.params
  const input = useStore($input)
  const services = useStore($servicesBySearch)
  const categoryeName = useStore($categoryeName)
  const selectServicesById = useStore($selectServicesById)

  const { isFetching, error, data, refetch } = useQuery<ICategory[], Error>(
    'repoData',
    () => CountryServives.getCategory()
  );

  const goToCategoryItem = (id: string) => {
    setSelectServicesById(id)
    if (selectServicesById)
      navigation.navigate('pn_itemCategory', {
        service: selectServicesById
      })
  }
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


  useEffect(() => {
    setIdCategory(id.toString())
  }, [id])
  useEffect(() => {
    navigation.setOptions({
      headerTitle: categoryeName
    })
  }, [categoryeName])
  useEffect(() => {
    setCategoryes(data || [])
  }, [data])

  useEffect(() => {
    console.log('category');
    setIdCategory(id.toString())

    return () => {

      console.log('return category');
      clearAll()
    }
  }, [])

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

        {isFetching ?
          <Skeleton />
          :
          <FlatList
            data={services}
            onRefresh={refetch}
            refreshing={isFetching}
            ListEmptyComponent={<EmpetyList />}
            contentContainerStyle={styles.body_list}
            keyExtractor={item => (item.service_id).toString()}
            renderItem={({ item }) => <ServicesItem onPress={goToCategoryItem} data={item} />}
            ItemSeparatorComponent={() => <Seperator />}
          />
        }

      </View>


    </View>
  )
}

export default CategoryList