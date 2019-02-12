import { Linking } from 'react-native';
import { Permissions } from 'expo';

export default async function() {
  const { status: existingStatus } = await Permissions.askAsync(
    Permissions.CAMERA_ROLL
  );

  // only if user allows permission to camera roll
  if (existingStatus !== 'granted') {
    // console.log('no permission');
    Linking.openURL('app-settings:');
  }

  return existingStatus;
}
