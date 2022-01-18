import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;

  usuario: Usuario | any;

  formResult: string = '';

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({ // Forma utilizando formBuilder
        nome: ['', Validators.required],
        cpf: [''],
        email: ['', [Validators.required, Validators.email]],
        senha: [''],
        senhaConfirmacao: [''],
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
