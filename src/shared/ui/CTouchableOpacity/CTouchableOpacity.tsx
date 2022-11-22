import React, { FC, PropsWithChildren } from 'react';
import { TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps, PropsWithChildren { }
const CTouchableOpacity = (props: Props) => <TouchableOpacity
    {...props}
    activeOpacity={0.7}
>{props.children}</TouchableOpacity>

export default CTouchableOpacity