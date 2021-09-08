import Cell from "./Cell";
import "../styles/Gridline.css";

export const Gridline =({cells, handleClick, start, end, allowDrop})=> {

    return (
        <div className={"gridline"}>
            {cells.map(item => (
                <Cell
                    data={item}
                    handleClick={handleClick}
                    start={start}
                    end={end}
                />
            ))}
        </div>
    );

}