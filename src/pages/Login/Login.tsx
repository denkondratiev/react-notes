import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error('Error code: ', error.code);
      console.error('Message: ', error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div>BILLTECH</div>
      <div>
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="button" onClick={() => handleLogin(email, password)}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
