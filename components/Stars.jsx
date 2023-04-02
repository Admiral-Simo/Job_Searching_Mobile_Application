import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stars = ({rating, size}) => {
  return (
    <View className="flex-row items-center">
      {[...Array(rating)].map(item => (
        <AntDesign key={item} name="star" color="#F77658" size={size} />
      ))}
      {[...Array(5 - rating)].map(item => (
        <AntDesign key={item} name="staro" color="black" size={size} />
      ))}
    </View>
  );
};

export default Stars;
