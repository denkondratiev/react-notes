import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/slices/userSlice';
import log from '../../services/Loger';

import SignUpForm, {
  SignUpFormValues,
} from '../../components/SignUpForm/SignUpForm';

import styles from './SignUp.module.css';
import IconLogo from '../../icons/IconLogo';
import FormWrapper from '../../components/FormWrapper/FormWrapper';
import CookiesService from '../../services/CookiesService';

const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSumbit = async ({
    fullName,
    email,
    password,
  }: Pick<SignUpFormValues, 'fullName' | 'email' | 'password'>) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      const user = getAuth().currentUser;
      if (user) {
        await updateProfile(user, { displayName: fullName });
        CookiesService.setSessionCookie(user.uid);
        dispatch(
          setUser({
            fullName: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
        navigate('/');
      }
    } catch (error: any) {
      log.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <IconLogo width="196px" height="26px" className={styles.iconLogo} />
      <FormWrapper>
        <SignUpForm handleSumbit={handleSumbit} />
      </FormWrapper>
    </div>
  );
};

export default SignUp;
