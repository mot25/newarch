import React, { PropsWithChildren, useEffect } from 'react';
import { FC } from 'react';
import { AppState, Keyboard, SafeAreaView, StatusBar } from 'react-native';

import { onAppStateChange } from '../model/QuerySet';
import styles from './WrapperApplication.styles';

type Props = & PropsWithChildren & {
    onLayoutRootView: () => void
}

const WrapperApplication = ({ children, onLayoutRootView }: Props) => {
    useEffect(() => {
        const subscription = AppState.addEventListener('change', onAppStateChange)
        return () => subscription.remove()
    }, [])

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