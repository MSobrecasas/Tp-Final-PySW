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
              if (pago.fecha.timestamp > 1546300800
                && pago.fecha.timestamp < 1548979199) {
                result.push(pago);
                console.log(result);
                break;
              }
            case 'Febrero':
              if (pago.fecha.timestamp > 1548979199
                && pago.fecha.timestamp < 1548719999) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Marzo':
              if (pago.fecha.timestamp > 1548720000
                && pago.fecha.timestamp < 1554076799) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Abril':
              if (pago.fecha.timestamp > 1554076800
                && pago.fecha.timestamp < 1556668799) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Mayo':
              if (pago.fecha.timestamp > 1556668800
                && pago.fecha.timestamp < 1559347199) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Junio':
              if (pago.fecha.timestamp > 1559347200
                && pago.fecha.timestamp < 1561939199) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Julio':
              if (pago.fecha.timestamp > 1561939200
                && pago.fecha.timestamp < 1564617599) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Agosto':
              if (pago.fecha.timestamp > 1564617600
                && pago.fecha.timestamp < 1567295999) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Septiembre':
              if (pago.fecha.timestamp > 1567296000
                && pago.fecha.timestamp < 1569887999) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Octubre':
              if (pago.fecha.timestamp > 1569888000
                && pago.fecha.timestamp < 1572566399) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Noviembre':
              if (pago.fecha.timestamp > 1572566400
                && pago.fecha.timestamp < 1575158399) {
                console.log("entra al if");
                result.push(pago);
                console.log(result);
              }
              break;
            case 'Diciembre':
              if (pago.fecha.timestamp > 1575158400
                && pago.fecha.timestamp < 1577836799) {
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

