import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient'; 
import { MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#ADA996", "#EAEAEA"],
        title: "Haze",
        subtitle: "fucking gloomy day"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#ADA996", "#EAEAEA"],
        title: "Drizzle",
        subtitle: "Take your small umbrella"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#000C40","#F0F2F0"],
        title: "Rain",
        subtitle: "Take your umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#274046","#e6dada"],
        title: "Snow",
        subtitle: "Be careful of your driving"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#ADA996", "#EAEAEA"],
        title: "Atmosphere",
        subtitle: "fucking gloomy day"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#3a7bd5","#00d2ff"],
        title: "Clear",
        subtitle: "It's good day to work out!"

    },
    Clouds: {
        iconName: "weather-coludy",
        gradient: ["#8e9eab","#eef2f3"],
        title: "Clouds",
        subtitle: "fucking gloomy day"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#ADA996", "#EAEAEA"],
        title: "Mist",
        subtitle: "fucking gloomy day"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#ADA996", "#EAEAEA"],
        title: "Dust",
        subtitle: "Rather put on your mask"
    }
}


export default function Weather({temp, condition, name}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{...styles.halfContainer,...styles.textContainer}}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
                <Text style={styles.name}>
                    Location: {name}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired,
    name: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        marginBottom: 10
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    name: {
        fontSize: 20,
        color: "white"
    }
});