import classnames from 'classnames';
import { Field, FieldProps } from 'formik';

import styles from './InputField.module.css';

type InputFieldProps = {
  name: string;
  id: string;
  label?: string;
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
              <span>{label}</span>
            </label>
            <input
              {...field}
              {...(placeholder ? { placeholder } : {})}
              id={id}
              type={type}
              disabled={disabled}
              autoComplete="off"
              onFocus={onFocus}
              onBlur={onBlur}
              className={classnames(
                styles.input,
                className,
                meta.touched && meta.error ? styles.inputError : ''
              )}
            />
            {meta.touched && meta.error ? (
              <div className={styles.error}>{meta.error}</div>
            ) : null}
          </div>
        );
      }}
    </Field>
  );
}

export default InputField;
