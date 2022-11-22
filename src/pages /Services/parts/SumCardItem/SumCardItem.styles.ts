import { StyleSheet } from 'react-native';

import { EColors, EFont } from '../../../../utils/constant';

export default StyleSheet.create({
    root: {
        backgroundColor: EColors.BODY_LIST_THEME_BLACK,
        padding: 16,
        marginBottom: 31
    },
    title: {
        color: EColors.INPUT_PLACEHOLDER,
        fontFamily: EFont.SF_PRO_SEMIBOLD_600,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.24,
        marginBottom: 20
    },
    chipsWrapper: {


    },
    ruble: {
        color: EColors.WHITE,
        fontFamily: EFont.SF_PRO_MEDIUM_500,
        fontSize: 28,
        lineHeight: 34,
        letterSpacing: 0.33,
        marginLeft: 1
    },
    input: {
        color: EColors.WHITE,
        fontFamily: EFont.SF_PRO_MEDIUM_500,
        fontSize: 28,
        lineHeight: 34,
        letterSpacing: 0.33
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    line: {
        width: '100%',
        height: 1,

        marginTop: 14,
        marginBottom: 8
    },
    seperator: {
        width: 16
    },
    cashBack: {
        fontFamily: EFont.SF_PRO_REGULAR_400,
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: -0.08,
        color: EColors.TAB_ICON_DFT
  
    }
})
