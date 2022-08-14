import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

type Props = {
  id?: string;
  form?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (
    event: React.SyntheticEvent,
    ...args: unknown[]
  ) => Promise<unknown> | void;
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  id = '',
  form = '',
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
  onClick,
  children,
  ...attrs
}: Props) {
  return (
    <button
      {...attrs}
      id={id}
      form={form}
      type={type}
      disabled={disabled || isLoading}
      // onClick={onClick}
      className={classNames(styles.button, className)}
    >
      {!isLoading ? children : <>...wait</>}
    </button>
  );
}
