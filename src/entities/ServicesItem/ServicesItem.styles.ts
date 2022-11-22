import { Dimensions, StyleSheet } from 'react-native';
import { EColors, EFont } from '../../shared/config/constant';

export default StyleSheet.create({
    ServicesItem: {
        flexDirection: "row",
        alignItems: 'center',
    },
    left: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        borderRadius: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    right: {},
    title: {
        fontSize: 15,
        letterSpacing: -0.24,
        color: EColors.WHITE,
        fontFamily: EFont.SF_PRO_REGULAR_400
    },

}) 