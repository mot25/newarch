import React from 'react'
import { CTouchableOpacity } from '../CTouchableOpacity';
import { IconBackHeader } from '../../../../assets/icons/IconBackHeader';
import styles from './HeaderBackButton.styles'
type Props = {
    onPress: () => void;
}

const HeaderBackButton = ({onPress}: Props) => {
  return (
      <CTouchableOpacity
          style={styles.root}
          onPress={onPress}><IconBackHeader /></CTouchableOpacity>
  )
}

export default HeaderBackButton