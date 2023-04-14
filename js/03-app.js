class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de  ${this.saldo}`;
  }
  static bienvenido() {
    return `Bienvenido al cajero`;
  }
}

//Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  static bienvenido() {
    return `Bienvenido al cajero empresa`;
  }
}

const ellis = new Cliente("cris", 400);
const empresa = new Empresa("Codigo con ellis", 1000, 3125668800, "tecnologia");

console.log(empresa);
console.log(Cliente.bienvenido())
console.log(Empresa.bienvenido())
