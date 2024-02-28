const { uuid } = require('uuidv4');


class EntidadesContables {
    constructor(descripcion = 'no-description'){
        this.id = uuid();
        this.descripcion = descripcion;
        this.cantidad = 0;
    }
}
module.exports = EntidadesContables;