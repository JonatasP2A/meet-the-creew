import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Spacing } from '../../styles';
import { CIRCLE_WIDTH } from '../Swiper/styles';

import { Circle1, Circle2, Circle3, Images, Image } from './styles';

export const CREW = [
  {
    name: 'Dogboy',
    description: 'Recruit the dog boy',
    backgroundColor: '#AE7037',
    buttonColor: '#794E27',
    picture: require('../../assets/dogboy.png'),
    aspectRatio: 220 / 278,
  },
  {
    name: 'Foxtrot',
    description: 'Recruit the dancer fox',
    backgroundColor: '#FF8831',
    buttonColor: '#C05E25',
    picture: require('../../assets/foxtrot.png'),
    aspectRatio: 220 / 278,
  },
  {
    name: 'Lionel',
    description: 'Recruit the soccer player lion',
    backgroundColor: '#FFC01F',
    buttonColor: '#BB8C15',
    picture: require('../../assets/lionel.png'),
    aspectRatio: 220 / 278,
  },
];
const { width } = Dimensions.get('window');
const AnimatedImages = Animated.createAnimatedComponent(Images);

interface CrewProps {
  color1: string;
  color2: string;
  color3: string;
  x: Animated.SharedValue<number>;
}

const Crew = ({ color1, color2, color3, x }: CrewProps) => {
  return (
    <Circle1 color={color1}>
      <Circle2 color={color2}>
        <Circle3 color={color3}>
          {CREW.map((character, index) => {
            const inputRange = [
              ((index - 1) * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2,
              (index * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2,
              ((index + 1) * (width - Spacing.xl * 2 + CIRCLE_WIDTH)) / 2,
            ];
            const style = useAnimatedStyle(() => {
              const translateX = interpolate(x.value, inputRange, [
                width / 2,
                0,
                -width / 2,
              ]);
              const scale = interpolate(x.value, inputRange, [0.45, 1, 0.45]);
              return {
                transform: [{ translateX }, { scale }],
              };
            });

            return (
              <AnimatedImages key={index} index={index} style={style}>
                <Image
                  source={character.picture}
                  aspectRatio={character.aspectRatio}
                />
              </AnimatedImages>
            );
          })}
        </Circle3>
      </Circle2>
    </Circle1>
  );
};

export default Crew;
