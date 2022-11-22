import { StyleSheet } from 'react-native';
import { EColors, EFont } from '../../config/constant';


export default StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "row"
    },
    text: {
        color: EColors.WHITE,
        fontFamily: EFont.SF_PRO_SEMIBOLD_600
    },
})