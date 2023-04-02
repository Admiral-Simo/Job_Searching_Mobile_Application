import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import Stars from '../components/Stars';

const JobDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="relative flex-1">
      <ScrollView className="flex-1 px-4 pt-3">
        <TopSection />
        <Cathegories
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex === 0 && <About />}
        {activeIndex === 1 && <Qualification />}
        {activeIndex === 2 && <Responsibilities />}
      </ScrollView>
      <BottomSection />
    </SafeAreaView>
  );
};

const About = () => {
  const {job_description} = useRoute().params.job;
  return (
    <View className="px-5 mb-36">
      <Text className="my-6 text-2xl text-black font-rubikSemiBold">
        About the job:
      </Text>
      <Text className="mb-6">Overview</Text>
      <Text>{job_description}</Text>
    </View>
  );
};
const Qualification = () => {
  const {
    job_highlights: {Qualifications},
  } = useRoute().params.job;
  return (
    <View className="px-5 mb-36">
      <Text className="my-6 text-2xl text-black font-rubikSemiBold">
        Qualifications:
      </Text>
      {Qualifications?.map((item, i) => {
        return (
          <View className="flex-row items-start" key={i}>
            <View className="p-0.5 mr-3 bg-green-400 rounded-full">
              <Feather name="check" size={15} color="white" />
            </View>
            <Text className="mb-6">{item}</Text>
          </View>
        );
      })}
    </View>
  );
};
const Responsibilities = () => {
  const {
    job_highlights: {Responsibilities},
  } = useRoute().params.job;
  return (
    <View className="px-5 mb-36">
      <Text className="my-6 text-2xl text-black font-rubikSemiBold">
        Responsibilities:
      </Text>
      {Responsibilities?.map((item, i) => {
        return (
          <View className="flex-row items-start" key={i}>
            <View className="p-0.5 mr-3 bg-green-400 rounded-full">
              <Feather name="check" size={15} color="white" />
            </View>
            <Text className="mb-6">{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

const TopSection = () => {
  const {
    job_posted_at_timestamp,
    job_title,
    job_apply_quality_score,
    employer_logo,
  } = useRoute().params.job;
  const rating = Math.round(job_apply_quality_score * 5);
  const {goBack} = useNavigation();

  return (
    <>
      <View className="flex-row items-center justify-between">
        <Ionicons onPress={goBack} name="arrow-back" size={32} />
        <Ionicons name="share-social-sharp" size={32} />
      </View>
      <Image
        className="w-16 h-16 mx-auto mt-16 rounded-xl"
        source={{
          uri:
            employer_logo ||
            'https://realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png',
        }}
      />
      <Text className="mt-5 text-2xl text-center text-black capitalize font-rubikBold">
        {job_title}
      </Text>
      <Text className="text-center font-rubikRegular">
        {moment(job_posted_at_timestamp * 1000).format('LLLL')}
      </Text>
      <View className="flex-row items-center justify-center">
        <Text className="mr-1 font-rubikSemiBold">
          job apply quality score :
        </Text>
        <Stars rating={rating} size={20} />
      </View>
    </>
  );
};

function Cathegories({activeIndex, setActiveIndex}) {
  const types = ['About', 'Qualifications', 'Responsibilities'];
  return (
    <View className="flex-row items-center justify-between mt-5">
      {types.map((type, i) => (
        <Cathegory
          key={type}
          type={type}
          isActive={i === activeIndex}
          i={i}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </View>
  );
}

function Cathegory({type, isActive, i, setActiveIndex}) {
  const setCurrentJob = () => {
    setActiveIndex(i);
  };
  return (
    <TouchableOpacity
      className={`${
        isActive ? 'bg-secondary' : 'border-gray-200'
      } p-4 border rounded-xl`}
      onPress={setCurrentJob}>
      <Text
        className={`${
          isActive ? 'text-white' : 'text-gray-500'
        } font-rubikRegular`}>
        {type}
      </Text>
    </TouchableOpacity>
  );
}

function BottomSection() {
  const {job_apply_link} = useRoute().params.job;
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-gray-100">
      <View className="flex-row items-center px-4 py-2 space-x-2">
        <TouchableOpacity className="p-3 border-2 rounded-lg border-primary">
          <AntDesign name="hearto" size={32} color="#F77658" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(job_apply_link)}
          className="items-center justify-center flex-1 h-full px-3 rounded-lg bg-primary font-rubikRegular">
          <Text className="text-base text-white font-rubikBold">
            Apply for job
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default JobDetails;
