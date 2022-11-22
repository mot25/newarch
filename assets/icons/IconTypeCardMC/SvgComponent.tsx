import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={24} fill="none" >
        <Circle cx={5} cy={5} r={4.5} fill="#E9061E" />
        <Circle cx={10.833} cy={5} r={4.5} fill="#F79E00" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.917 8.427A4.49 4.49 0 0 0 9.5 5a4.49 4.49 0 0 0-1.583-3.427A4.49 4.49 0 0 0 6.333 5a4.49 4.49 0 0 0 1.584 3.427Z"
            fill="#FE5F00"
        />
    </Svg>
)

export default SvgComponent
