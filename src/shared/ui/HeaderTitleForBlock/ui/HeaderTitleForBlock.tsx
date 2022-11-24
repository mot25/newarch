import React from 'react';

import { TextLine } from '../../TextLine';
import styles from './HeaderTitleForBlock.styles';

type Props = {
    text: string
}

const HeaderTitleForBlock = ({ text }: Props) => {
    return (
        <TextLine
            style={styles.title}
        >
            {text}
        </TextLine>
    )
}

export default HeaderTitleForBlock