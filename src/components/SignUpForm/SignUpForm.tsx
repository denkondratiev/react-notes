import { useState } from 'react';
import { Form, Formik, FormikErrors } from 'formik';

import InputField from '../InputField/InputField';

import styles from './SignUpForm.module.css';

export type SignUpFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  handleSumbit: (values: SignUpFormValues) => Promise<void>;
};

const SignUpForm = ({ handleSumbit }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: SignUpFormValues) => {
    setIsLoading(true);
    try {
      await handleSumbit(values);
    } catch (error) {
      console.error('SignUpForm Error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const validate = (values: SignUpFormValues) => {
    const errors: FormikErrors<SignUpFormValues & { notSame: string }> = {};
    if (!values.fullName) {
      errors.fullName = 'Required field';
    }
    if (!values.email) {
      errors.email = 'Required field';
    }
    if (!values.password) {
      errors.password = 'Required field';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required field';
    }

    if (
      values.password &&
      values.confirmPassword &&
      values.password !== values.confirmPassword
    ) {
      errors.notSame = 'Passwords not the same';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validate={validate}
      onSubmit={onSubmit}
      setFieldValue
      isSubmitting
    >
      {() => {
        return (
          <Form>
            <InputField
              name="fullName"
              id="signUp-fullName"
              label="Full name*"
              placeholder="Full name*"
            />
            <InputField
              name="email"
              id="signUp-email"
              label="Email*"
              placeholder="Email"
            />
            <InputField
              name="password"
              id="signUp-password"
              label="Password*"
              placeholder="Password"
            />
            <InputField
              name="confirmPassword"
              id="signUp-confirmPassword"
              label="Confirm password*"
              placeholder="Password"
            />
            <button
              className={styles.button}
              disabled={isLoading}
              type="submit"
            >
              {!isLoading ? <span>Sign up</span> : <span>...wait</span>}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
