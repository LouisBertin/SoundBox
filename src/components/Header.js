import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Header extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Hello World !</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    }
})
