const EntidadesContable = require('../models/entidades_contables');

class EntidadesContablesCollection  {
  constructor() {
    this.entidadesContables = []
 }

 addEntidadContable(entidadContable= new EntidadesContable()) {
   this.entidadesContables.push(entidadContable)
 }

 getEntidadesContables() {
   return this.entidadesContables
 }

 deleteEntidadContable(id) {
    this.entidadesContables = this.entidadesContables.filter(entidadContable => entidadContable.id !== id)
    return this.entidadesContables;
}

sumarCantidad(id) {
 this.entidadesContables = this.entidadesContables.map(entidadContable => {
    if (entidadContable.id === id) {
      entidadContable.cantidad++
    }
    return entidadContable;
     })
     
}


}

module.exports = EntidadesContablesCollection;