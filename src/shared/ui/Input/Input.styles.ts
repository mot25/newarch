import { EColors, EFont } from './../../config/constant';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    wrapperInput: {
        backgroundColor: EColors.BG_INPUT,
        borderRadius: 8,
        height: 36,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input: {
        width: '100%',
        height: '100%',
        fontSize: 15,
        color: EColors.WHITE,
        fontFamily: EFont.SF_PRO_REGULAR_400,
        letterSpacing: -0.36,
        marginLeft: 3
    },
    root: {
        padding: 16
    }

})