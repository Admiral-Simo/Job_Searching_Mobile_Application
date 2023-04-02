import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PopularJobs from '../components/cards/PopularJobs';
import NearByJobs from '../components/cards/NearByJobs';

const Home = () => {
  return (
    <ScrollView className="flex-1 px-4">
      {Navbar()}
      {Headings()}
      {Search()}
      <JobTypes />
      <PopularJobs />
      <NearByJobs />
    </ScrollView>
  );
};

function JobTypes() {
  const types = ['Full-Time', 'Part-Time', 'Contractor'];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View className="flex-row items-center mt-3">
      {types.map((type, i) => (
        <JobType
          key={i}
          type={type}
          isActive={i === activeIndex}
          i={i}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </View>
  );
}

function JobType({type, isActive, i, setActiveIndex}) {
  const setCurrentJob = () => {
    setActiveIndex(i);
  };
  return (
    <TouchableOpacity
      className={`${
        isActive ? 'border-black' : 'border-gray-200'
      } p-2 border rounded-xl mr-3`}
      onPress={setCurrentJob}>
      <Text
        className={`${
          isActive ? 'text-black' : 'text-gray-500'
        } font-rubikRegular`}>
        {type}
      </Text>
    </TouchableOpacity>
  );
}

function Search() {
  return (
    <View className="flex-row items-center space-x-2">
      <TextInput
        className="flex-1 h-full px-3 bg-gray-200 rounded-lg font-rubikRegular"
        placeholder="What are you looking for?"
      />
      <TouchableOpacity className="p-3 rounded-lg bg-primary">
        <Ionicons name="md-search-outline" color="#fff" size={32} />
      </TouchableOpacity>
    </View>
  );
}

function Headings() {
  return (
    <View className="my-5 space-y-2">
      <Text className="text-3xl font-rubikLight">Hello Adrian</Text>
      <Text className="text-3xl text-black font-rubikRegular">
        Find your perfect job
      </Text>
    </View>
  );
}

function Navbar() {
  return (
    <View className="flex-row items-center justify-between mt-3">
      <Ionicons name="menu-outline" size={32} />
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
        }}
        className="w-10 h-10 rounded-lg"
      />
    </View>
  );
}

export default Home;