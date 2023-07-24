import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import { SquadComponent, Title } from '../../Components/Squad/styles';
import { BlockSize, ColorRGB, Column1, Column2, Options, OptionsState, Painel, RgbsColor, StateInput, TitleColor } from './styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Panel extends React.Component<{}, { dropDownValue: string }>  {

  constructor(props: {teste: "teste"} | Readonly<{}>) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    super(props);
    this.state = {
      dropDownValue: "Select an item"
    }
  }

   handleSelect=(e: any)=>{
    this.setState({dropDownValue: e})
  }

  render() {
    return (
      <>
        <Painel>

          <Column1>
          
            <SquadComponent>
                <Title>Fixa de cores RGB</Title>
                <RgbsColor>

                  <ColorRGB>

                    <TitleColor>
                      RED
                    </TitleColor>
                      <Slider
                        trackStyle={{ backgroundColor: "red", height: 10  }}
                        railStyle={{ backgroundColor: "red",  height: 10}}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "red",
                          height: 20,
                          width: 20,
                          backgroundColor: "red"
                        }}
                      />

                  </ColorRGB>

                  <ColorRGB>

                      <TitleColor>
                        GREEN
                      </TitleColor>


                    <Slider
                      trackStyle={{ backgroundColor: "green", height: 10  }}
                      railStyle={{ backgroundColor: "green",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "green",
                        height: 20,
                        width: 20,
                        backgroundColor: "green",
                      }}
                    />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      BLUE
                    </TitleColor>

                      <Slider
                        trackStyle={{ backgroundColor: "blue", height: 10  }}
                        railStyle={{ backgroundColor: "blue",  height: 10}}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "blue",
                          height: 20,
                          width: 20,
                          backgroundColor: "blue",
                        }}
                      />

                  </ColorRGB>

                </RgbsColor>

            </SquadComponent>

            <SquadComponent>
                <Title>Fixa de cores BGR</Title>
                <RgbsColor>

                  <ColorRGB>

                  <TitleColor>
                    BLUE
                  </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "blue", height: 10  }}
                      railStyle={{ backgroundColor: "blue",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "blue",
                        height: 20,
                        width: 20,
                        backgroundColor: "blue",
                      }}
                    />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      GREEN
                    </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "green", height: 10  }}
                      railStyle={{ backgroundColor: "green",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "green",
                        height: 20,
                        width: 20,
                        backgroundColor: "green",
                      }}
                    />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      RED
                    </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "red", height: 10  }}
                      railStyle={{ backgroundColor: "red",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "red",
                        height: 20,
                        width: 20,
                        backgroundColor: "red"
                      }}
                    />

                  </ColorRGB>

                </RgbsColor>

            </SquadComponent>

            <SquadComponent>
                <Title>Fixa de cores HSV</Title>
                <RgbsColor>

                  <ColorRGB>

                    <TitleColor>
                      HUE
                    </TitleColor>

                      <Slider
                        trackStyle={{ backgroundColor: "blue", height: 10  }}
                        railStyle={{ backgroundColor: "blue",  height: 10}}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "blue",
                          height: 20,
                          width: 20,
                          backgroundColor: "blue",
                        }}
                      />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      SAT.
                    </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "green", height: 10  }}
                      railStyle={{ backgroundColor: "green",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "green",
                        height: 20,
                        width: 20,
                        backgroundColor: "green",
                      }}
                    />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      VALUE
                    </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "red", height: 10  }}
                      railStyle={{ backgroundColor: "red",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "red",
                        height: 20,
                        width: 20,
                        backgroundColor: "red"
                      }}
                    />

                  </ColorRGB>

                </RgbsColor>

            </SquadComponent>

            <SquadComponent>
                <Title>FAIXA DE COR P&B - SIMPLES</Title>
                <RgbsColor>
                
                  <ColorRGB>
                    <TitleColor>
                      SEPARADOR SIMPLES
                    </TitleColor>

                    <DropdownButton
                      title={this.state?.dropDownValue} 
                      id="dropdown-menu-align-end"
                      variant="secondary"
                      size='sm'
                      onSelect={this.handleSelect}
                      className="d-inline mx-2"

                    >

                      <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
                      <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="Something else here" value="teste">Something else here</Dropdown.Item>


                    </DropdownButton>

                  </ColorRGB>

                  <ColorRGB>

                  <TitleColor>
                    LIMITE
                  </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "blue", height: 10  }}
                      railStyle={{ backgroundColor: "blue",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "blue",
                        height: 20,
                        width: 20,
                        backgroundColor: "blue",
                      }}
                    />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      SAÍDA
                    </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "green", height: 10  }}
                      railStyle={{ backgroundColor: "green",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "green",
                        height: 20,
                        width: 20,
                        backgroundColor: "green",
                      }}
                    />

                  </ColorRGB>

                </RgbsColor>

            </SquadComponent>

            <SquadComponent>
                <Title>FAIXA DE COR P&B - Adaptativo</Title>
                <RgbsColor>
                
                  <ColorRGB>
                    <TitleColor>
                      SEPARADOR SIMPLES
                    </TitleColor>

                    <DropdownButton
                      title={this.state?.dropDownValue} 
                      id="dropdown-menu-align-end"
                      variant="secondary"
                      align={{ lg: 'end' }}
                      size='sm'
                      onSelect={this.handleSelect}
                      className="d-inline mx-2"

                    >

                      <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
                      <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="Something else here" value="teste">Something else here</Dropdown.Item>


                    </DropdownButton>

                  </ColorRGB>

                  <ColorRGB>
                    <TitleColor>
                      SEPARADOR ADAPTATIVO
                    </TitleColor>

                    <DropdownButton
                      title={this.state?.dropDownValue} 
                      id="dropdown-menu-align-end"
                      variant="secondary"
                      onSelect={this.handleSelect}
                      className="d-inline mx-2"
                      size='sm'
                    >

                      <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
                      <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="Something else here" value="teste">Something else here</Dropdown.Item>


                    </DropdownButton>

                  </ColorRGB>

                  <ColorRGB>

                  <TitleColor>
                    VALOR
                  </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "gray", height: 10  }}
                      railStyle={{ backgroundColor: "gray",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "gray",
                        height: 20,
                        width: 20,
                        backgroundColor: "gray",
                      }}
                    />

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

            <SquadComponent>
                <Title>CONVERSÃO DE ESPAÇO DE CORES</Title>
              <RgbsColor>
                <ColorRGB>

                    <TitleColor>
                      CONVERSÃO
                    </TitleColor>

                    <DropdownButton
                          title={this.state?.dropDownValue} 
                          id="dropdown-menu-align-end"
                          variant="secondary"
                          onSelect={this.handleSelect}
                          className="d-inline mx-2"
                          size='sm'
                        >

                          <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
                          <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                          <Dropdown.Item eventKey="Something else here" value="teste">Something else here</Dropdown.Item>


                    </DropdownButton>
                  

                  </ColorRGB>
                </RgbsColor>

            </SquadComponent>

          </Column1>

          <Column2>

            <SquadComponent>
                <Title>REDUÇÃO DE RUÍDO - MÉDIA ENTRE IMAGENS</Title>
                <RgbsColor>

                    <ColorRGB>

                      <BlockSize type="checkbox" />
                      <TitleColor>REDUÇÃO DE RUÍDO - MÉDIA ENTRE IMAGENS</TitleColor>


                    </ColorRGB>

                  {/* <ColorRGB>

                      <TitleColor>
                        GREEN
                      </TitleColor>


                    <Slider
                      trackStyle={{ backgroundColor: "green", height: 10  }}
                      railStyle={{ backgroundColor: "green",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "green",
                        height: 20,
                        width: 20,
                        backgroundColor: "green",
                      }}
                    />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      BLUE
                    </TitleColor>

                      <Slider
                        trackStyle={{ backgroundColor: "blue", height: 10  }}
                        railStyle={{ backgroundColor: "blue",  height: 10}}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "blue",
                          height: 20,
                          width: 20,
                          backgroundColor: "blue",
                        }}
                      />

                  </ColorRGB> */}

                </RgbsColor>

            </SquadComponent>

            <SquadComponent>
                <Title>REDUÇÃO DE RUÍDO - FILTRO 2D</Title>
                <RgbsColor>

                    <ColorRGB>

                      <TitleColor>TAMANHO DO KERNEL</TitleColor>
                      <BlockSize type="number" />


                    </ColorRGB>

                    <ColorRGB>

                      <TitleColor>ITERAÇÕES</TitleColor>
                      <BlockSize type="number" />


                    </ColorRGB>

                </RgbsColor>

            </SquadComponent>

          {/* REDUÇÃO DE RUÍDO - FNLMD */}

            <SquadComponent>
                  <Title>REDUÇÃO DE RUÍDO - FILTRO 2D</Title>
                  <RgbsColor>

                      <ColorRGB>

                        <TitleColor>HABILITADO</TitleColor>
                        <BlockSize type="number" />


                      </ColorRGB>



                  </RgbsColor>

            </SquadComponent>

          {/* DILATAÇÃO */}

            <SquadComponent>
            <Title>DILATAÇÃO</Title>
                <RgbsColor>
                    <ColorRGB>

                      <TitleColor>TAMANHO DO KERNEL</TitleColor>
                      <BlockSize type="number" />

                    </ColorRGB>

                    <ColorRGB>

                      <TitleColor>ITERAÇÕES</TitleColor>
                      <BlockSize type="number" />

                    </ColorRGB>

                </RgbsColor>

            </SquadComponent>

          {/* EROSÃOO */}

            <SquadComponent>

                <Title>EROSÃO</Title>
                <RgbsColor>

                    <ColorRGB>

                      <TitleColor>TAMANHO DO KERNEL</TitleColor>
                      <BlockSize type="number" />


                    </ColorRGB>

                    <ColorRGB>

                      <TitleColor>ITERAÇÕES</TitleColor>
                      <BlockSize type="number" />


                    </ColorRGB>

                </RgbsColor>

            </SquadComponent>

          {/* Transformações morfológicas */}

            <SquadComponent>
                <Title>TRANSFORMAÇÕES MORFOLÓGICAS</Title>
              <RgbsColor>

                <ColorRGB>

                    <TitleColor>
                      TIPO DE TRANSF.
                    </TitleColor>

                    <DropdownButton
                          title={this.state?.dropDownValue} 
                          id="dropdown-menu-align-end"
                          variant="secondary"
                          onSelect={this.handleSelect}
                          className="d-inline mx-2"
                          size='sm'
                        >

                          <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
                          <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                          <Dropdown.Item eventKey="Something else here" value="teste">Something else here</Dropdown.Item>


                    </DropdownButton>
                </ColorRGB>

                <ColorRGB>
                  

                        <TitleColor>
                          TIPO DE KERNEL
                        </TitleColor>

                        <DropdownButton
                              title={this.state?.dropDownValue} 
                              id="dropdown-menu-align-end"
                              variant="secondary"
                              onSelect={this.handleSelect}
                              className="d-inline mx-2"
                              size='sm'
                            >

                              <Dropdown.Item eventKey="Action" >Action</Dropdown.Item>
                              <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                              <Dropdown.Item eventKey="Something else here" value="teste">Something else here</Dropdown.Item>


                        </DropdownButton>


                </ColorRGB>

                <ColorRGB>

                  <TitleColor>TAMANHO DO KERNEL</TitleColor>
                  <BlockSize type="number" />


                </ColorRGB>

                <ColorRGB>

                  <TitleColor>ITERAÇÕES</TitleColor>
                  <BlockSize type="number" />


                </ColorRGB>


                </RgbsColor>

            </SquadComponent>

          {/* DETECTOR DE BORDAS - CANNY */}

          <SquadComponent>
                <Title>DETECTOR DE BORDAS - CANNY</Title>
                <RgbsColor>

                  <ColorRGB>

                    <TitleColor>
                      LIMITE INF.
                    </TitleColor>

                      <Slider
                        trackStyle={{ backgroundColor: "GRAY", height: 10  }}
                        railStyle={{ backgroundColor: "GRAY",  height: 10}}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "GRAY",
                          height: 20,
                          width: 20,
                          backgroundColor: "GRAY",
                        }}
                      />

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      LIMITE SUP.
                    </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "BLACK", height: 10  }}
                      railStyle={{ backgroundColor: "BLACK",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "BLACK",
                        height: 20,
                        width: 20,
                        backgroundColor: "BLACK",
                      }}
                    />

                  </ColorRGB>

                </RgbsColor>

          </SquadComponent>

          {/* BRILHO E CONTRASTE */}

          <SquadComponent>
                <Title>BRILHO E CONTRASTE</Title>
                <RgbsColor>


                  <ColorRGB>

                    <TitleColor>ALPHA</TitleColor>
                    <BlockSize type="number" />


                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      BETA
                    </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "BLACK", height: 10  }}
                      railStyle={{ backgroundColor: "BLACK",  height: 10}}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "BLACK",
                        height: 20,
                        width: 20,
                        backgroundColor: "BLACK",
                      }}
                    />

                  </ColorRGB>

                </RgbsColor>

          </SquadComponent>

          </Column2>

        </Painel>


      </>
    )
  }
}

export default Panel