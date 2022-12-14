import { useState } from 'react';
import { Form, Formik, FormikErrors } from 'formik';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import IconUser from '../../icons/IconUser';
import IconLock from '../../icons/IconLock';
import IconMail from '../../icons/IconMail';
import log from '../../services/Loger';

import { EMAIL_REGEX_PATTERN } from '../../app/app.const';

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
      log.error(error);
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
      errors.password = 'Passwords not the same';
      errors.confirmPassword = 'Passwords not the same';
    }
    if (values.email && !EMAIL_REGEX_PATTERN.test(values.email)) {
      errors.email = 'Not correct format';
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
          <Form id="signUpForm">
            <InputField
              name="fullName"
              id="signUp-fullName"
              label="Full name"
              icon={<IconUser width="14px" height="14px" />}
            />
            <InputField
              name="email"
              type="email"
              id="signUp-email"
              label="Email"
              icon={<IconMail width="14px" height="14px" />}
            />
            <InputField
              name="password"
              type="password"
              id="signUp-password"
              label="Password"
              icon={<IconLock width="14px" height="14px" />}
            />
            <InputField
              name="confirmPassword"
              type="password"
              id="signUp-confirmPassword"
              label="Confirm password"
              icon={<IconLock width="14px" height="14px" />}
              className={styles.confirmPassword}
            />
            <Button type="submit" form="signUpForm" isLoading={isLoading}>
              Sign up
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
