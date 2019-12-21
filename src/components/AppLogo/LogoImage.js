import React from 'react';
import {Image, View} from 'react-native';
import {assets} from '../../assets';
import {responsive} from '../../styles';

export const HomeLogo = () => {
  return (
    <View>
      <Image
        source={assets.title}
        style={{
          width: responsive.wp('27%'),
          height: responsive.hp('12%'),
        }}
      />
    </View>
  );
};
