import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDPIrAsEZEWfScUnXHx-Ic01XMlRolVRrw',
  authDomain: 'vue-firebase-chat-61b21.firebaseapp.com',
  databaseURL: 'https://vue-firebase-chat-61b21.firebaseio.com',
  projectId: 'vue-firebase-chat-61b21',
  storageBucket: 'vue-firebase-chat-61b21.appspot.com',
  messagingSenderId: '993958043952',
  appId: '1:993958043952:web:f5bbb39a76af9e18f928f5',
  measurementId: 'G-QN2CGK6Y5Z',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
