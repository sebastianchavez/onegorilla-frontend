import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  btnLoad = false;
  registerForm: FormGroup;
  submitted = false;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(private formBuilder: FormBuilder, private api: ApiService) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      valN: ['', [Validators.required, Validators.pattern('^([0-9])*$')]],
      valM: ['', [Validators.required, Validators.pattern('^[0-9]+([,][0-9]+)*$')]]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.btnLoad = true;
    document.getElementById('btnSave').setAttribute('disabled', 'disabled');
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.btnLoad = false;
      document.getElementById('btnSave').removeAttribute('disabled');
      return;
    }

    const body = this.registerForm.value;
    body.result = false;
    const newValM = this.registerForm.value.valM.split(',');
    newValM.map((val, index) => {
      newValM.map((val2, index2) => {
        if (index !== index2) {
          if (parseFloat(val) + parseFloat(val2) === parseFloat(body.valN)) {
            body.result = true;
          }
        }
      });
    });

    this.api.post('api/save', body).subscribe((resp: any) => {
      this.btnLoad = false;
      document.getElementById('btnSave').removeAttribute('disabled');
      this.Toast.fire({
        type: 'success',
        title: resp.message
      });
    }, err => {
      this.btnLoad = false;
      document.getElementById('btnSave').removeAttribute('disabled');
      Swal.fire({
        type: 'error',
        title: err.message
      });
    });
  }


}
