import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CadastroComponent } from "../cadastro/cadastro.component";


@Injectable()
export class ContaGuard implements CanDeactivate<CadastroComponent> {

    canDeactivate(component: CadastroComponent){
        if (component.mudancasNaoSalvas) {
            return window.confirm('Quer abandonar?');
        }
        return true;
    }
}