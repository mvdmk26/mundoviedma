// Configuración Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAGMSFjID1AFxB7zG5cXpVMRGPvbTbwWp4",
    authDomain: "mvdmk26-25a2a.firebaseapp.com",
    databaseURL: "https://mvdmk26-25a2a-default-rtdb.firebaseio.com",
    projectId: "mvdmk26-25a2a",
    storageBucket: "mvdmk26-25a2a.appspot.com",
    messagingSenderId: "815254204200",
    appId: "1:815254204200:web:7be53826b2d90844d4aa1d"
};

// Inicialización
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const productosRef = db.ref('productos');
const selectedProductsRef = db.ref('selectedProducts');

// [Todo tu código JavaScript original]