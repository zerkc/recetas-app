import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/Rx"

@Injectable()
export class RecetasService {
    constructor(private http: HttpClient) { }
    getReceta(id: number) {
        return this.http.get(`http://35.199.91.205:3000/receta/${id}`);
    }

    getAllRecetas() {

        return this.http.get('http://35.199.91.205:3000/recetas');
    }
}