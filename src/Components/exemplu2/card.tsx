import { useState, type CSSProperties, type FC, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { TreeContext } from '../../context/tree.context';


const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
  }

export interface CardProps {
   
    id:number,
    name: string,
    children?: any[]
  }
  








export const Card :React.FC<CardProps> = (({id, name}) =>{
  //@ts-ignore
  const {update}=useContext(TreeContext)

  const [{isDragging}, drag] = useDrag(()=>({
    type:"card",
    item: {id:id},
    collect:(monitor) =>({

        isDragging: !!monitor.isDragging(),
    }),


}));

const [{isOver}, drop] = useDrop(() => ({
  accept:"card",
  drop: (item:CardProps) => {
    console.log(item)
    item.children?.splice(item.children?.findIndex(i=>i.id==item.id),1)
    update()
    console.log(item)
  },
  collect: (monitor) => ({
      isOver: !!monitor.isOver(),
  })
})) 

function attachRef(el:any){
  drag(el)
  drop(el)
}

  return(

    
    <div style={{ border:"1px solid black", width:"200px"}} ref={attachRef}>
            ID: {id} | Name: {name}
    </div>
    
    
  )

});


