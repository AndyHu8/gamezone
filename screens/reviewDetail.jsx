import { View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Text>{navigation.getParam("title")}</Text>
            <Text>{navigation.getParam("body")}</Text> 
            <Text>{navigation.getParam("rating")}</Text>
            <Button title="Back To Home Screen" onPress={pressHandler}/>
        </View>
    )
}