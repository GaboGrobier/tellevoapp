export interface User {
    uid:string;
    email:string;
    displayName:string;
    emailVerified:boolean
  };
  export interface usuarioDB  {
      nombre:"",
      apelldio:"",
      email:"",
      password:"",
      perfil:"alumno"
  };
  export interface ViajeConductor{
      uid: string,
      correo: string,
      fecha: Date,
      destino: string,
    
  };
  