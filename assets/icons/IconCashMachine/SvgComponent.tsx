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
            d="M10.5 2.401 4 6.45v6.801a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1-.416-1.374l8-5a.75.75 0 0 1 .832 0l8 5A.75.75 0 0 1 18.5 7.25v6a.75.75 0 0 1-1.5 0V6.449l-6.5-4.048ZM2.25 15.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H2.25Zm-1 3a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H1.25Zm5.5-9a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Zm3 .75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3Zm4.5-.75a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Z"
            fill={focused ? EColors.TAB_ICON_ACTIVE : EColors.TAB_ICON_DFT}
        />
    </Svg>
)

export default SvgComponent
