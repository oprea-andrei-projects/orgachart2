import React from "react";
import { Card, CardProps } from "./card";


export default function Aside(){


    const CardArr:CardProps[] = [

        {id:11,
        name:"card1"
        },
      
        {id:12,
          name:"card2"
        },
      
        {id:13,
          name:"card3"
        }  
      ]



    return (

    <>

        {CardArr.map((card:CardProps) =>{

            
                return <Card id={card.id} name={card.name}/>
            
            })}

    </>

    );

}