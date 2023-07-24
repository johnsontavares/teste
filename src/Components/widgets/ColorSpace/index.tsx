import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BlockSize, Close, ColorRGB, Options, RgbsColor, SquadComponent, Title, TitleColor } from './styles';
import { FiX } from "react-icons/fi";
import { HeaderSquad } from '../P&B_Simples/styles';
import Form from 'react-bootstrap/Form';


function ColorSpace() {
    const EspacodeCores = ["BGR para HSV", "BGR para RGB", "HSV para BGR", "HSV para RGB", "RGB para BGR", "RGB para BGR", "RGB para HSV"]


    const [dropDownValue, setdropDownValue] = useState('Selecione uma opção');
    const [hide, Sethide] = useState(true);


    function handleSelect(e: any){
        setdropDownValue( e)
      }

        return(
            <>
            { hide &&
                <SquadComponent>




                    <HeaderSquad>
                        <Title>
                            Conversão de Espaço das Cores
                        </Title>
                            <Close
                            onClick={() => Sethide(!hide)}
                            >
                                <FiX  size={16}/>
                            </Close>
                    </HeaderSquad>

                    <RgbsColor>

                        <ColorRGB>

                            <TitleColor>
                                CONVERSÃO
                            </TitleColor>

                            <DropdownButton
                                title={dropDownValue} 
                                id="dropdown-menu-align-end"
                                variant="secondary"
                                
                                size='sm'
                                onSelect={handleSelect}
                                className="d-inline mx-2"

                            >

{
                        EspacodeCores.map((item, index) => {
                            return <Dropdown.Item key={index} eventKey={item} >{item}</Dropdown.Item>

                        })
                        }
                            </DropdownButton>


                        </ColorRGB><br/><br/>
                    

                    </RgbsColor><br/><br/>

                </SquadComponent>
            
            }
            </>
        )
            }

export default ColorSpace;
        