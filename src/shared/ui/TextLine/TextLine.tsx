import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {

}

const TextLine = (props: PropsWithChildren<Props>) => {
    const { children } = props
    return (
        <Text
            {...props}
        >
            <>
                {children}
            </>
        </Text>
    )
}

export default TextLine