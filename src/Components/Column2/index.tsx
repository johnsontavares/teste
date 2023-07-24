import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import { Squad } from '../Squad';

function Column2(){
  // const [data, setdata] = useState([props.data]);
  var positionY = 0;
  const [dragStartIndex, setdragStartIndex] = useState(null);
  const [filters, setFilters] = useState(["PeB","ColorSpace"])

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
    return(
        <>
        <div style={{height: "100%", maxWidth: "100%"}}>
  
          {
            filters.map((item, index) => 
              <div key={index} 
                draggable 
                onDragStart={(e) => dragItem.current=index}
                onDragEnter={(e) => dragOverItem.current=index}
                onDragEnd={handleSort}
              >
                  <Squad type={item}  /> 
              </div>
              )
          }
  
        </div>
  
      </>
    )
}

export default Column2;