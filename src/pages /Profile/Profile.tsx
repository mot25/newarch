import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { PlugName } from '../../shared/ui/PlugName';

type Props = {}

const Profile = (props: Props) => {

  // const isFocused = useIsFocused()
  // useEffect(() => {
  //   console.log('Profile');
  // }, [])
  // useEffect(() => {
  //   console.log('Profile - isFocused');
  // }, [isFocused])
  return (
    <PlugName>Profile</PlugName>
  )
}

export default Profile