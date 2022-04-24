import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GitdataService } from '../gitdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formGroup: FormGroup;
  hasProfile: boolean = false;
  userProfile:any;
  userDoesNotExist:boolean = false;
  searchTerm:any;
  userRepository:any;
  constructor(private route :  ActivatedRoute, 
    private router : Router,
    private formBuilder: FormBuilder,
    private service : GitdataService) {
    this.route.params.subscribe(params => {if(params.term){
      this.searchTerm = params.term
      this.getSearch(params.term)}
    })
    this.formGroup = this.formBuilder.group({
      search: ''
    });
  }
  ngOnInit(): void {

  }
  search(term:string){
    this.router.navigate(['search',term])
  }

  getSearch(term: string) {
    
    this.service.getUserByTerm(term).subscribe(result =>{
      this.userProfile = result;
      this.userDoesNotExist = false;
      var historyData = {url : window.location.href,created_at : new Date(),success:true};
      this.service.addHistory(historyData).subscribe()
    }, error => {
      this.userDoesNotExist = true;
      var historyData = {url : window.location.href,created_at : new Date(),success:false};
      this.service.addHistory(historyData).subscribe()
    });
    this.service.getUserRepos(term).subscribe(repos=>{
      this.userRepository = repos;
    })
  }

}
