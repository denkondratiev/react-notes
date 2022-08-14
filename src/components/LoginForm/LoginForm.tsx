import { useState } from 'react';
import { Form, Formik, FormikErrors } from 'formik';

import InputField from '../InputField/InputField';

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
      console.error('LoginForm Error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const validate = (values: LoginFormValues) => {
    const errors: FormikErrors<LoginFormValues> = {};
    if (!values.email) {
      errors.email = 'Required field';
    }
    if (!values.password) {
      errors.password = 'Required field';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={onSubmit}
      setFieldValue
      isSubmitting
    >
      {(formik) => {
        const handlerFocusEmail = () => {
          if (formik.values.email === '') {
            formik.setFieldValue('email', 'user@mail.com');
          }
        };

        return (
          <Form>
            <InputField
              name="email"
              id="login-email"
              onFocus={handlerFocusEmail}
              label="Email*"
              placeholder="Email"
            />

            <InputField
              name="password"
              id="login-password"
              label="Password*"
              placeholder="Password"
            />
            <button
              className={styles.button}
              disabled={isLoading}
              type="submit"
            >
              {!isLoading ? <span>Sign in</span> : <span>...wait</span>}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
