import { AppStateStatus, Platform } from 'react-native';
import { focusManager } from 'react-query';




export function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active')
    }
}