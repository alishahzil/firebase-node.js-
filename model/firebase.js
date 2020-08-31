var admin = require("firebase-admin");

var serviceAccount = require("../firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-alishahzil.firebaseio.com"
});

const db = admin.firestore();
var MyModule = function(){};
MyModule.prototype.someFunction = function(params){

  db.collection('blogs').doc().set(params);
}
MyModule.prototype.getdata= async function(){
  
  const citiesRef = db.collection('blogs');
  
const snapshot = await citiesRef.get();
 /*snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data().name);
      });*/ 
return snapshot;
}
MyModule.prototype.delete= async function(param){
   await db.collection('blogs').doc(param).delete();
 
}
MyModule.prototype.search= async function(param){
  var docRef = await db.collection("blogs").doc(param).get();
  
  
 return docRef;
}
module.exports = MyModule;

