import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("ReviewDetails");
        //navigation.push("ReviewDetails");
    }

    const [reviews, setReviews] = useState([
        {title: "Title 1", rating: 5, body: "Lorem Ipsum", key: "1"},
        {title: "Title 2", rating: 3, body: "Lorem Ipsum", key: "2"},
        {title: "Title 3", rating: 1, body: "Lorem Ipsum", key: "3"}
    ])

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", {item})}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )}/>
            <Button title="Go To Review Details" onPress={pressHandler}/>
        </View>
    )
}