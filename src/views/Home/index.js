import React from 'react';
import {SafeAreaView} from 'react-native';

import {Icon} from 'react-native-elements';

const Home = () => {
  return (
    <SafeAreaView>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log('hello')}
      />
    </SafeAreaView>
  );
};

export default Home;
