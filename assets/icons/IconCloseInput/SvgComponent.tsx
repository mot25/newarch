import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={14} fill="none">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.28.22A.75.75 0 1 0 .22 1.28l5.596 5.597L.22 12.473a.75.75 0 0 0 1.06 1.06l5.597-5.596 5.596 5.596a.75.75 0 0 0 1.06-1.06L7.937 6.877l5.596-5.597a.75.75 0 1 0-1.06-1.06L6.877 5.816 1.28.22Z"
            fill="#706D76"
        />
    </Svg>
)

export default SvgComponent
