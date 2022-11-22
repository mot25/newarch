import { StyleSheet } from 'react-native';
import { EColors, EFont } from '../../shared/config/constant';


export default StyleSheet.create({
    root: {
        backgroundColor: EColors.BODY_LIST_THEME_BLACK,
        padding: 16
    },
    title: {
        fontFamily: EFont.SF_PRO_SEMIBOLD_600,
        fontSize: 15,
        letterSpacing: -0.24,
        color: EColors.INPUT_PLACEHOLDER,
        marginBottom: 32
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    left: {
        marginRight: 16
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,

    },
    titleItemCard: {
        fontFamily: EFont.SF_PRO_REGULAR_400,
        fontSize: 15,
        letterSpacing: -0.24,
        color: EColors.WHITE,
        lineHeight: 20,
        marginBottom: 3 
    },
    balance: {
        fontFamily: EFont.SF_PRO_REGULAR_400,
        fontSize: 13,
        letterSpacing: -0.08,
        color: EColors.WHITE,
        lineHeight: 16
    },
    WrapperbgCard: {
        position: 'relative',

    },
    endNumberCard: {
        fontFamily: EFont.SF_PRO_REGULAR_400,
        fontSize: 11,
        color: EColors.WHITE,
        position: 'absolute',
        top: 2,
        right: 6,
    },
    wrapperTypeCard: {
        position: 'absolute',
        right: -1,
        bottom: -11
    },
    typeCard: {},
})