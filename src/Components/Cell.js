import "../styles/Cell.css";

export const Cell =({data,handleClick,start,end,allowDrop})=> {

    const position = [data.i, data.j];
    const FORMATS = ["single-cell","single-cell-target","single-cell-path","single-cell-wall","single-cell-visited"];
    let cellType;

    if((data.i === start.i && data.j === start.j) || (data.i === end.i && data.j === end.j)) {
        cellType = FORMATS[1];
    }
    else {
        cellType = FORMATS[0];
    }

    if(data.color === "path") {
        cellType = FORMATS[2];
    }
    if(data.color === "wall") {
        cellType = FORMATS[3];
    }
    if(data.color === "visited") {
        cellType = FORMATS[4];
    }

    return (
        <div className={cellType} onClick={()=>handleClick(position)}>
        </div>
    );
}

export default Cell;

