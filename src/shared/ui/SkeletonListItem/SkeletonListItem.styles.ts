import { StyleSheet } from 'react-native';
import { Circle } from 'react-native-svg';
import { EColors } from '../../config/constant';

export default StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        backgroundColor: EColors.SKELETON_COLOR,
        borderRadius: 20,
        marginRight: 16,
        overflow: 'hidden'
    },
    text: {
        height: 17,
        width: 100,
        backgroundColor: EColors.SKELETON_COLOR,
        borderRadius: 10,
        overflow: 'hidden'
    },
    basedStyles: {
        width: '20%',
        height: '100%',
        backgroundColor: EColors.WHITE,
        opacity: 0.2,
    }
})

