import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre: string = "";
  apellido: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  errPassword: string = "";
  errNombre: string = "";
  errApellido: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  registro(){
    this.errApellido = "";
    this.errNombre = "";
    this.errPassword = "";
    if(this.nombre !="") {
      if (this.nombre.length < 4 || this.nombre.length >20){
        this.errNombre = "Error, los caracteres mínimo es 4 y el máximo 20"
      } else {
        alert("nombre correcto")
      }
    }else {
      alert("ingresa un nombre!")
      return;
    }

    if(this.apellido !="") {
      if (this.apellido.length < 4 || this.apellido.length >20){
        this.errApellido = "Error, los caracteres mínimo es 4 y el máximo 20"
      } else {
        alert("Apellido correcto")
      }
    }else {
      alert("ingresa un apellido!")
      return;
    }

    if(this.email!=null){
      let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
          if (regex.test(this.email.trim())) {
                alert('Correo validado');
                console.log(this.email);
          } else {
                alert('La dirección de correo no es válida');
                return;
          }
    }

    if(this.password !="") {
      if(this.password.length < 8 || this.password.length > 12){
        this.errPassword = "Error, Debe tener como mínimo 8 caracteres y máximo 12";
      }else {
        alert("password correcta");     
      }
    }else {
      alert("ingresa una contraseña!")
      return;
    }

    if(this.password != "" && this.confirmPassword != ""){
      if(this.password == this.confirmPassword){
        alert("password coinciden!")
        
      }else {
        alert("las password no coinciden!")
        return;
      }
    }

    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
  }

}
