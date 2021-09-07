import "../styles/Cell.css";

export const Cell =({data,handleClick,start,end,visited})=> {

    const FORMATS = ["single-cell","single-cell-target"];
    let cellType = null;

    if((data.i === start.i && data.j === start.j) || (data.i === end.i && data.j === end.j)) {
        cellType = FORMATS[1];
    }
    else {
        cellType = FORMATS[0];
    }

    return (
        <div className={cellType} onClick={handleClick}>
        </div>
    );
}

export default Cell;

