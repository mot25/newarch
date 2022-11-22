import { EColors, EFont } from './../../../shared/config/constant';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    header: {
        backgroundColor: EColors.BLACK_THEME,
        alignItems: 'center',

    },
    header_text: {
        color: EColors.WHITE,
        fontFamily: EFont.SF_PRO_SEMIBOLD_600,
        fontSize: 17,
        letterSpacing: -0.41,
        backgroundColor: 'red',
        flex: 1
    }
})