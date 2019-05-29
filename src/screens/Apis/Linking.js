import React from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';
import { gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

const LinkingScreen = () => (
  <ScrollView style={gStyle.container}>
    <View style={gStyle.spacer24} />

    <View style={gStyle.pH16}>
      <Text style={gStyle.paragraph}>
        Linking is the ability to link to system apps or other 3rd party apps,
        or even websites (with the ability to also pass data to websites).
      </Text>

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Built-in URL Schemes</Text>
      </View>

      <View style={gStyle.centerItems}>
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Linking.openURL('mailto:support@expo.io')}
          text="E-mail Expo Support"
        />

        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Linking.openURL('tel:+123456789')}
          text="Open Phone App"
        />

        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Linking.openURL('sms:+123456789')}
          text="Send a Text"
        />

        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Linking.openURL('https://docs.expo.io')}
          text="Open Expo's Docs"
        />
      </View>

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Examples of Popular Apps</Text>
      </View>

      <View style={gStyle.centerItems}>
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Linking.openURL('nflx://')}
          text="Open Netflix"
        />
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Linking.openURL('twitter://')}
          text="Open Twitter"
        />
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Linking.openURL('spotify://')}
          text="Open Spotify"
        />
      </View>

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Helpful Links</Text>
      </View>

      <View style={gStyle.centerItems}>
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() =>
            Linking.openURL(
              'https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/'
            )
          }
          text="Popular App Schemes"
        />
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() =>
            Linking.openURL(
              'https://docs.expo.io/versions/latest/workflow/linking#opening-links-to-other-apps'
            )
          }
          text="Use of canOpenURL()"
        />
      </View>
    </View>
    <View style={gStyle.spacer24} />
  </ScrollView>
);

export default LinkingScreen;
