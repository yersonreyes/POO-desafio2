export default class Cliente {
  constructor(nombre, inpuesto) {
    this._nombre = nombre;
    this.inpuesto = inpuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get calculo() {
    return (this.inpuesto._montoBruto - this.inpuesto._deducciones) * 0.21;
  }
}
