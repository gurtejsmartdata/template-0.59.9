import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/config/routes";
import { addListeners } from "./src/utilities/listeners";
import { Provider } from "react-redux";
import setup from "./src/store/setup";
import App from "./App";
// Navigation.registerComponent(`OSCE`, () => App);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: "Loader"
//      }
//     }
//   });
// });

Navigation.events().registerAppLaunchedListener(() => {
  const store = setup();
  registerScreens(store, Provider);
  addListeners();
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true
    },
    bottomTabs: {
      visible: false,
      drawBehind: true
    }
  });
  Navigation.setRoot({
    root: {
      component: {
        name: "Loader"
      }
    }
  });
});
