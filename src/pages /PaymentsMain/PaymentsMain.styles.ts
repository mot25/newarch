import { StyleSheet } from 'react-native';
import { EColors, EFont } from '../../shared/config/constant';



export default StyleSheet.create({
    root: {
        backgroundColor: EColors.BODY_LIST_THEME_BLACK,
        flex: 1,

    },
    wrapper_top: {
        paddingHorizontal: 16

    },
    top: {
        paddingTop: 49,
        paddingBottom: 8,
        backgroundColor: EColors.BLACK_THEME,
        marginBottom: 30
    },
    top_text: {
        fontSize: 34,
        letterSpacing: 0.41,
        fontFamily: EFont.SF_PRO_BOLD_700,
        color: EColors.WHITE
    },
    body: {
        paddingHorizontal: 16

    },
    wrapperBody: {},

})