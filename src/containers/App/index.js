import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import Buttons from './Buttons';
import backgrounds from './data/backgrounds';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import SendWish from './SendWish';
import { homeStyle } from './style';

const key = 'App';

function App({ turn }) {
  useInjectReducer({ key, reducer });
  const [backgroundIndex, setBackgroundIndex] = useState(1);
  const [isShowButtons, setShowButtons] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setBackgroundIndex(Math.floor(Math.random() * backgrounds.length));
    }, 2000);
  }, []);

  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };
  return (
    <ImageBackground
      style={homeStyle.background}
      source={backgrounds[backgroundIndex]}>
      <View style={[homeStyle.container, homeStyle.header]}>
        <Text style={homeStyle.turn}>{turn}</Text>
        <TouchableOpacity
          onPress={onSetShowButtons}
          onLongPress={onSetShowButtons}>
          <Image style={homeStyle.cart} source={images.home.cart} />
        </TouchableOpacity>
      </View>
      {isShowButtons ? <Buttons /> : <SendWish />}
    </ImageBackground>
  );
}

App.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
