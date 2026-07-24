// Importa o Firebase
import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// Importa o Firestore
import { getFirestore } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Configuração do Firebase LS.fotostory
const firebaseConfig = {

  apiKey: "AIzaSyBQtD6m2ti24SQjEqAFZ3idQP50xRYa7co",

  authDomain: "lsfotostory-d908f.firebaseapp.com",

  projectId: "lsfotostory-d908f",

  storageBucket: "lsfotostory-d908f.firebasestorage.app",

  messagingSenderId: "17338738179",

  appId: "1:17338738179:web:b193bba14d5dc0ce2f5036",

  measurementId: "G-GR899RTPSW"

};


// Inicializa o Firebase
const app = initializeApp(firebaseConfig);


// Conecta ao banco Firestore
export const db = getFirestore(app);
