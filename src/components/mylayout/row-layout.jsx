import React from 'react'
import './row-style.css'


export const Rows = (props)=>{
    
        if(props.side == "right"){
                return (
                <div className="rrows">
                
                        <div className="details">
                                <h1>{props.cat.name}</h1>
                                <h2>{props.cat.email}</h2>

                        </div>    
                                <img className="image" src={`https://robohash.org/${props.cat.id}?set=set2&size=180x180`}/>
                                
                        
                </div>
                );
        }
        else{
                return (
                        <div className="lrows">
                        
                        
                                <div className="details">
                                        <h1>{props.cat.name}</h1>
                                        <h2>{props.cat.email}</h2>
        
                                </div>    
                                <img className="image" src={`https://robohash.org/${props.cat.id}?set=set2&size=180x180`}/>
                                        
                                
                        </div>
                        );
        }
    
}