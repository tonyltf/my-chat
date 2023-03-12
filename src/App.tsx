import React, { useEffect, useState } from 'react';
import { provider } from './utils/firebase';
import reactLogo from './assets/react.svg';
import './App.css';
import { GoogleAuthProvider, User, connectAuthEmulator, getAuth, signInWithPopup } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { Navigate, redirect } from 'react-router-dom';

const env = import.meta.env;

function App () {

  const [user, setUser] = useState<User>();
  const [error, setError] = useState<FirebaseError>();

  useEffect(() => {
    const signIn = async () => {
      try {
        const auth = getAuth();
        if (!env.PROD) {
          connectAuthEmulator(auth, 'http://localhost:9099');
        }
        const result = await signInWithPopup(auth, provider);
        const { accessToken } = GoogleAuthProvider.credentialFromResult(result) || {};
        const { user } = result;
        console.log({ accessToken, user });
        setUser(user);
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          const { code = '', customData = {}, message = '' } = error as FirebaseError;
          console.error({ code, message });
          const { email } = customData;
          const credential = GoogleAuthProvider.credentialFromError(error as FirebaseError);
          console.log({ email, credential });
          setError(error);
        } else {
          console.error('Unknown error: ', error);
        }
      }
    };

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      console.log('Arleady signed in - ', { user });
      setUser(user);
    } else {
      // No user is signed in.
      signIn();
    }
  }, []);

  return (
    <div className="App">
      {user && <Navigate to='/chat' />}
      {error && <>{error.message}</>}
    </div>
  );
}

export default App;
