import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window')
import { EColors } from '../../utils/constant';

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: EColors.BLACK_THEME
    },
    mb16: {
        marginBottom: 16
    },
    button: {
        paddingHorizontal: 16
    },
    top: {
        flex: 1
    },
    bottom: {
        paddingBottom: 24
    },
    center: {
        // height: height - 570
    }
})