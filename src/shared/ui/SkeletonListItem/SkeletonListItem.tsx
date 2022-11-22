import { useIsFocused } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

import { EColors } from '../../../../../utils/constant';
import styles from './SkeletonListItem.styles';

type Props = {}
const SkeletonListItem = (props: Props) => {
  const isFocus = useIsFocused()
  const AnimetedValueC = new Animated.Value(0)
  const AnimetedValueT = new Animated.Value(0)

  const translateXC = AnimetedValueC.interpolate({
    inputRange: [0, 1],
    outputRange: [-4, 40]
  })
  const translateXT = AnimetedValueT.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 100]
  })


  const animated = () => {
    AnimetedValueC.setValue(0)
    AnimetedValueT.setValue(0)
    Animated.timing(
      AnimetedValueC,
      {
        toValue: 1,
        duration: 900,
        useNativeDriver: false
      }
    ).start(() => {
      setTimeout(() => {
        animated()
      }, 1000)
    })
    Animated.timing(
      AnimetedValueT,
      {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false
      }
    ).start()
  }
  useEffect(() => {
    animated()
  }, [isFocus])
  return (
    <View
      style={styles.root}
    >
      <View style={styles.circle} >
        <Animated.View
          style={[styles.basedStyles,{
            transform: [{
              translateX: translateXC
            }]
          }]}
        />
      </View>
      <View style={styles.text}>
        <Animated.View
          style={[styles.basedStyles, {
            transform: [{
              translateX: translateXT
            }]
          }]}
        />
      </View>
    </View>

  )
}

export default memo(SkeletonListItem)