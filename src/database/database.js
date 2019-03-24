import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBc-rvsHg16H1kbscMYXCL4FwZP3LMS71M',
  authDomain: 'transaction-manager-f9b99.firebaseapp.com',
  databaseURL: 'https://transaction-manager-f9b99.firebaseio.com/',
})

export default firebase.database()
