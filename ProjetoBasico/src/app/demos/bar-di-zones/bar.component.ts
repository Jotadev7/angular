import { HttpClient } from "@angular/common/http";
import { Component, Inject, NgZone, OnInit } from "@angular/core";
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
        private barServices: BarServices,
        private ngZone: NgZone){ }

    ngOnInit(): void {
        this.barBebida1 = this.barServices.obterBebidas();
    }

    public progress: number = 0;
    public label: string = '';

    processWithinAngularZone() {
        this.label = 'dentro';
        this.progress = 0;
        this._increaseProgress(() => console.log('Finalizado por dentro!'));
    }

    processOutsideOfAngularZone() {
        this.label = 'fora';
        this.progress = 0;
        this.ngZone.runOutsideAngular(() => {
            this._increaseProgress(() => {
                this.ngZone.run(() => {console.log('Finalizado fora!');})
            })
        })
    }

    _increaseProgress(doneCallback: () => void) {
        this.progress += 1;
        console.log(`Progresso atual: ${this.progress}%`);

        if(this.progress < 100) {
            window.setTimeout(() => this._increaseProgress(doneCallback), 10);
        } else {
            doneCallback();
        }
    }


}
