import React from "react";
import {View, TextInput, StyleSheet, Text} from 'react-native';

import { Ionicons } from "@expo/vector-icons";


const SearchBar = ({term, onTermChange}) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={30} style={styles.icon} />
            <TextInput 
                placeholder="Search" 
                style={styles.input} 
                value={term} 
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCorrect={false} 
                autoCapitalize="none" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    input: {
        borderColor: 'black',
        flex: 1,
        borderRadius: 20
    },
    icon: {
        margin: 8,
    }
});

export default SearchBar;