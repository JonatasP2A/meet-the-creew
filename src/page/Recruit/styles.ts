import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../styles';

const { width } = Dimensions.get('window');

export const Name = styled.Text`
  color: ${Colors.white};
  font-size: 20px;
  font-family: 'AirbnbCereal-Bold';
`;

export const Description = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  font-family: 'AirbnbCereal-Book';
  opacity: 0.5;
`;

export const Header = styled.View`
  width: ${width}px;
  align-items: center;
`;

export const SmallerTitle = styled.Text`
  color: ${Colors.white};
  font-size: 20px;
  font-family: 'AirbnbCereal-Medium';
  opacity: 0.5;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  position: relative;
  color: ${Colors.white};
  font-size: 60px;
  font-family: 'AirbnbCereal-Bold';
  text-transform: uppercase;
`;

export const BackgroundTitle = styled.Text`
  position: absolute;
  font-size: 100px;
  bottom: -20px;
  color: ${Colors.white};
  opacity: 0.05;
  font-family: 'AirbnbCereal-Bold';
  text-transform: uppercase;
`;

export const Info = styled.View`
  align-items: center;
`;
