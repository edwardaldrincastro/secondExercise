import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

const CategoriesSelection = (props) => {
    return (

        <ScrollView horizontal={true}>

            {props.categories.map((item, index) => (

                <View style={styles.categories} key={index}>
                    <View style={{ height: 85 }}>
                        <Image source={{ uri: item.img }}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                resizeMode: 'stretch'
                            }} />
                    </View>
                    <Text>{item.name}</Text>
                </View>

            ))
            }


        </ScrollView>
    )

}

const styles = StyleSheet.create({
    categories: {
        height: 120,
        width: 120,
        backgroundColor: "white",
        margin: 10,
        borderWidth: 1,
        borderColor: "#bbb"
    }
})

export default CategoriesSelection;