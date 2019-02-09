import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Haptic, Video } from 'expo';
import { colors, device, fonts, gStyle, util } from '../../api/constants';

import TouchIcon from '../../components/TouchIcon';

import SvgFullscreen from '../../components/icons/Svg.Fullscreen';
import SvgLoop from '../../components/icons/Svg.Loop';
import SvgPause from '../../components/icons/Svg.Pause';
import SvgPlay from '../../components/icons/Svg.Play';
import SvgStop from '../../components/icons/Svg.Stop';

const { Medium } = Haptic.ImpactFeedbackStyle;

const recordPlayerClose = require('../../assets/videos/recordplayer-576.mp4');

class VideoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.video = null;

    const videoH = Math.ceil((device.width * 9) / 16);
    const videoW = device.width;

    this.callbackMsgDefault = '...';

    this.state = {
      callback: this.callbackMsgDefault,
      current: null,
      duration: null,
      looping: false,
      status: 'Playing',
      videoLoaded: false,
      videoH,
      videoW
    };

    this.timeoutCallback = null;

    this.handleCallback = this.handleCallback.bind(this);
    this.handlePlaybackUpdate = this.handlePlaybackUpdate.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutCallback);
  }

  handleCallback(callbackMsg) {
    this.setState({
      callback: callbackMsg
    });

    clearTimeout(this.timeoutCallback);
    this.timeoutCallback = setTimeout(() => {
      this.setState({
        callback: this.callbackMsgDefault
      });
    }, 2000);
  }

  handlePlaybackUpdate(data) {
    const { videoLoaded } = this.state;
    const { didJustFinish, isLoaded, isLooping, positionMillis } = data;

    // video loaded?
    if (videoLoaded === false && isLoaded) {
      const { durationMillis } = data;
      const videoDuration = util.formatTime(durationMillis);

      this.handleCallback('video loaded');
      this.setState({
        duration: videoDuration,
        videoLoaded: true
      });
    }

    // video just finished?
    if (didJustFinish) {
      const finishedMsg = isLooping ? 'looped' : 'finished';
      this.handleCallback(`video ${finishedMsg}`);
    }

    const videoCurrent = util.formatTime(positionMillis);
    this.setState({
      current: videoCurrent
    });
  }

  render() {
    const {
      callback,
      current,
      duration,
      looping,
      status,
      videoH,
      videoW
    } = this.state;

    const isPlaying = status === 'Playing';
    const isStopped = status === 'Stopped';
    const isPaused = status === 'Paused';

    return (
      <View style={gStyle.container}>
        <Video
          isLooping={looping}
          isMuted
          onPlaybackStatusUpdate={data => this.handlePlaybackUpdate(data)}
          progressUpdateIntervalMillis={1000}
          rate={1.0}
          ref={ref => {
            this.video = ref;
          }}
          resizeMode="cover"
          shouldPlay
          source={recordPlayerClose}
          style={{ height: videoH, width: videoW }}
        />

        <View style={[gStyle.flexRow, styles.borderBottom]}>
          <View style={[styles.containerText, styles.borderRight]}>
            <Text style={styles.text}>{current}</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>{duration}</Text>
          </View>
        </View>

        <View style={gStyle.flexRow}>
          <View style={[styles.containerText, styles.borderRight]}>
            <Text style={styles.text}>{status}</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>{callback}</Text>
          </View>
        </View>

        <View style={[gStyle.flexRowSpace, gStyle.p16]}>
          <TouchIcon
            icon={<SvgPause />}
            iconColor={isPaused ? colors.white : colors.brandPrimary}
            onPress={() => {
              Haptic.impact(Medium);
              this.video.pauseAsync();
              this.setState({ status: 'Paused' });
            }}
            style={{
              backgroundColor: isPaused ? colors.brandPrimary : colors.white
            }}
          />

          <TouchIcon
            icon={<SvgStop />}
            iconColor={isStopped ? colors.white : colors.brandPrimary}
            onPress={() => {
              Haptic.impact(Medium);
              this.video.stopAsync();
              this.setState({ status: 'Stopped' });
            }}
            style={{
              backgroundColor: isStopped ? colors.brandPrimary : colors.white
            }}
          />

          <TouchIcon
            icon={<SvgPlay />}
            iconColor={isPlaying ? colors.white : colors.brandPrimary}
            onPress={() => {
              Haptic.impact(Medium);
              this.video.playAsync();
              this.setState({ status: 'Playing' });
            }}
            style={{
              backgroundColor: isPlaying ? colors.brandPrimary : colors.white
            }}
          />

          <TouchIcon
            icon={<SvgLoop />}
            iconColor={looping ? colors.white : colors.brandPrimary}
            onPress={() => {
              Haptic.impact(Medium);
              this.setState(prevState => ({
                looping: !prevState.looping,
                status: 'Playing'
              }));
            }}
            style={{
              backgroundColor: looping ? colors.brandPrimary : colors.white
            }}
          />
          <TouchIcon
            icon={<SvgFullscreen />}
            onPress={() => {
              Haptic.impact(Medium);
              this.video.presentFullscreenPlayer();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerText: {
    alignItems: 'center',
    backgroundColor: colors.brandSecondary,
    flex: 1,
    height: 34,
    justifyContent: 'center'
  },
  text: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16
  },
  borderBottom: {
    borderBottomColor: colors.brandPrimary,
    borderBottomWidth: 1
  },
  borderRight: {
    borderRightColor: colors.brandPrimary,
    borderRightWidth: 1
  }
});

export default VideoScreen;