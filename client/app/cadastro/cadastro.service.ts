import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './../foto/foto.component';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CadastroService {
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastrar(foto: FotoComponent): Observable<Response> {
        if (foto._id) {
            return this.http.put(`${this.url}/${foto._id}`, JSON.stringify(foto), 
            { headers: this.headers });
        } else {
            return this.http.post(this.url, JSON.stringify(foto), 
                { headers: this.headers });
        }
    }

    listar(): Observable<FotoComponent[]>  {
        return this.http.get(this.url)
            .map(res => res.json());

    }

    remover(foto: FotoComponent) {
        return this.http.delete(`${this.url}/${foto._id}`);
    }

    buscaPorId(id: string): Observable<FotoComponent> {
        
            return this.http
                .get(`${this.url}/${id}`)
                .map(res => res.json());
        }
}