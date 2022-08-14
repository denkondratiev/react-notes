import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../store/slices/userSlice';

import LoginForm, {
  LoginFormValues,
} from '../../components/LoginForm/LoginForm';

import styles from './Login.module.css';
import IconLogo from '../../icons/IconLogo';
import FormWrapper from '../../components/FormWrapper/FormWrapper';
import CookiesService from '../../services/CookiesService';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSumbit = async (values: LoginFormValues) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (user) {
        CookiesService.setSessionCookie(user.refreshToken);
        dispatch(
          setUser({
            fullName: user.displayName,
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate('/');
      }
    } catch (error: any) {
      console.error('Error code: ', error.code);
      console.error('Error message: ', error.message);
    }
  };

  return (
    <div className={styles.container}>
      <IconLogo width="196px" height="26px" className={styles.iconLogo} />
      <FormWrapper>
        <LoginForm handleSumbit={handleSumbit} />
      </FormWrapper>
    </div>
  );
};

export default Login;
