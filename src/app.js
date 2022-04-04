import Cliente from "./clientes.js";
import Inpuesto from "./inpuestos.js";

const inpuestosCliente1 = new Inpuesto(12_000_000, 1_000_000);

const Cliente1 = new Cliente("yerson Reyes", inpuestosCliente1);

console.log(
  `Inpuesto total a pagar por ${Cliente1.nombre} es de ${Cliente1.calculo}`
);
