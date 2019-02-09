import { Image } from 'react-native';
import { Asset, Font } from 'expo';

export const cacheFonts = fonts => {
  const mappedFonts = fonts.map(font => Font.loadAsync(font));

  return mappedFonts;
};

export const cacheImages = images => {
  const imagesArray = Object.values(images);

  return imagesArray.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

export const formatTime = milliseconds => {
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
