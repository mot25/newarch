import React, { FC, PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';


const SafeAreaKeyboard: FC<PropsWithChildren> = ({ children }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : "height"}
            style={{ flex: 1 }}
        >
            {children}
        </KeyboardAvoidingView>)
}

export default SafeAreaKeyboard