
//

import { AppRegistry, Platform } from 'react-native';


AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}

//
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";


//


//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//COntext API
import Auth from "./Context/store/Auth";

//Navigators
import Main from "./Navigators/Main";

//Screans
import Header from "./Shared/Header";

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}

