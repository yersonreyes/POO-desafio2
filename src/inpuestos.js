export default class Inpuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBruto = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get montoBruto() {
    return this._montoBruto;
  }

  set montoBruto(nuevoMontoBruto) {
    this._montoBruto = nuevoMontoBruto;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(nuevoDeducciones) {
    this._deducciones = nuevoDeducciones;
  }
}
