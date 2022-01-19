import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { Usuario } from './models/usuario';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;

  usuario: Usuario | any;

  formResult: string = '';

  MASKS = utilsBr.MASKS;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirmacao = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({ // Forma utilizando formBuilder
        nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
        cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
        email: ['', [Validators.required, Validators.email]],
        senha: senha,
        senhaConfirmacao: senhaConfirmacao,
    });

    // this.cadastroForm = new FormGroup({ Forma sem o formBuilder
    //   nome: new FormControl(''),
    //   cpf: new FormControl(''),
    //   email: new FormControl(''),
    //   senha: new FormControl(''),
    //   senhaConfirmacao: new FormControl(''),
    // });
    // let nome = new FormControl('');
  }

  adicionarUsuario() {
    // let x = this.cadastroForm.value; Antes recebiamos os valores assim.
    if(this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    } else {
      this.formResult = "Não submeteu!";
    }
  }
}
