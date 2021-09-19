import React from 'react';
import LoadAssets from './src/components/LoadAssets';
import Recruit from './src/page/Recruit';

const fonts = {
  'AirbnbCereal-Black': require('./assets/fonts/AirbnbCerealBlack.ttf'),
  'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCerealBold.ttf'),
  'AirbnbCereal-Book': require('./assets/fonts/AirbnbCerealBook.ttf'),
  'AirbnbCereal-ExtraBold': require('./assets/fonts/AirbnbCerealExtraBold.ttf'),
  'AirbnbCereal-Light': require('./assets/fonts/AirbnbCerealLight.ttf'),
  'AirbnbCereal-Medium': require('./assets/fonts/AirbnbCerealMedium.ttf'),
};

const assets = [
  require('./src/assets/dogboy.png'),
  require('./src/assets/foxtrot.png'),
  require('./src/assets/lionel.png'),
];

export default function App() {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <Recruit />
    </LoadAssets>
  );
}
