import "../styles/Cell.css";

export const Cell =({data,handleClick,start,end})=> {

    const FORMATS = ["single-cell","single-cell-target","single-cell-path"];
    let cellType = null;

    if((data.i === start.i && data.j === start.j) || (data.i === end.i && data.j === end.j)) {
        cellType = FORMATS[1];
    }
    else {
        cellType = FORMATS[0];
    }

    if(data.color === "path") {
        cellType = FORMATS[2];
    }

    return (
        <div className={cellType} onClick={handleClick}>
        </div>
    );
}

export default Cell;

