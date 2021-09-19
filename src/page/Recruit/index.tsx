import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Button, Crew, Swiper } from '../../components';
import { CREW } from '../../components/Crew';
import { CIRCLE_WIDTH } from '../../components/Swiper/styles';
import { Colors, Spacing } from '../../styles';
import { Name, Description } from './styles';

const { width } = Dimensions.get('window');

const Recruit = () => {
  const [character, setCharacter] = useState(0);
  const translateX = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      CREW.map(
        (_, index) => (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2
      ),
      CREW.map((character) => character.backgroundColor)
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <View style={{ alignItems: 'center', paddingTop: 60 }}>
        <Text style={styles.text1}>meet the</Text>
        <Text style={styles.text2}>crew</Text>
      </View>
      <Crew
        x={translateX}
        color1={Colors.orange300}
        color2={Colors.orange200}
        color3={Colors.orange100}
      />
      <Animated.View>
        <Name>Dogboy</Name>
        <Description>Recruit the dog boy</Description>
      </Animated.View>
      <Swiper x={translateX} min={0} max={width - Spacing.xl - CIRCLE_WIDTH} />
      <Button x={translateX} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width,
    padding: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text1: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'AirbnbCereal-Medium',
    opacity: 0.5,
    textTransform: 'uppercase',
  },
  text2: {
    color: '#FFF',
    fontSize: 60,
    fontFamily: 'AirbnbCereal-Bold',
    textTransform: 'uppercase',
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'AirbnbCereal-Bold',
  },
  description: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'AirbnbCereal-Book',
    opacity: 0.5,
  },
  button: {
    height: 60,
    width: width - Spacing.xl * 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    position: 'relative',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'AirbnbCereal-Medium',
    textDecorationLine: 'underline',
  },
  buttonIcon: {
    position: 'absolute',
    right: 34,
  },
});

export default Recruit;
