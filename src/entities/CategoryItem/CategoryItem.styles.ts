import { Dimensions, StyleSheet } from 'react-native';

import { EColors, EFont } from '../../../../utils/constant';

export default StyleSheet.create({
    categoryItem: {
        flexDirection: "row",
        alignItems: 'center',
    },
    left: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        backgroundColor: EColors.BG_CATEGORY,
        borderRadius: 20,
    },
    image: {
        width: 22,
        height: 22
    },
    right: {},
    title: {
        fontSize: 15,
        letterSpacing: -0.24,
        color: EColors.WHITE,
        fontFamily: EFont.SF_PRO_REGULAR_400
    },

}) 