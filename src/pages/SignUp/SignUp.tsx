import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './SignUp.module.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
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

export default SignUp;
