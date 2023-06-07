import { IInputs, IOutputs } from "./generated/ManifestTypes";
// eslint-disable-next-line no-undef
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
import * as React from "react";
import * as ReactDOM from "react-dom";
import Grid from "./Grid";
type DataSet = ComponentFramework.PropertyTypes.DataSet;

export class DataSetTable
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private ColumnData: HTMLInputElement;
  private RowData: HTMLInputElement;
  private CreateButton: HTMLButtonElement;
  private container: HTMLDivElement;
  private TableData: HTMLTableElement;
  private _notifyOutputChanged: () => void;
  private _container: HTMLDivElement;

  public createTable() {
    // rn = window.prompt("Input number of rows", 1);
    //cn = window.prompt("Input number of columns", 1);
    // var x = document.getElementById("myTable") as HTMLTableElement;
    //  for (var r = 0; r < parseInt(this.RowData.value); r++) {
    //   var x = document.getElementById("myTable").insertRow(r);
    //      var row = x.insertRow(r);
    //      for (var c = 0; c < parseInt(this.ColumnData.value); c++) {
    //       var y = row.insertCell(c);
    //      y.innerHTML = "Row-" + r + " Column-" + c;
    //     }
    //   }
    // this.container.append(x)
      //   for (var r = 0; r < parseInt(this.RowData.value); r++) {
      //      console.log(r);
           
           
      //    var x = document.getElementById("myTable") as HTMLTableElement;
      //    console.log(x+"s");
      //     var row=x.insertRow(r)
      //     console.log(row);
      //     for (var c = 0; c < parseInt(this.ColumnData.value); c++) {
      //       console.log(c);
            
      //     var y = row.insertCell(c);
      //       y.innerHTML="Row-" + r + " Column-" + c;
      //     }
      //  }

let rn = "2";
let cn = "3";


  
 for(var r=0;r<parseInt(this.RowData.value);r++)
  {
   var x=document.getElementById("myTable") as HTMLTableElement
  var row= x.insertRow(r);
   for(var c=0;c<parseInt(this.ColumnData.value,10);c++)  
    {
     var y=  row.insertCell(c)
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }






    //this.container.append()
   
    
    //debugger;
  }

  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    // Add control initialization code

    // column  Value
    this.ColumnData = document.createElement("input");
    this.ColumnData.setAttribute("name", "ColumnData");
    this.ColumnData.setAttribute("placeholder", "ColumnValue");
    this.ColumnData.setAttribute("id", "ColumnDataId");
    this.ColumnData.setAttribute("class", "ColumnDataClass");
    container.append(this.ColumnData);

    // Row Input
    this.RowData = document.createElement("input");
    this.RowData.setAttribute("name", "RowData");
    this.RowData.setAttribute("placeholder", "RowValue");
    this.RowData.setAttribute("id", "RowDataId");
    this.RowData.setAttribute("class", "RowDataClass");

    container.append(this.RowData);

    //debugger;

     this.TableData=document.createElement("table");
    this.TableData.setAttribute("id","myTable");
     container.append(this.TableData)


    // Create btns
    this.CreateButton = document.createElement("button");
    this.CreateButton.setAttribute("name", "CreateButton");
    this.CreateButton.setAttribute("type", "submit");
    this.CreateButton.setAttribute("id", "CreateBtnID");
    this.CreateButton.setAttribute("class", "CreatebtnClass");
    this.CreateButton.innerHTML = "Create";

    container.append(this.CreateButton);

    this.CreateButton.addEventListener("click", () => {
      this.createTable();
    });
    this._container = container;
    this._notifyOutputChanged = notifyOutputChanged;
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
    ReactDOM.render(
      React.createElement(Grid as any, {}), 
      this._container
       );
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {};
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
