import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from 'react-query';

onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
        setOnline(state.isConnected || undefined)
    })
})
