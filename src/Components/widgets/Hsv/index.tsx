import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Close, ColorRGB, RgbsColor, SquadComponent, Title, TitleColor } from './styles';
import { HeaderSquad } from '../P&B_Simples/styles';
import { FiX } from 'react-icons/fi';


function Hsv(){
    const [hide, Sethide] = useState(true);

    const [ Hmin, setHmin] = useState(0)
    const [ Hmax, setHmax] = useState(0)

    const [ Smin, setSmin] = useState(0)
    const [ Smax, setSmax] = useState(0)

    const [ Vmin, setVmin] = useState(0)
    const [ Vmax, setVmax] = useState(0)

    function hMin (value: any){
      setHmin(value)
      if(Hmax <= Hmin && value <= 98)
      setHmax(Hmin+2 )
    };
  
    function hMax (value: any){
      setHmax(value)
      if(Hmax <= Hmin && value >0)
      setHmin(value-1)
    };

    function sMin (value: any){
      setSmin(value)
      if(Smax <= Smin && value <= 98)
      setSmax(Smin+2 )
    };
  
    function sMax (value: any){
      setSmax(value)
      if(Smax <= Smin && value >0)
      setSmin(value-1)
    };

    function vMin (value: any){
      setVmin(value)
      if(Vmax <= Vmin && value <= 98)
      setVmax(Vmin+2 )
    };
  
    function vMax (value: any){
      setVmax(value)
      if(Vmax <= Vmin)
      setVmin(Vmax-1)
    };

         return(
          <>

          { hide &&
            <SquadComponent>
                <HeaderSquad>
                    <Title>
                        FAIXA DE COR HSV
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
                      HUE - MIN
                    </TitleColor>
                      <Slider
                        trackStyle={{ backgroundColor: "gray", height: 10  }}
                        railStyle={{ backgroundColor: "gray",  height: 10}}
                        onChange={hMin}
                        value={Hmin}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "gray",
                          height: 20,
                          width: 20,
                          backgroundColor: "gray"
                        }}
                      />
                    <div>{Hmin}</div>

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                        HUE - MAX
                    </TitleColor>
                      <Slider
                        trackStyle={{ backgroundColor: "gray", height: 10  }}
                        railStyle={{ backgroundColor: "gray",  height: 10}}
                        onChange={hMax}
                        value={Hmax}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "gray",
                          height: 20,
                          width: 20,
                          backgroundColor: "gray"
                        }}
                      />
                    <div>{Hmax}</div>

                  </ColorRGB>
                  <br/>

                  <ColorRGB>

                      <TitleColor>
                        SAT - MIN
                      </TitleColor>


                    <Slider
                      trackStyle={{ backgroundColor: "gray", height: 10  }}
                      railStyle={{ backgroundColor: "gray",  height: 10}}
                      onChange={sMin}
                      value={Smin}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "gray",
                        height: 20,
                        width: 20,
                        backgroundColor: "gray",
                      }}
                    />
                  <div>{Smin}</div>

                  </ColorRGB>

                  <ColorRGB>

                    <TitleColor>
                      SAT - MAX
                    </TitleColor>


                    <Slider
                    trackStyle={{ backgroundColor: "gray", height: 10  }}
                    railStyle={{ backgroundColor: "gray",  height: 10}}
                    onChange={sMax}
                    value={Smax}
                    handleStyle={{
                      marginLeft: 10,
                      borderColor: "gray",
                      height: 20,
                      width: 20,
                      backgroundColor: "gray",
                    }}
                    />
                  <div>{Smax}</div>

                  </ColorRGB>
                  <br/>

                  <ColorRGB>

                    <TitleColor>
                      VALUE - MIN
                    </TitleColor>

                      <Slider
                        trackStyle={{ backgroundColor: "gray", height: 10  }}
                        railStyle={{ backgroundColor: "gray",  height: 10}}
                        onChange={vMin}
                        value={Vmin}
                        handleStyle={{
                          marginLeft: 10,
                          borderColor: "gray",
                          height: 20,
                          width: 20,
                          backgroundColor: "gray",
                        }}
                      />
                    <div>{Vmin}</div>

                  </ColorRGB>

                  <ColorRGB>

                  <TitleColor>
                    VALUE - MAX
                  </TitleColor>

                    <Slider
                      trackStyle={{ backgroundColor: "gray", height: 10  }}
                      railStyle={{ backgroundColor: "gray",  height: 10}}
                      onChange={vMax}
                      value={Vmax}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "gray",
                        height: 20,
                        width: 20,
                        backgroundColor: "gray",
                      }}
                    />
                    <div>{Vmax}</div>
                  </ColorRGB> <br/>

                </RgbsColor>

            </SquadComponent>
          }

          </>
      )
    
}

export default Hsv;
