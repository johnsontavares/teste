import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BlockSize, Close, ColorRGB, HeaderSquad, Options, RgbsColor, SquadComponent, Title, TitleColor } from './styles';
import { FiX } from "react-icons/fi";


function PeB() {
    const SeparadorSimples = ["Threshold binário", "Threshold binário inverso", "Threshold truncado", "Threshold para zero", "Threshold para zero inverso"]
    const SeparadorAdaptativo = ["Threshold adaptativo de Média",  "Threshold adaptativo de Gaussiana"]

    const [dropDownValue, setdropDownValue] = useState('Selecione uma opção');
    const [adaptativoValue, setAdaptativoValue] = useState('Selecione uma opção');

    const [hide, Sethide] = useState(true);

    const [value, setValue] = useState(0);

    function ShowValue(value: any){
        setValue(value)
    }


    function handleSelect(e: any){
        setdropDownValue( e)
    }
    function handleValueSelect(e: any){
        setAdaptativoValue( e)
      }

        return(
            <>
            { hide &&
                <SquadComponent>

                    <HeaderSquad>
                        <Title>
                            FAIXA DE COR P&B ADAPTATIVO
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
                                SEPARADOR SIMPLES
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
                        SeparadorSimples.map((item, index) => {
                            return <Dropdown.Item key={index} eventKey={item} >{item}</Dropdown.Item>

                        })
                        }

                        </DropdownButton>

                        </ColorRGB>

                        <ColorRGB>
                            <TitleColor>
                            SEPARADOR ADAPTATIVO
                            </TitleColor>

                            <DropdownButton
                                title={adaptativoValue} 
                                id="dropdown-menu-align-end"
                                variant="secondary"
                                size='sm'
                                onSelect={handleValueSelect}
                                className="d-inline mx-2"

                            >
                        {
                        SeparadorAdaptativo.map((item, index) => {
                            return <Dropdown.Item key={index} eventKey={item} >{item}</Dropdown.Item>

                        })
                        }

                        </DropdownButton>

                        </ColorRGB>

                        <ColorRGB>

                            <TitleColor>
                                VALOR
                            </TitleColor>

                            <Slider
                                trackStyle={{ backgroundColor: "gray", height: 10  }}
                                railStyle={{ backgroundColor: "gray",  height: 10}}
                                onChange={ShowValue}
                                value={value}
                                handleStyle={{
                                    marginLeft: 10,
                                    borderColor: "gray",
                                    height: 20,
                                    width: 20,
                                    backgroundColor: "gray",
                                }}
                            />
                            <div>{value}</div>
                        </ColorRGB>
                    

                        <Options>

                            <ColorRGB>
                                <TitleColor>
                                    Tamanho do BLOCO
                                </TitleColor>

                                <BlockSize type="number" />
                                
                            </ColorRGB>
                        </Options>

                    </RgbsColor>

                </SquadComponent>
            
            }
            </>
        )
            }

export default PeB;
        