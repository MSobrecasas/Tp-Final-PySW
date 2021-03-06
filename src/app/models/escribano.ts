import { Usuario } from './usuario';
import { Escribania } from './escribania';
import { Pagos } from './pagos';

export class Escribano {
    id: number;
    legajo: number;
    usuario: Usuario;
    escribania: Escribania;
    estado: boolean;

    Escribano(id?: number, legajo?: number, usuario?: Usuario, escribania?: Escribania, estado?: boolean) {
        this.id = id;
        this.legajo = legajo;
        this.usuario = usuario;
        this.escribania = escribania;
        this.estado = estado;
    }
}
