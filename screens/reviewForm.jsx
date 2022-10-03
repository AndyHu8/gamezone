import { View, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from 'formik';

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik initialValues={{ title: '', body: '', rating: ''}}
            onSubmit={(values) => {
                addReview(values);
            }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                        style={globalStyles.input} 
                        placeholder='Review title' 
                        onChangeText={props.handleChange('title')} 
                        value={props.values.title}/>
                        
                        <TextInput 
                        style={globalStyles.input} 
                        multiline
                        placeholder='Review body' 
                        onChangeText={props.handleChange('body')} 
                        value={props.values.body}/>

                        <TextInput 
                        style={globalStyles.input} 
                        placeholder='Rating (1-5)' 
                        onChangeText={props.handleChange('rating')} 
                        value={props.values.rating}
                        keyboardType='numeric'/>

                        <Button title="submit" color="maroon" onPress={props.handleSubmit}></Button>
                    </View>
                )}
            </Formik>
        </View>
    )
}