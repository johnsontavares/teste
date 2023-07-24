import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BlockSize, Close, ColorRGB, HeaderSquad, Options, RgbsColor, SquadComponent, Title, TitleColor } from './styles';
import { FiX } from "react-icons/fi";


function ReducaoRuidoFNLD() {
    const [hide, Sethide] = useState(true);

    return (
        <>

        { hide &&
        
          <SquadComponent>

                <HeaderSquad>
                    <Title>
                    REDUÇÃO DE RUÍDO FNLD
                    </Title>
                    <Close
                        onClick={() => Sethide(!hide)}
                    >
                        <FiX  size={16}/>
                    </Close>
                </HeaderSquad>

                <RgbsColor>

                    <ColorRGB>

                      <BlockSize type="checkbox" />
                      <TitleColor>HABILITADO</TitleColor>

                    </ColorRGB>

                </RgbsColor>
            </SquadComponent>
        }
        </>
    )

}

export default ReducaoRuidoFNLD