const {io} = require('../index');
const EntidadesContablesCollection = require('../models/entidades_contables.collection');
const EntidadesContable = require('../models/entidades_contables');

const entidadesContablesCollection = new EntidadesContablesCollection();



// Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');

  client.emit('entidades-contables', entidadesContablesCollection.getEntidadesContables());

  client.on('incrementar-entidad', (payload) => {
    entidadesContablesCollection.sumarCantidad(payload.id);
    io.emit('entidades-contables', entidadesContablesCollection.getEntidadesContables());

  }
  );
  client.on('agregar-entidad', (payload) => {
    const newEntidad = new EntidadesContable(payload.descripcion);
    entidadesContablesCollection.addEntidadContable(newEntidad);
    io.emit('entidades-contables', entidadesContablesCollection.getEntidadesContables());
  });

  client.on('eliminar-entidad', (payload) => {
    entidadesContablesCollection.deleteEntidadContable(payload.id);
    io.emit('entidades-contables', entidadesContablesCollection.getEntidadesContables());
  }
  );


    client.on('disconnect', () => {
      console.log('Cliente desconectado');
    });





    client.on('emitir-mensaje', (payload) => {
       //io.emit('nuevo-mensaje', 'Heeey'); //! Emite a todos
    
     //! Emite a todos menos al que lo emitió
     client.broadcast.emit('nuevo-mensaje', payload); 
    });
  
  });