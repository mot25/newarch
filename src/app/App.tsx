import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Text } from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';

import { WrapperApplication } from '../shared/ui/WrapperApplication';
import { MainTab } from './app-navigate/MainTab';
import { ApiProvider } from './providers/ApiProvider';
import { RouterProvider } from './providers/RouterProvider';
import { StoreProvider } from './providers/StoreProvider';

SplashScreen.preventAutoHideAsync();
const customFonts = {
    SF_PRO_BOLD_700: require('../../assets/fonts/SFProDisplay-Bold.ttf'),
    SF_PRO_SEMIBOLD_600: require('../../assets/fonts/SFProDisplay-Semibold.ttf'),
    SF_PRO_MEDIUM_500: require('../../assets/fonts/SFProDisplay-Medium.ttf'),
    SF_PRO_REGULAR_400: require('../../assets/fonts/SFProDisplay-Regular.ttf'),
};

function App({ }) {
    const [isFontsLoaded] = useFonts(customFonts);

    const onLayoutRootView = useCallback(async () => {
        if (isFontsLoaded) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            // Не украл, а по взаимствовал
            await SplashScreen.hideAsync();
        }
    }, [isFontsLoaded]);

    if (!isFontsLoaded) {
        return null;
    }
    return (
            <AlertNotificationRoot>
                <ApiProvider>
                    <RouterProvider>
                        <StoreProvider>
                            <WrapperApplication
                                onLayoutRootView={onLayoutRootView}
                            >
                                <MainTab />
                            </WrapperApplication>
                        </StoreProvider>
                    </RouterProvider>
                </ApiProvider>
            </AlertNotificationRoot>
    )
}
export default App