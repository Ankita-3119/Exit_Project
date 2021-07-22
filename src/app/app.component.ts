import { Component } from '@angular/core';
import {ExcelService} from './excel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any = [{
    sid: 'S101',
    sname: 'Ankita',
    s_sal: 5000,
    age:21
    },{
    sid: 'S102',
    sname: 'jyoti',
    s_sal: 5000,
    age:21
    },{
      sid: 'S103',
      sname: 'khushnuma',
    s_sal: 5000,
    age:21
    },
    {
      sid:'S104',
      sname:'manasi',
      s_sal:5000,
      age:21
    },
    {
      sid:'S105',
      sname:'snehal',
      s_sal: 5000,
      age:22

    }
  ];
    constructor(private excelService:ExcelService){
    }
    exportAsXLSX():void {
       this.excelService.exportAsExcelFile(this.data, 'sample');
    }
    }

