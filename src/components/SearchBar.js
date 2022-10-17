import React from "react";
import {View, TextInput, StyleSheet, Text} from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Text>Search Bar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    },
});

export default SearchBar;