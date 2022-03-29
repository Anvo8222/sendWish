import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    fontFamily: 'Verdana',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '10%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  button: {
    color: 'white',
    width: '45%',
    textAlign: 'center',
    padding: 5,
    backgroundColor: `rgba(198,140,70,1)`,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  textSmall: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});

export const homeStyle = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    height: '100%',
  },

  meteorImg: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    transform: [{ rotate: '-6deg' }],
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
  },
  turn: {
    color: '#159a9b',
    fontSize: 20,
    fontWeight: 'bold',
  },
  poPup: {
    resizeMode: 'contain',
    height: 340,
    width: 270,
  },
  cart: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  block: {
    display: 'flex',
    justifyContent: 'center',
  },
  containerPoPup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 340,
  },
  inputWish: {
    color: '#159a9b',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    multiLine: true,
    textAlignVertical: 'top',
    marginTop: '40%',
  },
  doneWriteWishBtn: {
    width: '100%',
    resizeMode: 'cover',
    height: 40,
  },
  send: {
    width: 100,
    resizeMode: 'contain',
  },
  containerSend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    marginHorizontal: '20%',
    marginTop: '10%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  clock: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  sms: {
    width: 140,
    height: 80,
    resizeMode: 'contain',
  },
  creatWish: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  groupClockSms: {
    position: 'relative',
  },
  containerSms: {
    position: 'absolute',
    top: '-100%',
    left: '100%',
  },
});
