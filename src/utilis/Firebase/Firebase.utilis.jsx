import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBocNik1493-znhheXzd2p0gV_ly_Sy4rI",
    authDomain: "prestigious-thread.firebaseapp.com",
    projectId: "prestigious-thread",
    storageBucket: "prestigious-thread.appspot.com",
    messagingSenderId: "41059688277",
    appId: "1:41059688277:web:e4e96afe64fb38420619dc"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "seelect_account"
  });

  export const auth = getAuth();
  export const signInWithGooglepopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

 export const createuserDocumentfromAuth = async(userAuth)=> {
      const userDocRef = doc(db, 'users', userAuth, uid );

      console.log(userDocRef);
      const userSnapShot = await getDoc(userDocRef);
      console.log(userSnapShot);
      console.log(userSnapShot.exists());

      if(!userSnapShot.exists()){
        const{displayName, email}=userAuth;
        const createdAt= new Date();

        try {
          await setDoc(userDocRef,{
            displayName,email,createdAt
          });
        }catch (error){
          console.log('error creating the user', error.message);
        }
      }
      return userDocRef;

  };
