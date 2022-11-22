import * as React from 'react';
import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

const SvgComponent = () => (
    <Svg width={43} height={35} fill="none" >
        <Rect width={43} height={35} rx={4} fill="#403A47" />
        <Mask
            id="a"
            // @ts-ignore
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={53}
            height={35}
        >
            <Rect width={43} height={35} rx={3} fill="#fff" />
        </Mask>
        <G mask="url(#a)">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m50.999-1.777.005-.01-.71-.393-3.437-1.963-.025.047L9.07-25l-2.357 4.304L44.537.244l-19.42 36.73 4.26 2.434 21.74-41.117L51-1.777ZM39.957 3.131l.005-.01-.71-.393L35.815.764l-.025.047-37.761-20.904-2.358 4.305L33.496 5.15 14.074 41.88l4.261 2.435 21.74-41.117-.118-.068ZM29.529 6.198l.005-.01-.71-.393-3.437-1.964-.025.048L-12.4-17.025l-2.357 4.304L23.067 8.218l-19.42 36.73 4.26 2.435 21.74-41.117-.118-.068Zm-9.831 3.096.021-.039-2.845-1.575-1.399-.799-.01.02-37.68-20.86-2.357 4.305L13.171 11.24-6.265 47.998l4.26 2.435L19.736 9.316l-.038-.022ZM-12.432 53.5l-4.262-2.435L2.742 14.307-35-6.587l2.357-4.304L5.037 9.968l.01-.02 1.398.8 2.846 1.575-.021.038.038.022-21.74 41.117Z"
                fill="#4A4451"
            />
        </G>
    </Svg>
)

export default SvgComponent
