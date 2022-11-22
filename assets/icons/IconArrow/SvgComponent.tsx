import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={24} height={12} fill="none"  >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.22.72a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25A.75.75 0 0 0 8.72.72L5 4.44 1.28.72a.75.75 0 0 0-1.06 0Z"
            fill="#706D76"
        />
    </Svg>
)

export default SvgComponent
