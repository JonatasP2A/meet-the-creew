import styled, { css } from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import { Spacing } from '../../styles';

const { width: wWidth } = Dimensions.get('window');
const width = wWidth - Spacing.xs * 2;

interface ColorProps {
  color: string;
}

interface ImagesProps {
  index: number;
}

interface ImageProps {
  aspectRatio: number;
}

export const Circle1 = styled.View<ColorProps>`
  width: ${width}px;
  height: ${width}px;
  border-radius: ${width / 2}px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

export const Circle2 = styled.View<ColorProps>`
  width: ${width - Spacing.m}px;
  height: ${width - Spacing.m}px;
  border-radius: ${(width - Spacing.m) / 2}px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

export const Circle3 = styled.View<ColorProps>`
  position: relative;
  width: ${width - Spacing.m * 2}px;
  height: ${width - Spacing.m * 2}px;
  border-radius: ${(width - Spacing.m * 2) / 2}px;
  background-color: ${({ color }) => color};
`;

export const Images = styled.View<ImagesProps>({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
});

export const Image = styled.Image<ImageProps>`
  width: ${width - Spacing.xl * 2}px;
  height: ${({ aspectRatio }) => width - Spacing.xl * 2 * aspectRatio}px;
`;
