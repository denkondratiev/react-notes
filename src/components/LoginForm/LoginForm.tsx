import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik, FormikErrors } from 'formik';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import IconLock from '../../icons/IconLock';
import IconMail from '../../icons/IconMail';
import log from '../../services/Loger';

import { EMAIL_REGEX_PATTERN } from '../../app/app.const';

import styles from './LoginForm.module.css';

export type LoginFormValues = {
  email: string;
  password: string;
};

type Props = {
  handleSumbit: (values: LoginFormValues) => Promise<void>;
};

const LoginForm = ({ handleSumbit }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      await handleSumbit(values);
    } catch (error) {
      log.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validate = (values: LoginFormValues) => {
    const errors: FormikErrors<LoginFormValues> = {};
    if (values.email && !EMAIL_REGEX_PATTERN.test(values.email)) {
      errors.email = 'Not correct format';
    }
    if (!values.email) {
      errors.email = 'Required field';
    }
    if (!values.password) {
      errors.password = 'Required field';
    }
    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={onSubmit}
        setFieldValue
        isSubmitting
      >
        {() => {
          return (
            <Form id="signInForm">
              <InputField
                name="email"
                type="email"
                id="login-email"
                label="Email"
                icon={<IconMail width="14px" height="14px" />}
              />
              <InputField
                name="password"
                type="password"
                id="login-password"
                label="Password"
                icon={<IconLock width="14px" height="14px" />}
                className={styles.inputPassword}
              />
              <Button
                type="submit"
                form="signInForm"
                isLoading={isLoading}
                className={styles.loginButton}
              >
                Sign in
              </Button>
            </Form>
          );
        }}
      </Formik>
      <div className={styles.divider}></div>
      <div className={styles.forgotPassword}>
        <Link to={'/login'} className={styles.forgotPasswordLink}>
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
