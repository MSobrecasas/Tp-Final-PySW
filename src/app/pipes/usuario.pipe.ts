import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (value != null) {
      if (arg === '') return value;
      const result = [];
      for (const usuario of value) {
        if (usuario != null) {
          if (usuario.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            result.push(usuario);
          };
        }
      };
      return result;
    }
  }



}
