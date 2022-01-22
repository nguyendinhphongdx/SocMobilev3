import React from 'react';
import {View, Text} from 'react-native';
import ViewBackGround from '../../components/viewbackground';

const ResponseScreen = () => {
  return (
    <ViewBackGround>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>Messages Screen</Text>
      </View>
    </ViewBackGround>
  );
};

export default ResponseScreen;
