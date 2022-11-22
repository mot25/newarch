import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={17} fill="none">
        <Path
            d="M2.81 8.75H19a.75.75 0 0 0 0-1.5H2.81l5.72-5.72A.75.75 0 0 0 7.47.47l-7 7a.75.75 0 0 0 0 1.06l7 7a.75.75 0 0 0 1.06-1.06L2.81 8.75Z"
            fill="#fff"
        />
    </Svg>
)

export default SvgComponent
