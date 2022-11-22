import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { EColors } from '../../../src/utils/constant';

type Props = {
    focused: boolean
}
const SvgComponent = ({ focused }: Props) => (<Svg width={24} height={24} fill="none" >
    <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.75 11c0 5.937-4.813 10.75-10.75 10.75S.25 16.937.25 11 5.063.25 11 .25 21.75 5.063 21.75 11Zm-20 0a9.25 9.25 0 1 0 18.5 0 9.25 9.25 0 0 0-18.5 0Zm6.775-.393.187.22-.244.153A4.746 4.746 0 0 0 6.25 15a.75.75 0 0 0 1.5 0 3.25 3.25 0 0 1 6.5 0 .75.75 0 0 0 1.5 0c0-1.65-.848-3.155-2.218-4.02l-.244-.154.187-.22a3.25 3.25 0 1 0-4.95 0ZM9.25 8.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z"
        fill={focused ? EColors.TAB_ICON_ACTIVE : EColors.TAB_ICON_DFT}
    />
</Svg>
)

export default SvgComponent
