import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "6e3dfd30a51e72a5f611a01e66d9d318";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather,
        name
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, condition: weather[0].main, temp, name});
  };
  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch(error){
      Alert.alert("Can't find you.", "Fuck off");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} name={name} />;
  }
}