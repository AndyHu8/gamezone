import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("ReviewDetails");
        //navigation.push("ReviewDetails");
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: "Title 1", rating: 5, body: "Lorem Ipsum", key: "1"},
        {title: "Title 2", rating: 3, body: "Lorem Ipsum", key: "2"},
        {title: "Title 3", rating: 1, body: "Lorem Ipsum", key: "3"}
    ])

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <MaterialIcons style={{...styles.modalToggle, ...styles.modalClose}} name="close" size={24} onPress={() => setModalOpen(false)}/>
                    <ReviewForm/>
                </View>
            </Modal>

            <MaterialIcons style={styles.modalToggle} name="add" size={24} onPress={() => setModalOpen(true)}/>

            <Text style={globalStyles.titleText}>Home Screen</Text>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", {item})}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}/>
            <Button title="Go To Review Details" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {    
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})