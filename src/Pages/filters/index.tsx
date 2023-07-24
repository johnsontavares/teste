// https://www.makeuseof.com/react-drag-and-drop-components/
import { useState } from 'react'
import React from 'react';

import Gbr from '../../Components/widgets/Bgr'
import PeB from '../../Components/widgets/Bgr'
import Rgb from '../../Components/widgets/Bgr'
import {Squad} from '../../Components/Squad'

import Home from '../../Pages/Home'
import Mainframe from '../../Pages/Mainframe'
import Panel from '../../Pages/Panel'
import Draggable from 'react-draggable';
import Droppable from 'react-draggable';
import DraggableListItem from 'react-draggable';
import Column1 from '../../Components/Column1';
import { FiltersPage } from './styles';
import Column2 from '../../Components/Column2';
import Column3 from '../../Components/Column3';

function Filters() {


  // const [data, setdata] = useState([props.data]);
  var positionY = 0;
  const [dragStartIndex, setdragStartIndex] = useState(null);
  const [filters, setFilters] = useState(["RGB","GBR","HSV", "PeB","PebSimples"])



  //save reference for dragItem and dragOverItem

  //const handle drag sorting
  const handleSort = () => {
    // duplicate items

    let _items = [...filters]
    const draggedItemContent = _items.splice(dragItem.current, 1)[0]

    //switch the position

    _items.splice(dragOverItem.current, 0, draggedItemContent)

    // reset the position ref

    dragItem.current = null
    dragOverItem.current = null

    setFilters(_items)
  }

  const dragItem = React.useRef<any>(null)
  const dragOverItem = React.useRef<any>(null)
 

  return (
    
    <>
      <FiltersPage>
        <Column1 />
        <Column2 />
        <Column3 />
      </FiltersPage>

    </>

  )

}

export default Filters;
