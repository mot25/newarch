import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { EColors } from '../../../src/utils/constant';

type Props = {
    focused: boolean
}
const SvgComponent = ({ focused }: Props) => (
    <Svg width={24} height={24} fill="none" >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.75 14a.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 2.75-2.75v-10A2.75 2.75 0 0 0 18.75 0h-16A2.75 2.75 0 0 0 0 2.75v10a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25v-10c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25v10c0 .69-.56 1.25-1.25 1.25ZM10 8.75v7.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.75a.75.75 0 0 0-1.5 0Zm-6-4A.75.75 0 0 1 4.75 4h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 4 4.75Z"
            fill={focused ? EColors.TAB_ICON_ACTIVE : EColors.TAB_ICON_DFT}
        />
    </Svg>
)

export default SvgComponent
