import React, { FC, memo } from 'react';
import { EColors } from '../../config/constant';
import { TextLine } from '../../ui/TextLine';

import styles from './TabOptionsLabel.styles';


export const TabOptionsLabel = (focused: boolean, title: string,) => <TextLine
    style={[styles.tab_title, {
        color: focused ? EColors.TAB_ICON_ACTIVE : EColors.TAB_ICON_DFT,
    }]}
>{title}</TextLine>


