import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NearByJobCard({job}: any) {
  const {
    job_employment_type,
    employer_logo,
    job_id,
    job_title,
    handleCardPress,
  } = job;
  const {navigate} = useNavigation();

  const handleNavigate = () => navigate('Job', {job});

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      className="flex-row items-center p-5 my-1 space-x-3 bg-white">
      <Image
        source={{
          uri:
            employer_logo ||
            'https://realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png',
        }}
        resizeMode="contain"
        className="w-10 h-10 rounded-full"
      />

      <View>
        <Text
          className="text-black capitalize font-rubikBold"
          numberOfLines={1}>
          {job_title}
        </Text>
        <Text className="mt-1 font-rubikRegular">{job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
}
