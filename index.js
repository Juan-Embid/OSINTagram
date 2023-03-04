const admin = require('firebase-admin');
const serviceAccount = require('./ruta/al/archivo-de-configuracion.json');

// Inicializar la aplicación de Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nombre-de-tu-proyecto.firebaseio.com/'
});

// Exportar la aplicación para utilizarla en otros archivos
module.exports = admin;