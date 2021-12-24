import colors from './colors';
import fonts from './fonts';

// define space grid
// /////////////////////////////////////////////////////////////////////////////
// some people use 8pt grid, some 5pt
// set here in one place then updates everywhere
const spaceGrid = 8;

const spaceHalf = Math.ceil(spaceGrid / 2);
const space1 = spaceGrid;
const space2 = spaceGrid * 2;
const space3 = spaceGrid * 3;
const space4 = spaceGrid * 4;
const space5 = spaceGrid * 5;
const space6 = spaceGrid * 6;
const space8 = spaceGrid * 8;
const space12 = spaceGrid * 12;
const space16 = spaceGrid * 16;

export default {
  activeOpacity: 0.7,

  // containers
  // ///////////////////////////////////////////////////////////////////////////
  containerBg: {
    backgroundColor: colors.white,
    flex: 1
  },

  // flex
  // ///////////////////////////////////////////////////////////////////////////
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  centerItems: {
    alignItems: 'center'
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowAlignCenter: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  // margin
  // ///////////////////////////////////////////////////////////////////////////
  mB1: { marginBottom: space1 },
  mB2: { marginBottom: space2 },
  mH1: { marginHorizontal: space1 },
  mH2: { marginHorizontal: space2 },
  mL1: { marginLeft: space1 },
  mL2: { marginLeft: space2 },
  mR1: { marginRight: space1 },
  mR2: { marginRight: space2 },
  mT1: { marginTop: space1 },
  mT2: { marginTop: space2 },
  mTHalf: { marginTop: spaceHalf },
  mV1: { marginVertical: space1 },
  mV2: { marginVertical: space2 },

  // padding
  // ///////////////////////////////////////////////////////////////////////////
  p2: { padding: space2 },
  pB1: { paddingBottom: space1 },
  pB2: { paddingBottom: space2 },
  pH1: { paddingHorizontal: space1 },
  pH2: { paddingHorizontal: space2 },
  pL1: { paddingLeft: space1 },
  pL2: { paddingLeft: space2 },
  pR1: { paddingRight: space1 },
  pR2: { paddingRight: space2 },
  pT1: { paddingTop: space1 },
  pT2: { paddingTop: space2 },
  pTHalf: { paddingTop: spaceHalf },
  pV1: { paddingVertical: space1 },
  pV2: { paddingVertical: space2 },

  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer1: { height: space1 },
  spacer2: { height: space2 },
  spacer3: { height: space3 },
  spacer4: { height: space4 },
  spacer5: { height: space5 },
  spacer6: { height: space6 },
  spacer8: { height: space8 },
  spacer12: { height: space12 },
  spacer16: { height: space16 },

  separator: {
    backgroundColor: colors.lightGrey,
    height: 1,
    marginVertical: 16,
    width: '100%'
  },

  // buttons
  // ///////////////////////////////////////////////////////////////////////////
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

  // navigation
  // ///////////////////////////////////////////////////////////////////////////
  navHeaderLeftIconStyle: {
    borderWidth: 0,
    paddingLeft: 16,
    paddingRight: 0,
    paddingVertical: 8
  },
  navHeaderRightIconStyle: {
    borderWidth: 0,
    paddingLeft: 0,
    paddingRight: 16,
    paddingVertical: 8
  },

  // text
  // ///////////////////////////////////////////////////////////////////////////
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
  }
};
