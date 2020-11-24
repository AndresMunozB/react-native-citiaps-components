import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = () => {
    return (
        <View style={[styles.containerSpinner, styles.horizontal]}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    )
}

export default Spinner;

const styles = StyleSheet.create({
    containerSpinner: {
        flex: 1,
        margin: 50,
        height: 100,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
})
