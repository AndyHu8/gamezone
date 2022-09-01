import { View, Text, Image, StyleSheet } from "react-native";
import { globalStyles, images } from "../../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    const rating = navigation.getParam("rating");

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>ReviewDetails Screen</Text>
                <Text>{navigation.getParam("title")}</Text>
                <Text>{navigation.getParam("body")}</Text>
                <View style={styles.ratingStyle}>
                    <Text>GameZone rating: </Text>
                    <Image source={require(images.ratings[rating])}/>
                </View>
            </Card>
            <Button title="Back To Home Screen" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingStyle: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    }
});