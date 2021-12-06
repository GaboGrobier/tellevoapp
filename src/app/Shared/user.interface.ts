export interface User {
    uid:string;
    email:string;
    displayName:string;
    emailVerified:boolean
  };
  export interface DatoUsuarios {
    uid:string;
    nombre:string;
    apellido:string;
    correo:string;
    password:string;
    perfil:'alumno'|'admintrador'
    emailVerified:boolean
  };