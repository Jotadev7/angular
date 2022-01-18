import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup | any;

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
    let x = this.cadastroForm.value;
  }

}
