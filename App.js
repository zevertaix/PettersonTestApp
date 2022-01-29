import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import Navigator from './src/navigation';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { store } from "./src/store/configureStore";

export default function App() {
  let [fontsLoaded] = useFonts({
    'Vag-World': require('./assets/fonts/vag-world-bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}> 
      <StatusBar hidden />
      <Navigator />
    </Provider>
  );
}
