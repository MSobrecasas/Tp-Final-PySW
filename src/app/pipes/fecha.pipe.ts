import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (value != null) {
      const result = [];
      if (arg === null) {
        return value;
      } else {

        console.log(arg);
        for (const pago of value) {
          console.log("entra al for");
          switch (arg) {
            case 'Enero':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==0) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Febrero':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==1) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Marzo':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==2) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Abril':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==3) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Mayo':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==4) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Junio':
         
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==5) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }

              break;
            case 'Julio':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==6) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Agosto':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==7) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Septiembre':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==8) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Octubre':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==9) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Noviembre':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==10) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Diciembre':
              if (new Date(pago.fecha.timestamp * 1000).getMonth()==11) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            default:
              return value;
              break;
          }


        }


      };
      return result;

    }
  }
}

