import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

AsyncThumb.defaultProps = {
    width: '100%',
    height: '100%'
};
export function AsyncThumb({ url, width, height }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const dimensions = {
        height: height,
        width: width
    }

    const errorRender = () => (
        <Image source={require('../assets/img/image-default.png')}
            style={[styles.asyncThumb, dimensions]} />
    )

    const loadingRender = () => {
        <View style={[styles.asyncThumb, dimensions, styles.loading]}>
            <ActivityIndicator color={'gray'} />
        </View>
    }

    return (
        <View style={[dimensions]}>
            {isLoading && loadingRender()}
            <Image
                onLoadEnd={() => setIsLoading(false)}
                onError={() => setIsError(true)}
                source={{ uri: url }}
                style={[styles.asyncThumb, dimensions]} />
            {isError && errorRender()}
        </View>
    );
}
const styles = StyleSheet.create({
    asyncThumb: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    loading: {
        backgroundColor: 'rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})