"use client";
import * as React from 'react';
import { useCallback } from 'react';

const IconButtonVariant = [
  'light', 'white', 'powder-pink'
] as const;

type IconButtonProps = {
  variant?: (typeof IconButtonVariant)[number];
  icon: React.ReactNode;
  alt: string;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'light',
      icon,
      alt,
      onClick,
      ...rest
    },
    ref
  ) => {

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
          if (onClick) {
            onClick(event);
          }
        },
        [onClick]
      );

    return (
        <button
            ref={ref}
            type='button'
            className={` 
                relative inline-flex items-center justify-center border rounded-[40px] focus:outline-none px-[2rem] py-[1rem]  transition-all
                ${variant === 'light' && 'bg-transparent text-black border-grayscale-300 sm:hover:bg-grayscale-100'}
                ${variant === 'white' && 'bg-white text-black border-grayscale-300 sm:hover:bg-grayscale-100'}
                ${variant === 'powder-pink' && 'bg-transparent text-powder-pink-500 border border-powder-pink-100'}
                ${className}
            `}
            onClick={handleClick}
            {...rest}
        >
            {icon}
        </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;