import Cell from "./Cell";
import "../styles/Gridline.css";

export const Gridline =({cells,handleClick})=> {

    return (
        <div className={"gridline"}>
            {cells.map(item => (
                <Cell data={item} handleClick={handleClick}/>
            ))}
        </div>
    );

}