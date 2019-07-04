import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (value != null) {
      const result = [];
      if (arg === '') {
        for (const usuario of value) {
          if (usuario.tipoUsuario != 'socio') {
            result.push(usuario);
          }
        };

      } else {
        for (const usuario of value) {
          if (usuario.tipoUsuario != 'socio') {
            if (usuario.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
              result.push(usuario);
            }
          }
        };
      }

      return result;

    }


  }




}
