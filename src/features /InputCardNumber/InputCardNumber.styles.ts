import { EColors, EFont } from '../../shared/config/constant';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    root: {
        padding: 16,
        backgroundColor: EColors.BODY_LIST_THEME_BLACK
    },
    wrapperInput: {
        height: 52,
        backgroundColor: EColors.BG_NUMBER_CARD,
        borderRadius: 26,
        flexDirection: 'row',
        alignItems: 'center',

    },
    input: {
        flex: 1,
        height: '100%',
        fontFamily: EFont.SF_PRO_REGULAR_400,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.24,
    },
    wrapperImage: {
        paddingLeft: 24,
        paddingRight: 16
    },
    image: {
        width: 24,
        height: 24,
    },
    wrapperClose: {
        marginRight: 20
    },
})