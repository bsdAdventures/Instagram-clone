import React from 'react';
import {Image} from 'react-native';
import {assets} from '../../assets';
import {responsive} from '../../styles';

export const LogoTitle = () => {
  return (
    <Image
      source={assets.title}
      style={{width: responsive.wp('27%'), height: responsive.hp('12%')}}
    />
  );
};
