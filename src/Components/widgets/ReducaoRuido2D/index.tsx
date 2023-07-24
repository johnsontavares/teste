import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BlockSize, Close, ColorRGB, HeaderSquad, Options, RgbsColor, SquadComponent, Title, TitleColor } from './styles';
import { FiX } from "react-icons/fi";


function ReducaoRuido2D() {
    const [hide, Sethide] = useState(true);

    return (
        <>
        {hide && 
          <SquadComponent>
                
                <HeaderSquad>
                        <Title>
                            REDUÇÃO DE RUÍDO - FILTRO 2D
                        </Title>
                            <Close
                            onClick={() => Sethide(!hide)}
                            >
                                <FiX  size={16}/>
                            </Close>
                </HeaderSquad>
                
                <RgbsColor>

                    <ColorRGB>

                      <TitleColor>TAMANHO DO KERNEL</TitleColor>
                      <BlockSize type="number" />

                    </ColorRGB>

                </RgbsColor>
          </SquadComponent>
        }
        </>
    )

}

export default ReducaoRuido2D