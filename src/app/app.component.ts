import { Component } from '@angular/core';
//import { clearScreenDown } from 'readline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  palabra = 'AGUACATE';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor(){

    this.palabraOculta = '_ '.repeat(this.palabra.length);

    console.log('Se acaba de crear el App Component')
  }

  comprobar( letra ){
    this.existeLetra(letra);
    const palabraOcultaArr=this.palabraOculta.split(' ')
    
    for(let i=0; i< this.palabra.length;i++){

      if (this.palabra[i] === letra){
        palabraOcultaArr[i] = letra;
      }

    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    // console.log(palabraArr);
    console.log(palabraEvaluar);

    if(palabraEvaluar === this.palabra){
      this.gano=true;
      console.log('Usuario GANO');
    }
    if(this.intentos >= 9){
        this.perdio = true;
        console.log('Usuario perdio')
      }
    }
  

  existeLetra(letra){
    if (this.palabra.indexOf(letra) >= 0){
      // console.log('Letra existe ' + letra);

    }else{
      // console.log('Letra NO existe ' + letra);
      this.intentos ++;
    }
  }

}
