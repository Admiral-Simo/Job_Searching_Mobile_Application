import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function PopularJobCard({
  employer_name,
  employer_logo,
  job_id,
  job_title,
  job_country,
  handleCardPress,
  isActive,
}: any) {
  return (
    <TouchableOpacity
      className={`p-5 my-1 rounded-lg ${
        isActive ? 'bg-secondary' : 'bg-white'
      }`}
      onPress={() => handleCardPress(job_id)}>
      <View className="flex-row items-center space-x-2">
        <Image
          source={{
            uri:
              employer_logo ||
              'https://realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png',
          }}
          resizeMode="contain"
          className="w-10 h-10 rounded-full"
        />
        <Text
          className={`font-rubikRegular ${isActive && 'text-white'}`}
          numberOfLines={1}>
          {employer_name}
        </Text>
      </View>
      <View>
        <Text
          className={` capitalize font-rubikBold  ${
            isActive ? 'text-white' : 'text-black'
          }`}
          numberOfLines={1}>
          {job_title}
        </Text>
        <Text className={`font-rubikRegular mt-1 ${isActive && 'text-white'}`}>
          {job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
