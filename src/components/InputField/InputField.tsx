import classnames from 'classnames';
import { Field, FieldProps } from 'formik';

import styles from './InputField.module.css';

type InputFieldProps = {
  name: string;
  id: string;
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
};

function InputField({
  name,
  id,
  label,
  icon,
  type = 'text',
  placeholder,
  disabled = false,
  className = '',
  onFocus,
  onBlur,
}: InputFieldProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <div className={styles.inputWrapper}>
            <label htmlFor={name} className={styles.label}>
              {icon} <span className={styles.labelTeaxt}>{label}</span>
              {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
              ) : null}
            </label>
            <input
              {...field}
              {...(placeholder ? { placeholder } : {})}
              id={id}
              type={type}
              disabled={disabled}
              onFocus={onFocus}
              onBlur={onBlur}
              className={classnames(
                styles.input,
                className,
                meta.touched && meta.error ? styles.inputError : ''
              )}
            />
          </div>
        );
      }}
    </Field>
  );
}

export default InputField;
