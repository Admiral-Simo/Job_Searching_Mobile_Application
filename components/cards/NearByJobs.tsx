import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import NearByJobCard from './NearByJobCard';
import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function NearByJobs() {
  const data = useFetch('nearBy');
  const isLoading = false;
  const error = '';

  return (
    <View className="mt-5">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg text-black font-rubikSemiBold">
          Nearby jobs
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
          <>
            {data?.map(job => (
              <NearByJobCard key={job?.job_id} job={job} />
            ))}
          </>
        )}
      </View>
    </View>
  );
}
