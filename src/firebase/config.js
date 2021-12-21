import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_ZLFzpMAixT8RncRNgFqJELjFI1u4rx4',
  authDomain: 'utica-clone.firebaseapp.com',
  projectId: 'utica-clone',
  storageBucket: 'utica-clone.appspot.com',
  messagingSenderId: '697285425952',
  appId: '1:697285425952:web:7bb3c99262b8bd94dc7545',
};

// init firebase app
initializeApp(firebaseConfig);

// init services
export const db = getFirestore();

// collection ref
const contactRef = collection(db, 'contact');

// add doc
export const addNewDoc = (doc) => addDoc(contactRef, doc);
