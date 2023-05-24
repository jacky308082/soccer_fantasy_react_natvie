import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider} from "react-native-safe-area-context";
import TabOneScreen from "./screens/TabOneScreen";
import {RecoilRoot} from "recoil";

const App = () => {

    const isLoadingComplete = false //useCachedResources();
    // const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <RecoilRoot>
                <TabOneScreen />
            </RecoilRoot>
            <StatusBar />
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
