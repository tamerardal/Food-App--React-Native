import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ResultsShowScreen from "./screens/ResultsShowScreen";
import SearchScreen from "./screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: 'Business Search',
    }
  }
)

export default createAppContainer(navigator);