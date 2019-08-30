import colors from './colors';
import fonts from './fonts';

export default {
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  centerItems: {
    alignItems: 'center'
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowSpace: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    height: 46,
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 16
  },
  btnText: {
    color: colors.black,
    fontSize: 16
  },
  btnPrimary: {
    backgroundColor: colors.brandPrimary,
    borderColor: colors.brandPrimary
  },
  btnPrimaryText: {
    color: colors.white
  },
  navHeaderRightIconStyle: {
    borderWidth: 0,
    paddingLeft: 0,
    paddingRight: 16,
    paddingVertical: 8
  },
  heading: {
    fontFamily: fonts.medium,
    fontSize: 20,
    marginBottom: 16,
    marginTop: 16,
    textAlign: 'center'
  },
  sectionHeading: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 16,
    paddingVertical: 8
  },
  sectionHeadingText: {
    fontFamily: fonts.medium,
    fontSize: 20
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 16
  },
  paragraphBold: {
    fontFamily: fonts.bold,
    fontSize: 14,
    marginBottom: 16
  },
  separator: {
    backgroundColor: colors.lightGrey,
    height: 1,
    marginVertical: 16,
    width: '100%'
  },
  spacer24: {
    height: 24,
    width: '100%'
  },
  spacer240: {
    height: 240,
    width: '100%'
  },
  mB8: {
    marginBottom: 8
  },
  mT8: {
    marginTop: 8
  },
  mT16: {
    marginTop: 16
  },
  mR8: {
    marginRight: 8
  },
  mR16: {
    marginRight: 16
  },
  mH16: {
    marginHorizontal: 16
  },
  mV16: {
    marginVertical: 16
  },
  mV24: {
    marginVertical: 24
  },
  mV32: {
    marginVertical: 32
  },
  p8: {
    padding: 8
  },
  p16: {
    padding: 16
  },
  pH16: {
    paddingHorizontal: 16
  }
};
