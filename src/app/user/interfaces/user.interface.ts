export interface Role {
  id:      number;
  name:    string;
  usuario: User[];
  activo:  boolean;
}

export interface User {
  id:                number;
  name:              Name;
  lastName:          LastName;
  username:          Username;
  correoElectronico: CorreoElectronico;
  roles?:            Role[];
  activo:            boolean;
}

export enum CorreoElectronico {
  EmilioGmailCOM = "emilio@gmail.com",
  GiovGmailCOM = "giov@gmail.com",
  GiovanniGmailCOM = "giovanni@gmail.com",
  JajfajaaGmailCOM = "jajfajaa@gmail.com",
  JulGmailCOM = "jul@gmail.com",
  MariaGmailCOM = "maria@gmail.com",
  NesalazGmailCOM = "nesalaz@gmail.com",
  ThomyGmailCOM = "thomy@gmail.com",
}

export enum LastName {
  Barrera = "Barrera",
  Rulfo = "Rulfo",
  Salazar = "Salazar",
}

export enum Name {
  Emiliano = "Emiliano",
  Giovanne = "Giovanne",
  Juan = "Juan",
  Julian = "Julian",
  MariaJose = "Maria jose",
  Nelson = "Nelson",
  Thomy = "thomy",
}

export enum Username {
  Emilio = "emilio",
  Fuanes = "fuanes",
  Juli = "juli",
  Mariajo = "mariajo",
  Negi = "negi",
  Negisaro = "negisaro",
  Nesalaz = "nesalaz",
  Thomis = "thomis",
}
