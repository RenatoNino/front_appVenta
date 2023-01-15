export class Client{
    constructor(
        public id:number,
        public dni:string,
        public nombres:string,
        public apellidos:string,
        public fechaRegistro:Date,
        public edad:number,
        public talla:number
    ){}
}

export class Product{
    constructor(
        public id:number,
        public nombre:string,
        public precio:number,
        public stock:number
    ){}
}

export class Sale{
    constructor(
        public id:number,
        public fecha:Date,
        public monto:number,
        public dniCliente:number
    ){}
}