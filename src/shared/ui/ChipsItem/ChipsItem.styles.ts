import { StyleSheet } from 'react-native';
import { EColors, EFont } from '../../config/constant';


export default StyleSheet.create({
    root: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        backgroundColor: EColors.BG_CATEGORY,
        borderRadius: 14
    },
    num: {
        color: EColors.TAB_ICON_DFT,
        fontFamily: EFont.SF_PRO_REGULAR_400,
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: -0.08
    }
})