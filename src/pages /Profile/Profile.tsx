import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';

import { api } from '../../shared/model/api/apiaxs';
import { PlugName } from '../../shared/ui/PlugName';

type Props = {}

const Profile = (props: Props) => {


  return (
    <PlugName>Profile</PlugName>
  )
}

export default Profile