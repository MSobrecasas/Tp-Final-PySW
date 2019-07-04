import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escribano'
})
export class EscribanoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (value != null) {
      
      if (arg === '') {
        return value;
        };

      } else {
        const result = [];
        for (const usuario of value) {
            if (usuario.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
              result.push(usuario);
            }  
        };
        return result;
      }

      

    }

}
