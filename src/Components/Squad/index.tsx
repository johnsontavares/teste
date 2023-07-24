import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { SquadComponent, Title } from './styles';
import Rgb from '../widgets/Rgb';
import Gbr from '../widgets/Bgr';
import PeB from '../widgets/P&B';
import Hsv from '../widgets/Hsv';
import PebSimples from '../widgets/P&B_Simples';
import ColorSpace from '../widgets/ColorSpace';
import ReducaoRuido from '../widgets/ReducaoDeRuido';
import ReducaoRuido2D from '../widgets/ReducaoRuido2D';
import ReducaoRuidoFNLD from '../widgets/ReducaoRuidoFNLMD';
import Dilatacao from '../widgets/Dilatacao';
import Erosao from '../widgets/Erosao';

export function Squad(props: any) {
  
  if(props.type == "RGB"){
    return <Rgb />
  }
  if(props.type == "GBR"){
    return <Gbr />
  }
  if(props.type == "PeB"){
    return <PeB />
  }
  if(props.type == "HSV"){
    return <Hsv />
  }
  if(props.type == "PebSimples"){
    return <PebSimples />
  }
  if(props.type == "ColorSpace"){
    return <ColorSpace />
  }
  if(props.type == "ReducaoRuido"){
    return <ReducaoRuido />
  }
  if(props.type == "ReducaoRuido2D"){
    return <ReducaoRuido2D />
  }
  if(props.type == "ReducaoRuidoFNLD"){
    return <ReducaoRuidoFNLD />
  }
  if(props.type == "Dilatacao"){
    return <Dilatacao />
  }
  if(props.type == "Erosao"){
    return <Erosao />
  }

  

  
  
}