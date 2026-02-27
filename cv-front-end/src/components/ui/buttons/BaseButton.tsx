/* eslint-disable react/display-name */
'use client'; // This is a client component 👈🏽
import React, { useCallback } from 'react';
import Typography from '../typographies/Typography';

const ButtonVariant = ['black', 'white','outlineBlack'] as const;

// name example (in order) : xs, sm, base, lg, xl, 2xl, ...
const ButtonSize = ['base'] as const;

type ButtonProps = {
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  type?: 'button' | 'submit';
  direction?: 'left' | 'right';
  isWidthfull?: boolean;
  isLoading?: boolean;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<'button'>;

const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      isWidthfull,
      isLoading,
      icon,
      variant = 'black',
      size = 'base',
      type = 'button',
      direction = 'left',
      label,
      className,
      onClick,
      ...rest
    },
    ref
  ) => {
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick && !isLoading && !disabled) {
          onClick(event);
        }
      },
      [onClick, isLoading, disabled]
    );
    return (
      <button
        ref={ref}
        type={isLoading ? 'button' : type}
        disabled={isLoading ? true : disabled}
        className={`
          focus:outline-none transition duration-300 ease-out font-[500]
          flex items-center rounded-full h-[48px]
          ${direction === 'right' && 'flex-row-reverse'}
          ${icon && 'gap-[10px]'}
          ${
            variant === 'black' &&
            'text-white border-[1px] border-grayscale-900 bg-grayscale-900 rounded-[50px]'
          }
          ${
            variant === 'outlineBlack' &&
            'text-grayscale-900 border-[1px] border-grayscale-900 rounded-[50px]'
          }
          ${
            variant === 'white' &&
            'text-default-textcolor border-[1px] border-white bg-white rounded-[50px]'
          }
          ${size === 'base' && 'text-[1.6rem] leading-[2rem] px-[2rem]'}
          ${isWidthfull && 'w-full text-center justify-center'}
          ${
            isLoading
              ? 'cursor-not-allowed'
              : disabled
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
          }
          ${className}
      `}
        onClick={handleClick}
        {...rest}
      >
        {isLoading ? (
          <div className={``}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[24px] h-[24px] mx-auto"
              fill="currentColor"
            >
              <g className="spinner">
                <path
                  className="s-1"
                  d="M12 1.224c0-.676.55-1.23 1.222-1.162A12 12 0 0123.73 14.527c-.142.66-.84 1.012-1.482.803-.643-.209-.987-.9-.862-1.563a9.551 9.551 0 00-8.166-11.24C12.55 2.44 12 1.9 12 1.223z"
                />
                <path
                  className="s-2"
                  d="M22.776 12c.676 0 1.23.55 1.162 1.222A12 12 0 019.473 23.73c-.66-.142-1.012-.84-.803-1.482.209-.643.9-.987 1.563-.862a9.551 9.551 0 0011.24-8.166C21.56 12.55 22.1 12 22.777 12z"
                />
                <path
                  className="s-3"
                  d="M12 22.776c0 .676-.55 1.23-1.222 1.162A12 12 0 01.27 9.473c.142-.66.84-1.012 1.482-.803.643.209.987.9.862 1.563a9.552 9.552 0 008.166 11.24c.67.087 1.221.627 1.221 1.303z"
                />
              </g>
            </svg>
          </div>
        ) : (
          <>
            {icon && icon}
            <Typography
              label={label}
              color={'white'}
              className=""
              weight={500}
            />
          </>
        )}
      </button>
    );
  }
);

BaseButton.displayName = 'BaseButton';

export default BaseButton;
