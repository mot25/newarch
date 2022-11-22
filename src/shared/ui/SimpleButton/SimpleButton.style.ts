import { StyleSheet } from 'react-native';

import { EColors, EFont } from '../../../utils/constant';

export default StyleSheet.create({
    button: {
        width: '100%',
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontFamily: EFont.SF_PRO_SEMIBOLD_600,
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: -0.41,
        color: EColors.WHITE
    },
    wrapper: {

    }
})