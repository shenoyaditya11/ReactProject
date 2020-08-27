import React from 'react'
import './row-style.css'
import  {firestore as db} from '../../firebase'

export const Rows = (props)=>{

        // <img className="image" src={`https://robohash.org/${props.cat.id}?set=set2&size=180x180`}/>
    
       const removefromdb = async (event)=> { 

               console.log(props.index);

        
                try{
                    event.preventDefault();
        
                    let val = props.index;
                    
                    db.collection("users").doc(props.uid).get()
                    .then(result=>{
                        if(result.exists){
        
        
        
                            let todo = (result.data()).todo;
                            
                            todo.splice(val,1);
        
                            db.collection("users").doc(props.uid).update(
                                {
                                    todo: todo
                                }
                            )
                        }
        
                    })
                    
                    
        
        
                }catch(erro){
        
                }
        
            };


                return (
                <div className="rrows">
                
                        <div className="details">
                                <h4 id="text">{props.cat}</h4>
                                

                        </div>    
                        <button onClick = {(event)=> removefromdb(event)}> <i class="fa" style={{fontSize: "24px"}}> &#xf014; </i> </button >      
                                
                        
                </div>
                );
       
                               
                                        
                       
        
    
}