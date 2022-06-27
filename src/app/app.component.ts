import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'http';
  loadedPosts = [];
  isFetching = false;
  error: string = null;


  constructor(private http : HttpClient){}

 ngOnInit(): void {
    this.fetchPost();
 }
  onCreatePost(postData: Post){
    console.log(postData);
    this.http.post<{name:string}>('https://http-ca831-default-rtdb.firebaseio.com/post.json', postData).subscribe((responseData)=>{
        console.log("response added" , responseData);
    });
  }
  onFetchPosts(){
    this.fetchPost();
  }
  onClearPosts(){
    
  }
  private fetchPost(){
    this.isFetching=true;
    this.http.get<{[key:string] : Post}>('https://http-ca831-default-rtdb.firebaseio.com/post.json')
    .pipe(map((responseData : {[key : string]: Post})=>{
      const arr:Post[]=[];
      for(const key in responseData){
        if(responseData[key]){
          arr.push({...responseData[key],id:key});
        }
      }
      return arr;
    }))
    .subscribe((posts)=>{
      console.log("posts",posts);
      this.loadedPosts=posts;
      this.isFetching=false;
    })
  }
}
