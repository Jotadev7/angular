import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;

  usuario: Usuario | any;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({ // Forma utilizando formBuilder
        nome: [''],
        cpf: [''],
        email: [''],
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
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }

}
