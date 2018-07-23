import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export default class AudioContainer extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Hello world</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    }
})
