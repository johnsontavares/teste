import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import { Body, ColorRGB, KernelInput, Options, OptionsState, RgbsColor, StateInput, Title } from './styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class SideNav extends React.Component {

  render() {
    return (

      <>
        <Body>
          
          <Title>

            <DropdownButton
              align="end"
              title="Dropdown end"
              id="dropdown-menu-align-end"
              variant=""
            >

              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>

            </DropdownButton>

          </Title> 

          <Title>
            Filtro_01
          </Title> 

          <RgbsColor>

            <ColorRGB>

              <div className="title">
                <h4>R</h4>
              </div>

              
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

              <div className="title">
                <h4>G</h4>
              </div>

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

              <div className="title">
                <h4>B</h4>
              </div>

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


            <Title>
              Filtro_02
            </Title> 

            <ColorRGB>

              <div className="title">
                <h5>V</h5>
              </div>

                <Slider
                  trackStyle={{ backgroundColor: "brown", height: 10  }}
                  railStyle={{ backgroundColor: "brown",  height: 10}}
                  handleStyle={{
                    marginLeft: 10,
                    borderColor: "brown",
                    height: 20,
                    width: 20,
                    backgroundColor: "brown",
                  }}
                />

            </ColorRGB>

            <Title>
              Filtro_03
            </Title> 

            <Options>

              <div>
                Kernel
              </div>

              <KernelInput type="number" />

            </Options>

              <Options>

                <div>
                  Iteractions
                </div>

                <KernelInput type="number" />

              </Options>


              <Title>
                Filtro_04
              </Title> 

              <OptionsState>
                STATE:
                <StateInput type="checkbox" />
              </OptionsState>

            

          </RgbsColor>



        </Body>



            
      </>
      
    );
  }


}

export default SideNav
