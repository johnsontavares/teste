import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BlockSize, Close, ColorRGB, HeaderSquad, RgbsColor, SquadComponent, Title, TitleColor } from './styles';
import { FiX } from "react-icons/fi";


function PebSimples() {
    const [dropDownValue, setdropDownValue] = useState('Selecione uma opção')
    const SeparadorSimples = ["Threshold binário", "Threshold binário inverso", "Threshold truncado", "Threshold para zero", "Threshold para zero inverso"]
    const [hide, Sethide] = useState(true);

    const[limiteMin, setLimiteMin] = useState(0)
    const[limiteMax, setLimiteMax] = useState(0)

    const[data, setData] = useState(0)




    function handleSelect(e: any){
        setdropDownValue( e)
      }

    function LimitMin(value: any){
        setLimiteMin(value)
        if(limiteMax <= limiteMin && value <= 98)
        setLimiteMax(limiteMin+2 )
    }

    function LimitMax(value: any){
        setLimiteMax(value)
        if(limiteMax <= limiteMin && value <= 98)
            setLimiteMin(limiteMin-2 )
    }

    function output(value: any){
        setData(value)
    }

        return(
            <>
            { hide &&
                <SquadComponent>
                    <HeaderSquad>
                        <Title>
                            FAIXA DE COR P&B - Simples
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
                            LIMITE - MIN
                        </TitleColor>


                        <Slider
                            trackStyle={{ backgroundColor: "gray", height: 10  }}
                            railStyle={{ backgroundColor: "gray",  height: 10}}
                            onChange={LimitMin}
                            value={limiteMin}
                            handleStyle={{
                            marginLeft: 10,
                            borderColor: "gray",
                            height: 20,
                            width: 20,
                            backgroundColor: "gray",
                        }}
                        />
                        <div>{limiteMin}</div>
                    </ColorRGB>

                    <ColorRGB>

                        <TitleColor>
                            LIMITE - MAX
                        </TitleColor>


                        <Slider
                            trackStyle={{ backgroundColor: "gray", height: 10  }}
                            railStyle={{ backgroundColor: "gray",  height: 10}}
                            onChange={LimitMax}
                            value={limiteMax}
                            handleStyle={{
                            marginLeft: 10,
                            borderColor: "gray",
                            height: 20,
                            width: 20,
                            backgroundColor: "gray",
                        }}
                    />
                        <div>{limiteMax}</div>
                    </ColorRGB> <br/>

                    <ColorRGB>

                        <TitleColor>
                            SAÍDA
                        </TitleColor>

                        <Slider
                            trackStyle={{ backgroundColor: "gray", height: 10  }}
                            railStyle={{ backgroundColor: "gray",  height: 10}}
                            onChange={output}
                            value={data}
                            handleStyle={{
                                marginLeft: 10,
                                borderColor: "gray",
                                height: 20,
                                width: 20,
                                backgroundColor: "gray",
                        }}
                        />
                        <div>{data}</div>
                    </ColorRGB> <br/>
                    

                    </RgbsColor>

                </SquadComponent>
            
            }
            </>
        )
            }

export default PebSimples;
        