import React, { useEffect, useState } from 'react';
import { provider } from './utils/firebase';
import reactLogo from './assets/react.svg';
import './App.css';
import { GoogleAuthProvider, connectAuthEmulator, getAuth, signInWithPopup } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const env = import.meta.env;

function App () {
  const [count, setCount] = useState(0);

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
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          const { code = '', customData = {}, message = '' } = error as FirebaseError;
          console.error({ code, message });
          const { email } = customData;
          const credential = GoogleAuthProvider.credentialFromError(error as FirebaseError);
          console.log({ email, credential });
        } else {
          console.error('Unknown error: ', error);
        }
      }
    };

    signIn();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
