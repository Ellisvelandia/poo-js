class Cliente {
  #nombre;

  serNombre(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }
}

const ellis = new Cliente("cris", 400);
console.log(ellis);
