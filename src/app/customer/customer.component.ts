import { Component, OnInit } from '@angular/core';
import { RequestMethodsRepositoryService } from '../common/request-methods.repository.service';
import { UrlConstantService } from '../common/url.constant.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  
 newsapidata :any;
countrywisenews:any;

  constructor(private reqmethod:RequestMethodsRepositoryService, private urlconst:UrlConstantService) { }

  ngOnInit() {
    
  this.urlconst.newsdata().subscribe(res =>{
    this.newsapidata=res.sources;
    //this.name=((res as any)).res.name;
    //console.log('dataresponse', this.newsapidata ); 
     // Convert to JSON  
    //this.stringifiedData = JSON.stringify(this.newsapidata);    
     //console.log("With Stringify :" , this.stringifiedData);  
   
  });
this.urlconst.newscountry().subscribe(res=>{
  this.countrywisenews=res.articles;
  console.log('contry',this.countrywisenews);
})

  }
 

 

}
