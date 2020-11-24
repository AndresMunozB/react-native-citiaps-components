import React from 'react';
import { View, Text } from 'react-native';

const typeStyle = type => {
    if (type === 'success')
        return 'green'
    else if (type === 'error')
        return 'red'
}
const AlertBox = ({ value, type }) => {
    if (typeof (value) === 'string' && value.length !== 0) {
        return (
            <View style={{ backgroundColor: typeStyle(type) }}>
                <Text style={{ color: 'white', fontSize: 15, padding: 5 }}> {value}</Text>
            </View >
        )
    }
    return (null)

}

export default AlertBox;