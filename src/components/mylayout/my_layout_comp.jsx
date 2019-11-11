import React from 'react'
import './my_layout-style.css'
import {Card} from '/home/aditya/hello-world/src/components/card/card-component'
import {Rows} from '/home/aditya/hello-world/src/components/mylayout/row-layout'


export const MainBody = (props)=>{
    
        return (
            <div className='main'>
                {
            
                    props.monsters.map(
                        (data, index) => {
                            if(index %2 == 0)
                                return (<Rows cat={data}
                                    side = {"right"} />);
                            else
                                return (<Rows cat={data}
                                    side = {"left"} />);
                        }   
                                   
                                
                    )
                    
                }
               
            </div>
        )
    
}