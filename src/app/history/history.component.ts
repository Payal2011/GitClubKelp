import { Component, OnInit } from '@angular/core';
import { GitdataService } from '../gitdata.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service : GitdataService) { }
  historicData:any
  ngOnInit(): void {
    this.getHistory();
  }
  getHistory(){
    this.service.getHistory().subscribe(result =>{
      this.historicData =  result;
    })
  }
  deleteRecord(record:any){
    this.service.deleteRecord(record).subscribe();
    this.getHistory();
  }
  clearHistory(){
    this.service.clear().subscribe();
  }
}
