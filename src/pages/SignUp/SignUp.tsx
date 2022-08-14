import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import SignUpForm, {
  SignUpFormValues,
} from '../../components/SignUpForm/SignUpForm';

import styles from './SignUp.module.css';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSumbit = async ({
    fullName,
    email,
    password,
    confirmPassword,
  }: SignUpFormValues) => {
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
        <SignUpForm handleSumbit={handleSumbit} />
      </div>
    </div>
  );
};

export default SignUp;
