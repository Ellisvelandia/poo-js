class Cliente {
#nombre;
  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.#nombre}, tu saldo es de  ${this.saldo}`;
  }
  static bienvenido() {
    return `Bienvenido al cajero`;
  }
}

const ellis = new Cliente("cris", 400);
console.log(ellis.mostrarInformacion())