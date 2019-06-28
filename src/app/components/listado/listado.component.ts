import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  error: boolean;
  alert: boolean;
  errorMsg: string;
  alertMsg: string;
  loading = true;
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: ApiService) {
    this.api.get('api/params').subscribe((resp: any) => {
      if (resp.length > 0) {
        this.ELEMENT_DATA = resp;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        this.alert = true;
        this.alertMsg = 'No existen parámetros en la base de datos';
      }
      this.loading = false;
    }, err => {
      this.loading = false;
      this.error = true;
      this.errorMsg = err.message;
    });
  }

  ELEMENT_DATA: Array<any> = [];

  displayedColumns: string[] = ['name', 'email', 'valN', 'valM', 'result'];


  ngOnInit() {
    setInterval(() => {
      // if (this.paginator){
        console.log(this.paginator);
      // }
    }, 500);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
