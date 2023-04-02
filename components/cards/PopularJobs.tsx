import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import PopularJobCard from './PopularJobCard';
import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';

export default function PopularJobs() {
  const data = useFetch('popular');
  const isLoading = false;
  const error = '';

  const [activeId, setActiveId] = useState('0');

  const handleCardPress = (id: any) => {
    setActiveId(id);
  };

  return (
    <View className="mt-5">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg text-black font-rubikSemiBold">
          Popular jobs
        </Text>
        <TouchableOpacity>
          <Text className="font-rubikLight">Show All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator className="mt-6" size="large" color="#F77658" />
        ) : error ? (
          <Text className="mt-6 ml-5 text-primary font-rubikLight">
            Something went wrong!
          </Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard
                handleCardPress={handleCardPress}
                isActive={activeId === item.job_id}
                {...item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: 10}}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
