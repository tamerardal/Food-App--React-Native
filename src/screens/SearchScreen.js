import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultList from "../components/ResultList";

import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";


const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = (price) =>{
        // price=== '₺' || '₺₺' || '₺₺₺'
        return results.filter(result  =>{
          return result.price === price;
        });
      };

    
    return (
        <View style = {styles.container}>
            <SearchBar 
                term={term} 
                onTermChange = {(newTerm) => setTerm(newTerm)} 
                onTermSubmit = {() => searchApi(term)} />
            {errorMessage ? <Text style={styles.result} >Something went wrong...</Text> : <View style={{height: 15}}></View> }
            <ScrollView>
                <ResultList navigation={navigation} title="Cost Effective" results={filterResultsByPrice('₺')} />
                <ResultList navigation={navigation} title="Bit Pricier" results={filterResultsByPrice('₺₺')}/>
                <ResultList navigation={navigation} title="Big Spender" results={filterResultsByPrice('₺₺₺')}/>
            </ScrollView>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    result: {
        padding: 15,
    }
});

export default SearchScreen;