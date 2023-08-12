const notebook = {
  brand: "ASUS",
  model: "Vivobook D413IA-EB303TS",
  processor: "AMD Ryzen 7 4700U 3.6GHz",
  graphics: "Integrated Graphics : AMD Radeon Graphics",
  ram: "8GB DDR4 Onboard",
  storage: "512GB PCIe NVMe M.2 SSD",
};

const log = console.log;
const notebook1 = {};
const notebook2 = {};
//for loop
// for(let key in notebook){
//     notebook1[key]=notebook[key]
// }

// log(notebook1)

//obj.assign
Object.assign(notebook1, notebook);

log(notebook1);
log(notebook2);
