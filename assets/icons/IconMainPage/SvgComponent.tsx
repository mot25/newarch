import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { EColors } from '../../../src/shared/config/constant';


type Props = {
    focused: boolean
}
const SvgComponent = ({ focused }: Props) => (<Svg width={24} height={24} fill="none"
>
    <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.606 4.11.06.046A2.751 2.751 0 0 1 21.5 6.75v8a2.75 2.75 0 0 1-2.75 2.75h-16A2.75 2.75 0 0 1 0 14.75v-12A2.75 2.75 0 0 1 2.75 0h16a.75.75 0 0 1 .75.75v3.17l.106.19Zm-1.643-.272L18 3.75v-2l-.162-.213L2.75 1.5c-.69 0-1.25.56-1.25 1.25v1l.162.213L17.75 4l.213-.162ZM1.5 5.75l.037-.088.213-.162h17c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25h-16c-.69 0-1.25-.56-1.25-1.25v-9Zm16 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
        fill={focused ? EColors.TAB_ICON_ACTIVE : EColors.TAB_ICON_DFT}
    />
</Svg>
)

export default SvgComponent
