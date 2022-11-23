import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { PlugName } from '../../shared/ui/PlugName';
import {useQuery} from 'react-query'
import { api } from '../../shared/model/api/apiaxs';
type Props = {}

const Profile = (props: Props) => {

  const { isLoading, error, data } = useQuery(
    'repoData',
    () =>
      api.get('kode-frontend/files/raw/main/categories.json')
    // 
  );
  console.log(data, 'data');
  console.log('111', 333);
  return (
    <PlugName>Profile</PlugName>
  )
}

export default Profile