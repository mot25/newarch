import React, { FC, useMemo } from 'react';
import { Image, TextStyle, TouchableOpacity, View } from 'react-native';

import { IconArrow } from '../../../assets/icons/IconArrow';
import { IconBgCard } from '../../../assets/icons/IconBgCard';
import { IconTypeCardMC } from '../../../assets/icons/IconTypeCardMC';
import { thousand } from '../../shared/lib/helpers';
import { CTouchableOpacity } from '../../shared/ui/CTouchableOpacity';
import { HeaderTitleForBlock } from '../../shared/ui/HeaderTitleForBlock';
import { TextLine } from '../../shared/ui/TextLine';
import styles from './SelectCardItem.styles';


export enum ETypeCard {
    MASTERCARD
}
type Props = {
    title: string;
    balance: number;
    fourNumberCard: number;
    typeCard: ETypeCard
    onPress?: () => void;
    classes?: TextStyle
}

const SelectCardItem: FC<Props> = ({
    balance,
    fourNumberCard,
    title,
    typeCard,
    onPress,
    classes
}) => {
    const typeCardIcon = useMemo(() => {
        switch (typeCard) {
            case ETypeCard.MASTERCARD:
                return <IconTypeCardMC />;

            default:
                return <IconTypeCardMC />;
        }
    }, [typeCard])

    return (
        <View
            style={[styles.root, classes]}
        >
            <HeaderTitleForBlock
                text='Карта для оплаты'
            />
            <CTouchableOpacity
                style={styles.cardContent}
                onPress={onPress}

            >
                <View style={styles.left}>
                    <View style={styles.WrapperbgCard} >
                        <IconBgCard />
                        <TextLine style={styles.endNumberCard}>{fourNumberCard}</TextLine>
                        <View style={styles.wrapperTypeCard}>
                            {typeCardIcon}
                        </View>
                    </View>
                </View>
                <View
                    style={styles.right}
                >
                    <View>
                        <TextLine style={styles.titleItemCard} >
                            {title}
                        </TextLine>
                        <TextLine style={styles.balance} >
                            {thousand(balance.toString())} ₽
                        </TextLine>
                    </View>
                    <IconArrow />
                </View>
            </CTouchableOpacity>
        </View >
    )
}

export default SelectCardItem