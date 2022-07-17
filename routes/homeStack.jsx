import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetail";

//Reihenfolge der Screens (Oben als Erstes immer zeigen)
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "GameZone",
            headerStyle: {
                backgroundColor: "#333"
            }
        }
    },

    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details",
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: "#eee",
            height: 60
        }
    }
});

export default createAppContainer(HomeStack);