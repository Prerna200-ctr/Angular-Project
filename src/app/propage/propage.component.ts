
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { account } from 'src/app/models/account';
import {Router} from '@angular/router';

@Component({
  selector: 'app-propage',
  templateUrl: './propage.component.html',
  styleUrls: ['./propage.component.css']
})



export class PropageComponent {
  title = 'myProject';
  public adddata : boolean=false;
  public gridApi:any;
  public rowSelection='single';
  public user:string="";
  public myData: account[]=[];
  public data: any;
  public modaldata:account=new account();
  public inputname:string="";
  public inputacn: string="";
  public inputbal: string="";

  constructor(private router: Router){}

 ngOnInit():void{
  let griddata=JSON.parse(localStorage.getItem("testdata"));
  if(!!griddata && griddata.length>0)
  {
    this.myData=griddata;
  }
  else
  {
    localStorage.setItem("testdata",JSON.stringify(this.rowData));
    this.myData=this.rowData
  }
}

  // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  { field: 'Name'},
  { field: 'AccountNumber'},
  { field: 'Balance' },
  
];


rowData = [
  // { Name: 'Jayshree',AccountNumber: '56789',Balance: '89786567' },
  { Name: 'Jayshree',AccountNumber: '56789',Balance: '89786567' },
  { Name: 'Jayshree',AccountNumber: '56789',Balance: '89786567' },
  { Name: 'Jayshree',AccountNumber: '56789',Balance: '89786567' },
  { Name: 'Jayshree',AccountNumber: '56789',Balance: '89786567' }
//   { Name: 'Jayshree',AccountNumber: '56789',Balance: '89786567' }
];

 // DefaultColDef sets props common to all Columns
 public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};

// Data that gets displayed in the grid
public rowData$!: Observable<any[]>;


add()
{
  console.log("test");
  this.adddata = true;
}

delete()
{
  // console.log("test");
  // this.adddata = false;
  var data=JSON.parse(localStorage.getItem("testdata"));
  data=data.filter((el: { Name: string; })=>el.Name!==this.user);

  localStorage.setItem("testdata",JSON.stringify(data));

  window.location.reload();
}

close()
{
  console.log("test");
  this.adddata = false;
}

save()
{
 this.modaldata.Name=this.inputname;
 this.modaldata.AccountNumber=this.inputacn;
 this.modaldata.Balance=this.inputbal;
 this.data=JSON.parse(localStorage.getItem("testdata"));
 this.data.push(this.modaldata);
 localStorage.setItem("testdata",JSON.stringify(this.data));
 window.location.reload();
}

onSelectionChanges(events:any)
{
  const selectedRows = this.gridApi.getSelectedRows();
  this.user = selectedRows.length == 1 ? selectedRows[0].Name : '';
}

onGridReady(params:any)
{
  this.gridApi=params.api;
}



}



