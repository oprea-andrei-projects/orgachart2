import { createContext, useReducer, useState } from "react";

export const TreeContext = createContext({})

//@ts-ignore
export function TreeContextWrapper({children}){
    const [y, sy] = useState(false);

    const [treeData,setTreeData] = useState({
        id: 1,
        name: 'Parent',
        children: [
          {
            id: 2,
            name: 'Child 1',
            children: [
              {
                id: 3,
                name: 'Grandchild 1',
                children: [],
              },
              {
                id: 4,
                name: 'Grandchild 2',
                children: [],
              },
            ],
          },
          {
            id: 5,
            name: 'Child 2',
            children: [],
          },
        ],
      })
      
      const ctxValue = {
        update:()=>sy(!y),
       
        addChild:(parentID:string, childID:string)=>{
            const treeDataCopy=JSON.parse(JSON.stringify(treeData))
            function flatten(root:any):any[]{
                const x=[]
                for(const el of root){
                    if(el.children) x.push(flatten(el.children))
                }
                return [...root,...x.flat()]
            }
            console.log(flatten([treeData]))
        },
      

      }

    return (<TreeContext.Provider value={ctxValue}>{children}</TreeContext.Provider>)
}

