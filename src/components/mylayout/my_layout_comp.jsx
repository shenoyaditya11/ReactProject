import React from 'react'
import './my_layout-style.css'
import {Card} from '../card/card-component'
import {Rows} from './row-layout'


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