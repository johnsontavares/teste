import React, { useState } from 'react';
import { Address, ButtonRegister, Buttons, Content, Elements, Filters, FiltersContent, FiltersSide, GridItem, Header, Horizontal, ImagesContent, ListFilters, MainframeContent, Options, RoiButtons, RoiOptions, RoiRegister, RoiTitle, Rois, SaveInspection, Segmentacao, Selected, Subtitle } from './styles';
import Button from 'react-bootstrap/Button';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Squad } from '../../Components/Squad';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';


function Mainframe(){
  const filters = [
    {sigla: "RGB", name: "FAIXA DE CORES RGB"}, 
    {sigla: "GBR", name: "FAIXA DE CORES GBR"},
    {sigla: "HSV", name: "FAIXA DE CORES HSV"},
    {sigla: "PebSimples", name: "FAIXA DE CORE P&B SIMPLES"}, 
    {sigla: "PeB", name: "FAIXA DE CORE P&B ADAPTATIVA"}, 

    {sigla: "ColorSpace", name: "CONVERSÃO DE ESPAÇO DE CORES"} ,
    {sigla: "ReducaoRuido", name: "REDUÇÃO DE RUÍDO MÉDIA ENTRE AS IMAGENS"},
    {sigla: "ReducaoRuido2D", name: "REDUÇÃO DE RUÍDO FILTRO 2D"},
    {sigla: "ReducaoRuidoFNLD", name: "REDUÇÃO DE RUÍDO FNLMD"},

    {sigla: "Dilatacao", name: "DILATAÇÃO"},
    {sigla: "Erosao", name: "EROSÃO"},


  ]
  
  
  const [filtersSelected, SetfiltersSelected] = useState([""])
  const [dropDownValue, setdropDownValue] = useState('Filtros de Segmentação');
  const [ count, SetCount] = useState(0)
  const navigate = useNavigate();

  const [rois, setRois] = useState([
    {roi: "ROI_01", "rgb": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}, "bgr": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}, "imgs": {"img1": "/src/assets/img.png"} },
    {roi: "ROI_02", "rgb": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}, "bgr": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}},
    {roi: "ROI_03", "rgb": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}, "bgr": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}},
    {roi: "ROI_04", "rgb": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}, "bgr": {"r": {"min": 56, "max": 57}, "g": {"min": 56, "max": 57}, "b": {"min": 56, "max": 57}}},

    

  ])

  function Count(count: number){
    setdropDownValue('Filtros de Segmentação');
    SetfiltersSelected([""])
    if(count <= 3 && count >=0){
      SetCount(count)
    }
  }

  function handleFilterSelect(e: any){
    let Filterused = filtersSelected.find((item) => item == e)


    if(Filterused)
      return 

    SetfiltersSelected([...filtersSelected, e])

    let FilterFind = filters.find((item) => item.sigla == e)!.name

    setdropDownValue(FilterFind)
  }

  function handle1Column(){
    document.getElementById("Elements")!.style.gridTemplateColumns = "auto";
  }

  function handle2Column(){
    document.getElementById("Elements")!.style.gridTemplateColumns = "auto auto";
  }

  function handle3Column(){
    document.getElementById("Elements")!.style.gridTemplateColumns = "auto auto auto";
  }
  
     return(
        <>
          <MainframeContent>

            <Header><img src="/src/assets/Grupo 28.png" /></Header>

            <Subtitle>

              <Address> <Selected>Home</Selected> <div>/</div>  Cadastro de ROIs</Address>
              <RoiRegister> <FiChevronLeft />Cadastro de ROIs</RoiRegister>

              <RoiButtons>

                <RoiOptions style={{position: "relative"}}>

                    <Rois style={{position:"absolute"}}>
                      <Button className='ButtonOptions' variant="secondary" onClick={() => Count(count-1)} size="sm"><FiChevronLeft /></Button>
                      <RoiTitle>{rois[count].roi}</RoiTitle>
                      <Button className='ButtonOptions'  variant="secondary" onClick={() => Count(count+1)} size="sm"><FiChevronRight /></Button>
                    
                    </Rois >
                    <ButtonRegister>
                        <Button 
                          className='ButtonOptions'  
                          variant="secondary" 
                          onClick={()=> navigate("/Cadastro-de-roi")}
                          size="sm">
                          CADASTRO DE ROIs
                        </Button>
                    </ButtonRegister>
                    <SaveInspection>
                        <Button 
                        className='ButtonOptions'  variant="secondary" size="sm">Salvar Inspeção</Button>
                    </SaveInspection>


                </RoiOptions>

              </RoiButtons>
            </Subtitle>

            <Content>

                <FiltersSide>

                  <Filters>

                    <Segmentacao>
                      
                      <DropdownButton
                          title={dropDownValue} 
                          id="dropdown-menu-align-end"
                          variant="secondary"
                          size='sm'
                          onSelect={handleFilterSelect}
                          className="d-inline mx-2"

                      >
                          {
                          filters.map((item, index) => {
                              return <Dropdown.Item key={index} eventKey={item.sigla} >{item.name}</Dropdown.Item>

                          })
                          }

                      </DropdownButton>
                      
                    </Segmentacao>

                    <FiltersContent>

                      {
                        filtersSelected.map((item, index) =>{ 
                        return(
                          <ListFilters key={index}><Squad type={item}  /> </ListFilters>)
                        })
                      }

                      
                    </FiltersContent>
                    
                    <div>

                    </div>
                    
                  </Filters>
                  
                </FiltersSide>

                <ImagesContent>
                    <Horizontal >
                        <Elements id="Elements">
                          <GridItem>
                          <img src={rois[count]["imgs"]?.img1} />
                          </GridItem>

                          <GridItem>
                          <img src={rois[count]["imgs"]?.img1} />
                          </GridItem>   

                          <GridItem>
                              <img src={rois[count]["imgs"]?.img1} />
                          </GridItem> 

                          <GridItem>
                              <img src={rois[count]["imgs"]?.img1} />
                          </GridItem>

                          <GridItem>
                              <img src={rois[count]["imgs"]?.img1} />
                          </GridItem>

                          <GridItem>
                              <img src={rois[count]["imgs"]?.img1} />
                          </GridItem>                         
                          
                        </Elements>
                          <Buttons >
                            <Button className='EditImages' variant="primary" onClick={() => handle1Column()}>1 colun</Button>
                            <Button className='EditImages' variant="primary" onClick={() => handle2Column()}>2 coluns</Button>
                            <Button className='EditImages' variant="primary" onClick={() => handle3Column()}>3 coluns</Button>
                            {/* <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </Form.Select> */}
                        </Buttons>
                    </Horizontal>

                </ImagesContent>
                


            </Content>


          </MainframeContent>


        </>
     )

}

export default Mainframe