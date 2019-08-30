import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Video } from 'expo-av';
import { colors, device, fonts, func, gStyle } from '../../constants';

// components
import TouchIcon from '../../components/TouchIcon';

// icons
import SvgFullscreen from '../../components/icons/Svg.Fullscreen';
import SvgLoop from '../../components/icons/Svg.Loop';
import SvgPause from '../../components/icons/Svg.Pause';
import SvgPlay from '../../components/icons/Svg.Play';
import SvgStop from '../../components/icons/Svg.Stop';

const { Medium } = Haptics.ImpactFeedbackStyle;

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
    this.handleFullscreenUpdate = this.handleFullscreenUpdate.bind(this);
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

  handleFullscreenUpdate(data) {
    const { fullscreenUpdate, status } = data;

    // FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS
    if (fullscreenUpdate === 2) {
      this.handleCallback('fullscreen WILL close');
    }

    // FULLSCREEN_UPDATE_PLAYER_DID_DISMISS
    if (fullscreenUpdate === 3) {
      this.handleCallback('fullscreen DID close');
      if (status.isPlaying === false) {
        // is it at the start or end?
        if (
          status.positionMillis < 900 ||
          status.positionMillis === status.durationMillis
        ) {
          // this.video.stopAsync();
          this.setState({ status: 'Stopped' });
        } else {
          // then it's paused
          this.video.pauseAsync();
          this.setState({ status: 'Paused' });
        }
      } else {
        this.video.playAsync();
        this.setState({ status: 'Playing' });
      }
    }
  }

  handlePlaybackUpdate(data) {
    const { videoLoaded } = this.state;
    const { didJustFinish, isLoaded, isLooping, positionMillis } = data;

    // video loaded?
    if (videoLoaded === false && isLoaded) {
      const { durationMillis } = data;
      const videoDuration = func.formatTime(durationMillis);

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

    const videoCurrent = func.formatTime(positionMillis);
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
          onFullscreenUpdate={data => this.handleFullscreenUpdate(data)}
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
              if (device.iOS) Haptics.impactAsync(Medium);

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
              if (device.iOS) Haptics.impactAsync(Medium);

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
              if (device.iOS) Haptics.impactAsync(Medium);

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
              if (device.iOS) Haptics.impactAsync(Medium);

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
              if (device.iOS) Haptics.impactAsync(Medium);

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
