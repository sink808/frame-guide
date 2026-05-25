import React from 'react';

// Styles
import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);

export type ButtonTheme = 'primary' | 'secondary' | 'danger';
export type ButtonType = 'button' | 'submit' | 'reset';

interface Props {
  children: React.ReactNode;
  theme?: ButtonTheme;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  theme = 'primary',
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={cx('button', theme, {
        disabled,
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
