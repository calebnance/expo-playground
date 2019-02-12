import { CameraRoll } from 'react-native';

export default async function(image) {
  const saveResult = await CameraRoll.saveToCameraRoll(image, 'photo');

  return saveResult;
}
