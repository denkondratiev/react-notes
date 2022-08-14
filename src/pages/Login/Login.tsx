import { useDispatch } from 'react-redux';
import { ErrorInfo, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import LoginForm, {
  LoginFormValues,
} from '../../components/LoginForm/LoginForm';

import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSumbit = async (values: LoginFormValues) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
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
        <LoginForm handleSumbit={handleSumbit} />
      </div>
    </div>
  );
};

export default Login;
