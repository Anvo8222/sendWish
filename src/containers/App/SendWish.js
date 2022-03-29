import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Alert,
  Animated,
  Image,
  ImageBackground,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn } from './actions';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function SendWish({ turn }) {
  const [isShowInputWriteWish, setIsShowInputWriteWish] = useState(false);
  const [isShowMeteors, setIsShowMeteors] = useState(false);
  const [marginLeftMeteor, setMarginLeftMeteor] = useState(
    new Animated.Value(-210),
  );
  const [marginTopMeteor, setMarginTopMeteor] = useState(
    new Animated.Value(-90),
  );
  const [textWish, setTextWish] = useState('');
  const dispatch = useDispatch();

  const onSetMeteor = () => {
    if (turn <= 0) {
      Alert.alert('Not enough turn!');
      return false;
    }
    setIsShowInputWriteWish(false);

    if (isShowMeteors) {
      return false;
    }
    dispatch(decrementTurn(1));
    setIsShowMeteors(true);
    Animated.timing(marginLeftMeteor, {
      toValue: 400,
      duration: 4000,
      useNativeDriver: false,
    }).start();
    Animated.timing(marginTopMeteor, {
      toValue: 80,
      duration: 4000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      setMarginLeftMeteor(new Animated.Value(-210));
      setMarginTopMeteor(new Animated.Value(-90));
      setIsShowMeteors(false);
    }, 4000);
  };

  const onSendWish = () => {
    if (textWish === '') {
      Alert.alert('Please enter!');
    } else {
      Alert.alert('The wish has been sent!');
    }
  };
  const handleOnChane = value => {
    setTextWish(value);
  };
  return (
    <>
      {isShowMeteors ? (
        <Animated.View
          style={{
            top: marginTopMeteor,
            left: marginLeftMeteor,
            position: 'absolute',
          }}>
          <Image style={[homeStyle.meteorImg]} source={images.home.meteor} />
        </Animated.View>
      ) : (
        false
      )}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={[homeStyle.containerPoPup]}>
            {isShowInputWriteWish ? (
              <View style={homeStyle.block}>
                <ImageBackground
                  style={homeStyle.poPup}
                  source={images.home.poPup}>
                  <TextInput
                    showSoftInputOnFocus={true}
                    multiline={true}
                    underlineColorAndroid="transparent"
                    style={homeStyle.inputWish}
                    placeholder="Enter your wish"
                    editable={true}
                    onChangeText={value => handleOnChane(value)}
                  />
                </ImageBackground>
                <View style={homeStyle.containerSend}>
                  <TouchableOpacity
                    onPress={onSendWish}
                    onLongPress={onSendWish}>
                    <Image style={homeStyle.send} source={images.home.send} />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              false
            )}
          </View>
          <View style={[homeStyle.container, homeStyle.footer]}>
            <View style={homeStyle.groupClockSms}>
              <TouchableOpacity onPress={onSetMeteor} onLongPress={onSetMeteor}>
                <Image style={homeStyle.clock} source={images.home.clock} />
              </TouchableOpacity>
              <View style={homeStyle.containerSms}>
                <Image style={homeStyle.sms} source={images.home.sms} />
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setIsShowInputWriteWish(!isShowInputWriteWish)}
                onLongPress={() =>
                  setIsShowInputWriteWish(!isShowInputWriteWish)
                }>
                <Image
                  style={homeStyle.creatWish}
                  source={images.home.creatWish}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

SendWish.propTypes = {
  turn: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});
export default connect(mapStateToProps)(SendWish);
