import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    console.log(term);
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <SearchBar term={term} onTermChange = {newTerm => setTerm(newTerm)} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default SearchScreen;