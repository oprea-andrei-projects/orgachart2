import React, { useContext } from "react";
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

import { useDrop } from 'react-dnd';
import { CardProps } from "./card";
import { TreeContext } from "../../context/tree.context";



export interface RecursiveComponentProps {
    id: number;
    name: string;
    children?: RecursiveComponentProps[];
    parentChildrens?:RecursiveComponentProps[];
  }
  

  const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const RecursiveComponent: React.FC<RecursiveComponentProps> = ({ id, name, children, parentChildrens}) => {
  
  //@ts-ignore
  const {addChild}=useContext(TreeContext)
    
  const [{isOver}, drop] = useDrop(() => ({
    accept:"card",
    drop: (item:CardProps) => addCardToArr(item),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    })
})) 
   
const [{isDragging}, drag] = useDrag(()=>({
  type:"card",
  item: {id:id,children:parentChildrens},
  collect:(monitor) =>({

      isDragging: !!monitor.isDragging(),
  }),
  
}));


function attachRef(el:any){
  drag(el)
  drop(el)
}

const addCardToArr = (item: RecursiveComponentProps)=>{
   
     children?.push(item);
}
   
    return (
    
      <>
      
      <TreeNode
        label={ <div ref = {attachRef} >
            ID: {id} | Name: {name}
            </div>}
           
            >	
           
            {children && children.map((child) => <RecursiveComponent key={child.id} parentChildrens={children} children={child.children} {...child} />)}
        </TreeNode>
      
      </>
        
    );
  };
  
  export default RecursiveComponent;
  