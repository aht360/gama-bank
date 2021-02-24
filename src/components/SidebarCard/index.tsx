import React from 'react';
import { SidebarCardContainer } from './styles';
import pix from '../../assets/Pix.png';

interface CardProps{
    text: string;
}

const SidebarCard: React.FC<CardProps> = ({ text }) => {
    return (
        <SidebarCardContainer>
            <img src={pix} alt="pix logo"/>
            <p>{text}</p>
        </SidebarCardContainer>
    );
}

export default SidebarCard;