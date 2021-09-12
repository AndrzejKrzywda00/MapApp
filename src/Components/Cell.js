import "../styles/Cell.css";

export const Cell =({data, handleClick, start, end})=> {

    const position = [data.i, data.j];

    const FORMATS = [
        "single-cell",
        "single-cell-target",
        "single-cell-path",
        "single-cell-wall",
        "single-cell-visited",
        "single-cell-searched"
    ];

    let cellType;

    if((data.i === start.i && data.j === start.j) || (data.i === end.i && data.j === end.j)) {
        cellType = FORMATS[1];
    }
    else {
        cellType = FORMATS[0];
    }

    if(data.color === cellColors.TARGET) {
        cellType = FORMATS[2];
    }
    if(data.color === cellColors.WALL) {
        cellType = FORMATS[3];
    }
    if(data.color === cellColors.VISITED) {
        cellType = FORMATS[4];
    }
    if(data.color === cellColors.SEARCHED) {
        cellType = FORMATS[5];
    }

    return (
        <div className={cellType} onClick={()=>handleClick(position)}>
        </div>
    );
}

export default Cell;

