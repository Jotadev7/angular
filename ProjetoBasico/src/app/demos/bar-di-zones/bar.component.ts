import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";
import { BarFactory, BarServices, BarServicesMock } from "./bar.service";

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    providers: [
        //{ provide: BarServices, useClass: BarServicesMock }, Caso deixe os dois, vai valer o último
        {
            provide: BarServices, useFactory: BarFactory, deps: [
                HttpClient
            ]
        }
    ]
})
export class BarComponent implements OnInit {

    barBebida1: string = '';
    Config: BarUnidadeConfig = {unidadeId: 1, unidadeToken: '123'};
    ConfigManual: BarUnidadeConfig = {unidadeId: 1, unidadeToken: '123'};

    constructor(
        private barServices: BarServices){ }

    ngOnInit(): void {
        this.barBebida1 = this.barServices.obterBebidas();
    }
}