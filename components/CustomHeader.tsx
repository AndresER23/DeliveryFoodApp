import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchSection}>
                <View style={styles.searchField}>
                    <Ionicons style={styles.searchIcon} size={20} name="ios-search" color={Colors.medium}/>
                    <TextInput placeholder="Restaurants, groceries, dishes" placeholderTextColor={Colors.medium}style={styles.input}/>
                </View>
                <Link href={'/'} asChild>
                    <TouchableOpacity style={styles.optionButton}>
                        <Ionicons name='options-outline' size={20} color={Colors.primary}/>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}
   

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../assets/images/bike.png')} style={styles.image}/>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <TouchableOpacity>
                    <Text style={styles.title}>Delivery • Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.locationName}>
                    <Text style={styles.subtitle}>London</Text>
                    <Ionicons name='chevron-down' size={20} color={Colors.primary}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.profileButton}>
                <Ionicons name='person-outline' size={20} color={Colors.primary}/>
            </TouchableOpacity>
        </View>
        <SearchBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea : {
        backgroundColor : '#fff',
        flex: 1
    },
    container : {
        height : 60,
        backgroundColor  : '#fff',
        alignItems : 'center',
        justifyContent: 'space-between',
        flexDirection : 'row',
        gap: 15,
        paddingHorizontal : 20,
    },
    image : {
        width : 50,
        height: 50
    },
    titleContainer:{
        flex : 1
    },
    title : {
        fontSize : 14,
        color : Colors.medium
    },
    profileButton:{
        backgroundColor : Colors.ligthGrey,
        padding : 10,
        borderRadius : 50
    },
    subtitle : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    locationName: {flexDirection: 'row'},


    searchContainer : {
        height: 70,
        backgroundColor : '#fff'
    },
    searchSection : {
        flexDirection : 'row',
        paddingHorizontal : 20,
        gap: 10,
        flex: 1,
        alignItems : 'center'
    },
    searchField : {
        flex: 1,
        backgroundColor : Colors.ligthGrey,
        borderRadius : 8,
        flexDirection : 'row',
        alignItems: 'center'
    },
    optionButton : {
        padding : 10 ,
        borderRadius : 50
    },
    input : {
        padding : 10,
        fontSize : 14
    },
    searchIcon : {
        paddingLeft: 4,
    }
})

export default CustomHeader