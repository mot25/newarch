import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { IconSearch } from '../../../assets/icons/IconSearch';
import { NavPaymentsParamsType } from '../../app/app-navigate/MainTab/config/types';
import { EmpetyList } from '../../shared/ui/EmpetyList';
import { Skeleton } from '../../entities/Skeleton';

import styles from './CategoryList.styles';



type NSPaymentsProps = NativeStackScreenProps<NavPaymentsParamsType, 'pm_categoryList'>

const CategoryList = ({ navigation, route }: NSPaymentsProps) => {
  const { id } = route.params
  // const { isFetching, data, refetch } = useGetServicesListQuery()
  const isFetching = false
  const data: any = []
  const refetch = false
  const findServices: ICategory | undefined = data?.category.find(item => item.category_id === id.toString())


  const [search, setSearch] = useState<string>('')

  const [servicesList, setServicesList] = useState<IService[] | undefined>(findServices?.services)
  const goToCategoryItem = (id: number) => {
    navigation.navigate('pn_itemCategory', {
      service: findServices?.services.find(item => item.service_id === id.toString()),
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
    if (!!search.trim()) {
      const sortArr = servicesList?.filter(obj => Object.keys(obj).some((key: string) => {
        if (
          key === 'service_name'
        ) {
          return obj[key].toUpperCase().includes(search.toUpperCase())
        }
      }))
      setServicesList(sortArr)
    } else {
      setServicesList(findServices?.services)
    }

  }, [search])
  useEffect(() => {
    navigation.setOptions({
      headerTitle: findServices?.category_name || ' '
    })
  }, [id])
  return (
    <View
      style={styles.root}
    >
      <View
        style={styles.search}
      >
        <Input
          placeholder='Поиск'
          value={search}
          onChange={setSearch}
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
            data={servicesList}
            onRefresh={refetch}
            refreshing={isFetching}
            ListEmptyComponent={<EmpetyList />}
            contentContainerStyle={styles.body_list}
            keyExtractor={item => (item.service_id).toString()}
            renderItem={({ item }) => <CategoryItem onPress={goToCategoryItem} data={item} />}
            ItemSeparatorComponent={() => <Seperator />}
          />
        }

      </View>


    </View>
  )
}

export default CategoryList