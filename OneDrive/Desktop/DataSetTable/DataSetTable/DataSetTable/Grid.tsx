


import React = require("react");
import {useState} from "react";
import './Style/CreateTable.css';
//import Input from "./CreateTable"
function Grid() {
    
  const [column, setColumn] = useState(0);
  const [row, setRow] = useState(0);

//console.log(column);


  const GetColumnData=(event:any)=>{
    // console.log(event);
     console.log(event.target.value);
     setColumn(event.target.value)
    } 
    const GetRowData=(event:any)=>{
      // console.log(event);
       console.log(event.target.value);
       setRow(event.target.value)
      } 


const createTable = (e: any)=>{

    
   for(var r=0;r<parseInt(row as any);r++)
    {
     var x=document.getElementById('myTable') as HTMLTableElement
  
     var rowValue=x.insertRow(r);

     for(var c=0;c<parseInt(column as any);c++)  
      {
       var y=  rowValue.insertCell(c);
       y.innerHTML="Row-"+r+" Column-"+c; 
      }
  
}

}
  return (
    <>
       
       {/* <h1>
        React
       </h1> */}

<input  onChange={GetColumnData} type="number" />
 <input onChange={GetRowData} type="number" />
 {/* <Input values={column as any} values2={row as any} /> */}

<button onClick={createTable}>Create</button>

<table id="myTable" style={{border:'1px solid black'}}> 
</table>
    </>
  );

}
  export default Grid;
