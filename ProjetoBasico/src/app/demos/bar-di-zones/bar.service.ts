import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export function BarFactory(http: HttpClient){
    return new BarServices(http);
}


@Injectable()
export class BarServices {

    constructor(private http: HttpClient) { }

    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porções';
    }

    obterRefeicoes(): string {
        return 'Refeições';
    }
}

export class BarServicesMock {

    obterBebidas(): string {
        return 'Mock';
    }

    obterPorcoes(): string {
        return 'Mock';
    }

    obterRefeicoes(): string {
        return 'Mock';
    }
}