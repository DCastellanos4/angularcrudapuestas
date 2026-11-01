import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Apuesta } from "../models/apuesta";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceApuestas {
    constructor(private _http: HttpClient) {

    }
    url = environment.urlApiApuestas
    async getApuestasAsync(): Promise<Apuesta[]> {
        let request = "api/apuestas";
        return firstValueFrom(this._http.get<Apuesta[]>(this.url + request))
    }
    async deleteApuestasAsync(id: number): Promise<any> {
        let request = "api/apuestas/" + id
        return firstValueFrom(this._http.delete(this.url + request))
    }
    async createApuestaAsync(a: Apuesta): Promise<any> {
        let request = "api/apuestas/"
        let json = JSON.stringify(a);
        let header = new HttpHeaders().set("Content-type", "application/json")
        return firstValueFrom(this._http.post(this.url + request, json, { headers: header }))
    }
}