import { CameraRoll, Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';

import preloadImages from './preloadImages';

// cache fonts
// /////////////////////////////////////////////////////////////////////////////
const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = images => {
  return Object.values(images).map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...imageAssets]);
};

// camera permissions
// /////////////////////////////////////////////////////////////////////////////
const cameraAccessAsync = async () => {
  // get exisiting camera permissions first
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.CAMERA
  );
  let finalStatus = existingStatus;

  // ask again to grant camera permissions (if not already allowed)
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    finalStatus = status;
  }

  return finalStatus === 'granted';
};

// camera roll permissions
// /////////////////////////////////////////////////////////////////////////////
const cameraRollAccessAsync = async () => {
  // get exisiting camera permissions first
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.CAMERA_ROLL
  );
  let finalStatus = existingStatus;

  // ask again to grant camera permissions (if not already allowed)
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    finalStatus = status;
  }

  return finalStatus === 'granted';
};

// save to camera roll
// /////////////////////////////////////////////////////////////////////////////
const saveToCameraRollAsync = async image => {
  const saveResult = await CameraRoll.saveToCameraRoll(image, 'photo');

  return saveResult;
};

// format milliseconds
// /////////////////////////////////////////////////////////////////////////////
const formatTime = milliseconds => {
  const secondsNum = parseInt(milliseconds / 1000, 10);
  let hours = Math.floor(secondsNum / 3600);
  let minutes = Math.floor((secondsNum - hours * 3600) / 60);
  let seconds = secondsNum - hours * 3600 - minutes * 60;

  // add leading zeros if needed
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${hours}:${minutes}:${seconds}`;
};

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync,
  cameraAccessAsync,
  cameraRollAccessAsync,
  saveToCameraRollAsync,
  formatTime
};
