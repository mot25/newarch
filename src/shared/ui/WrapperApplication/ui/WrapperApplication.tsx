import React, { PropsWithChildren } from 'react'
import { FC } from 'react'
import { Keyboard, SafeAreaView, StatusBar } from 'react-native'
import styles from './WrapperApplication.styles'
type Props = & PropsWithChildren & {
    onLayoutRootView: () => void
}

const WrapperApplication = ({ children, onLayoutRootView }: Props) => {
    return (
        <>
            <StatusBar
                barStyle={'light-content'}
            />
            <SafeAreaView
                onLayout={onLayoutRootView}
                style={styles.root}
                onTouchStart={Keyboard.dismiss}
            >
                {children}
            </SafeAreaView>
        </>
    )

}

export default WrapperApplication