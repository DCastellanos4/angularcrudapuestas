import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Equipo } from "../models/equipo";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Jugador } from "../models/jugador";

@Injectable()
export class ServiceEquipos {
    url = environment.urlApiApuestas
    constructor(private _http: HttpClient) {

    }
    async getEquiposAsync(): Promise<Equipo[]> {
        let request = "api/equipos"
        return firstValueFrom(this._http.get<Equipo[]>(this.url + request));
    }
    async getEquposPorIdAsync(id: number): Promise<Equipo> {
        let request = "api/equipos/" + id
        return firstValueFrom(this._http.get<Equipo>(this.url + request))
    }
    async getJugadoresEquipoAsync(id: number): Promise<Jugador[]> {
        let request = "api/jugadores/jugadoresequipos/" + id
        return firstValueFrom(this._http.get<Jugador[]>(this.url + request))
    }
}