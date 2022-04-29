export default function Numero({num}){

    const style = {
        "container_num": {
            "display":"flex",
            "justify-content":"space-around",
            "border": "none",
            "width":"15%",
           "background-color": "#ffcc80",
           "border-radius": "10px",
           "box-shadow": "2px 10px 5px -1px rgb(0 0 0 / 20%)"
           
        },
        "title":{
            
        }
    }

    return(
        <div style={style.container_num}>
            <h1>{num}</h1>
        </div>
    )
}