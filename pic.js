// pic.addEventListener('change',function(e){
//     for (let i =0;i<e.target.files.length;i++){
//         let imageFile = e.target.files[i];
//         let storageRef = firebase.storage().ref('Pics'+imageFile.name);
//         let task = storageRef.put(imageFile);
//     }
// }) 