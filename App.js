import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import Navigator from './src/navigation';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import getStore from "./src/store/configureStore";
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = getStore()

export default function App() {
  let [fontsLoaded] = useFonts({
    'Vag-World': require('./assets/fonts/vag-world-bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden />
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
