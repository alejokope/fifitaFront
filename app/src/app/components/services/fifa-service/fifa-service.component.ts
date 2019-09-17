import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-fifa-service',
  templateUrl: './fifa-service.component.html',
  styleUrls: ['./fifa-service.component.css']
})
@Injectable({
  providedIn: 'root' 
})
export class FifaServiceComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }



  fetchTable(){
    return this.http.get('https://api.myjson.com/bins/uq5yd');
  }

  fetchMatches(){
    return this.http.get('https://api.myjson.com/bins/1azarp');
  }
 /* fetchTable(){
    var request = new Request('https://fifaxture.herokuapp.com/api/table', {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
console.log('request =', request);

*/



/*fetch(request)
    .then(function(response) {
        console.log('response =', response);
        return response.body;
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
  }*/
  /*fetchTable(){

    let config:AxiosRequestConfig = {
    
      method: 'GET',

      headers:{
        'Access-Control-Allow-Origin': 'true',
        'Access-Control-Allow-Credentials':'true',
        'Content-Type': 'application/json',
        
      },
      withCredentials: true,
    }
   // return "alesdasdasdsajo";
    // this.http.get('tabla.txt');
      axios.get('https://fifaxture.herokuapp.com/api/table',config)
      .then(function(response){
        console.log(response);
      })
      .finally(function(){
        console.log("finally");
      });
    
   //console.log("asls");
  }*/
}
