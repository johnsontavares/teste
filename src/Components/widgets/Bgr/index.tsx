import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Close, ColorRGB, HeaderSquad, RgbsColor, SquadComponent, Title, TitleColor } from './styles';
import { FiX } from 'react-icons/fi';


function Bgr(){

  const [ redmin, setRedmin] = useState(0)
  const [ redmax, setRedmax] = useState(0)

  const [ bluemin, setBluemin] = useState(0)
  const [ bluemax, setBluemax] = useState(0)

  const [ greenmin, setGreenmin] = useState(0)
  const [ greenmax, setGreenmax] = useState(0)

  const [hide, Sethide] = useState(true);

  function greenMin (value: any){
    setGreenmin(value)
    if(greenmax <= greenmin && value <= 98)
      setGreenmax(greenmin+2 )
  };

  function greenMax (value: any){
    setGreenmax(value)
    if(greenmax <= greenmin)
      setGreenmin(value-1)
  };

    function redMin (value: any){
      if(redmax <= redmin && redmin <= 98)
        setRedmax(value+2 )
      setRedmin(value)
    };

    function redMax (value: any){
      setRedmax(value)
      if(redmax <= redmin)
      setRedmin(value-1)
    };

    function blueMin (value: any){
      if(bluemax <= bluemin && value <= 98)
        setBluemax(value+2 )
        setBluemin(value)
    };

    function blueMax (value: any){
      setBluemax(value)
      if(bluemax <= bluemin)
      setBluemin(value-1)
    };
    
 
    return(
      <>

      { hide &&
        <SquadComponent>
            <HeaderSquad>
                <Title>
                    FAIXA DE COR BGR
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
                  BLUE - MIN
                </TitleColor>
                  <Slider
                    trackStyle={{ backgroundColor: "gray", height: 10 }}
                    railStyle={{ backgroundColor: "gray",  height: 10 }}
                    onChange={blueMin}
                    value={bluemin}
                    step={1}
                    min={0}
                    max={100}
                    pushable = {true}
                    count = {20}
                    handleStyle={{
                      marginLeft: 10,
                      borderColor: "gray",
                      height: 20,
                      width: 20,
                      backgroundColor: "gray",
                    }}
                  />
                  <div>{bluemin}</div>

              </ColorRGB>


              <ColorRGB>

                <TitleColor>
                BLUE - MAX
                </TitleColor>

                <Slider
                      trackStyle={{ backgroundColor: "gray", height: 10 }}
                      railStyle={{ backgroundColor: "gray",  height: 10 }}
                      onChange={blueMax}
                      value={bluemax}
                      step={1}
                      min={0}
                      max={100}
                      pushable = {true}
                      count = {20}
                      handleStyle={{
                        marginLeft: 10,
                        borderColor: "gray",
                        height: 20,
                        width: 20,
                        backgroundColor: "gray",
                      }}
                />
                    <div>{bluemax}</div>

              </ColorRGB><br />

              <ColorRGB>

                <TitleColor>
                  GREEN - MIN
                </TitleColor>


                <Slider
                  trackStyle={{ backgroundColor: "gray", height: 10 }}
                  railStyle={{ backgroundColor: "gray",  height: 10 }}
                  onChange={greenMin}
                  step={1}
                  min={0}
                  value={greenmin}

                  max={100}
                  pushable = {true}
                  count = {20}
                  handleStyle={{
                    marginLeft: 10,
                    borderColor: "gray",
                    height: 20,
                    width: 20,
                    backgroundColor: "gray",
                  }}
                />
                <div>{greenmin}</div>

              </ColorRGB>

              <ColorRGB>

              <TitleColor>
              GREEN - MAX
              </TitleColor>


              <Slider
                trackStyle={{ backgroundColor: "gray", height: 10 }}
                railStyle={{ backgroundColor: "gray",  height: 10 }}
                onChange={greenMax}
                value={greenmax}
                step={1}
                min={0}
                max={100}
                pushable = {true}
                count = {20}
                handleStyle={{
                marginLeft: 10,
                borderColor: "gray",
                height: 20,
                width: 20,
                backgroundColor: "gray",
                }}
              />
              <div>{greenmax}</div>

              </ColorRGB> <br/>

              <ColorRGB>

                <TitleColor>
                  RED - MIN
                </TitleColor>
                <Slider
                  trackStyle={{ backgroundColor: "gray", height: 10 }}
                  railStyle={{ backgroundColor: "gray",  height: 10 }}
                  onChange={redMin}
                  value={redmin}
                  step={1}
                  min={0}
                  max={100}
                  pushable = {true}
                  count = {20}
                  handleStyle={{
                    marginLeft: 10,
                    borderColor: "gray",
                    height: 20,
                    width: 20,
                    backgroundColor: "gray",
                  }}
                />
                <div>{redmin}</div>

              </ColorRGB>

              <ColorRGB>

                <TitleColor>
                  RED - MAX
                </TitleColor>
                <Slider
                trackStyle={{ backgroundColor: "gray", height: 10 }}
                railStyle={{ backgroundColor: "gray",  height: 10 }}
                onChange={redMax}
                step={1}
                min={0}
                max={100}
                pushable = {true}
                count = {20}
                value={redmax}
                handleStyle={{
                  marginLeft: 10,
                  borderColor: "gray",
                  height: 20,
                  width: 20,
                  backgroundColor: "gray",
                }}
                />
                  <div>{redmax}</div>

              </ColorRGB> <br/>



            </RgbsColor>

        </SquadComponent>

        }
        </>
    )
}

export default Bgr;
