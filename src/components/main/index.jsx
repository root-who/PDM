import { useState } from "react"
import Numero from "../numero"

export default function Main(){
    const [numeros, setNumeros] = useState([0,0,0,0,0,0])   
    const style = {
        "container_main": {
            "display":"flex",
            "justify-content":"space-around",
            "align-items":"center",
            "width":"100%",
            "flex-wrap":"wrap",
            "margin-top":"10rem"
        },
        "container_nums":{
            "display":"flex",
            "justify-content":"space-around",
            "align-items":"center",
            "width":"100%",
            "flex-wrap":"wrap",
            "margin-top":"2rem"
        },
        "title":{
            "width":"100%",
            "text-align":"center"
        },
        "button":{
            "border": "none",
            "width":"15%",
           "background-color": "#ffcc80",
           "border-radius": "10px",
           "box-shadow": "2px 10px 5px -1px rgb(0 0 0 / 20%)",
           "margin-top":"2rem",
           "font-size": "16px",
            "font-weight": "bold",
            "height":"50px"
        }
    }

    function onclick(){
        let novosNumeros = [];
        for(let i = 0; i < numeros.length; i++) {
            let exist = true;
            if (i === 0){
                novosNumeros.push(Math.floor(Math.random() * (60 - 1) + 1))
            }else{
                while(exist){
                    const random = Math.floor(Math.random() * (60 - 1) + 1)
                    const found = novosNumeros.find(element => element === random)
                    if(found === undefined){
                        novosNumeros.push(random)
                        exist = false;
                    }else{
                        console.log(found)
                    }
                }
            }
        }
        setNumeros(novosNumeros)
    }

    
    return(
        <div style={style.container_main}>
            <h1 style={style.title}>Loteria</h1>
            <div style={style.container_nums}>
            {   
                numeros.map((num, index)=>{
                    return(
                        <Numero num={num} key={index}></Numero>
                    )
                })
            }
            </div>
            <button onClick={onclick} style={style.button}>GERAR</button>
        </div>
    )
}
