import React, { useEffect, useState } from 'react';
import {View,Text,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export default App=()=>{
  const fireup=()=>{
    auth()
  .createUserWithEmailAndPassword('sam@a.com', '12345678')
  .then(() => {
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }

  const firein=()=>{
auth().signInWithEmailAndPassword("sam@a.com","12345678").then(value=>console.log("Sign in",value))
  }
  const check=()=>{
    console.log(auth().currentUser.email);
  }

  const read=()=>{
database().ref("/Users/6264133175").on('value',snapshot=>{
  console.log("User ",snapshot.val());
})
  }
  const write=()=>{
    database().ref("/Users/6264133175").set({password:'samyak'})
      }
return(
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Button title="Sign up" onPress={fireup} color="white"></Button>
<Button title="Sign in" onPress={firein} color="white"></Button>
<Button title="Check" onPress={check} color="white"></Button>
<Button title="Read" onPress={read} color="white"></Button>
<Button title="Write" onPress={write} color="white"></Button>
</View>
)
}