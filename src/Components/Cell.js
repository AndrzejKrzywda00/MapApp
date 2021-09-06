import "../styles/Cell.css";

export const Cell =({data,handleClick})=> {

    const position = data.i.toString() + "," + data.j.toString();

    return (
        <div className={"single-cell"} onClick={handleClick}>
        </div>
    );
}

export default Cell;

