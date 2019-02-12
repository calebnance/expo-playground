import { Linking } from 'react-native';
import { Permissions } from 'expo';

export default async function() {
  const { status: existingStatus } = await Permissions.askAsync(
    Permissions.CAMERA_ROLL
  );

  let finalStatus = existingStatus;

  // ask again if status hasn't been granted
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    finalStatus = status;
  }

  // only if user allows permission to camera roll
  if (finalStatus !== 'granted') {
    // console.log('no permission');
    Linking.openURL('app-settings:');
  }

  return finalStatus === 'granted';
}
