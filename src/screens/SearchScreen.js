import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <SearchBar />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default SearchScreen;