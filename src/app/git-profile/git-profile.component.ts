import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent  {

  constructor() { }
 
  @Input()
  gitProfile:any
  
  @Input()
  gitRepos : any
  

}
