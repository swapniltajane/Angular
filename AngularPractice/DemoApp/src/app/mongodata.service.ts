import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class MongodataService {
  public getUrl = 'http://127.0.0.1:8080/api/getProducts';
  public postUrl = 'http://127.0.0.1:8080/api/addProduct';
  constructor(private http: HttpClient) { }

  public GetProducts(): Observable <IProducts[]> {
    return this.http.get<IProducts[]>(this.getUrl);
  }

  public AddProduct(data) {
    console.log(data);
    return this.http.post(this.postUrl, data).subscribe();
  }
}
