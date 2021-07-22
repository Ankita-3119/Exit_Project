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
    sname: 'Ankita Rajbhar',
    s_sal: 89764,
    age:21
    },{
    sid: 'S102',
    sname: 'Jyoti Choudhary',
    s_sal: 76437,
    age:21
    },{
      sid: 'S103',
      sname: 'Khushnuma parveen',
    s_sal: 66762,
    age:21
    },
    {
      sid:'S104',
      sname:'Manasi Khankari',
      s_sal:67889,
      age:21
    },
    {
      sid:'S105',
      sname:'Snehal Kumari',
      s_sal: 76467,
      age:22

    }
  ];
    constructor(private excelService:ExcelService){
    }
    exportAsXLSX():void {
       this.excelService.exportAsExcelFile(this.data, 'sample');
    }
    }

