var firebaseConfig = {
    apiKey: "AIzaSyBcG44f7PUu2KT1sX48CurYHXAWzINbIB4",
    authDomain: "hack-43248.firebaseapp.com",
    databaseURL: "https://hack-43248-default-rtdb.firebaseio.com",
    projectId: "hack-43248",
    storageBucket: "hack-43248.appspot.com",
    messagingSenderId: "350212425548",
    appId: "1:350212425548:web:773bdb7eadc7f054f731e9",
    measurementId: "G-E2SVQKRQMN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const db = firebase.firestore()

  const auth = firebase.auth()
     function signup(){
       const email =document.getElementById('sie').value;
       const pass = document.getElementById('sip').value;

       auth.createUserWithEmailAndPassword(email,pass)
       .then((auth)=>{
         if (auth){
           console.log('signed up')
           console.log(auth)
          }
       })
     }
     function signin(){
      const email =document.getElementById('sie').value;
      const pass = document.getElementById('sip').value;

      auth.signInWithEmailAndPassword(email,pass)
      .then((auth)=>{
        if (auth){
          console.log('signed in')
          console.log(auth.user.email)
         }
      })
    }
  

  function run(){
      const name = document.getElementById('name').value;
      const std = document.getElementById('std').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const email = document.getElementById('email').value;
      const character = document.getElementById('character').value;
        db.collection('students').doc(name).set({
         name:name,
         std:std,
         phone:phone,
         address:address,
         email:email,
         character:character
     })
    }
    
  function runt(){
    const name = document.getElementById('tname').value;
    const std = document.getElementById('tstd').value;
    const contact = document.getElementById('tphone').value;
    const address = document.getElementById('taddress').value;
    const subject = document.getElementById('subject').value;
    const character = document.getElementById('tcharacter').value;
      db.collection('teachers').doc(name).set({
       name:name,
       std:std,
       phone:contact,
       address:address,
       subject:subject,
       character:character
   })
  }

var student = db.collection('students')
 function tasks(){
   const task = document.getElementById('task').value;
    
    const append={completed:false,
      description: task,
      }
     student.where("std", "==", '12')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           
          var id= doc.id
           student.doc(id).update({
             tasks:firebase.firestore.FieldValue.arrayUnion(append)
           })
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  

  }

  function pic(){
    
    const file = document.getElementById("pic").files[0];
    const email ="deepgandhi151@gmail.com"
    const name = new Date() + '-' + file.name
    const task = firebase.storage().ref(name).put(file)
    
    task.then(snapshot =>snapshot.ref.getDownloadURL())
    .then(url=>{
      console.log(url)
      alert('Successful!')
      student.where("email","==",email)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          
         var id = doc.id
         student.doc(id).update({
           urls:firebase.firestore.FieldValue.arrayUnion(url)
         })
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
   })
}       
function getTaskUrls(){
  
     student.where("std", "==", '12')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           var x=doc.data()
          console.log(x.name)
          //window.open(x.urls[0])
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}  
function abc(){window.open('https://meet.google.com/ikr-wwza-rju')}

function set(){
  const meet = document.getElementById('set').value;
  const desc = document.getElementById('').value;
   
  
    student.where("std", "==", '12')
   .get()
   .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
          
         var id= doc.id
          student.doc(id).update({
            meet:{
               meetURL:meet,
               description:''
            }
          })
           
       });
   })
   .catch((error) => {
       console.log("Error getting documents: ", error);
   });
 
  }
 function get(){

   
  
    student.where("email", "==", 'deepgandhi151@gmail.com')
   .get()
   .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
          
         var link = doc.data().meetURL
         console.log(link)
       });
   })
   .catch((error) => {
       console.log("Error getting documents: ", error);
   });
  }