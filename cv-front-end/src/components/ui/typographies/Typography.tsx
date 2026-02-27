"use client";
import React from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

// xs, sm, base, md, xl, 2xl, 3xl , ...
const TypographyVariant = [
  'xs',
  'sm',
  'base',
  'md',
  'lg',
  'xl',
  '2xl',
  '2xl',
  '3xl',
  'h1',
  'h2',
  'h3',
  'heading',
] as const;

const TypographyWeightVariant = [
  100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const;

const TypographyColor = [
  'default',
  'white',
  'dark-400',
] as const;

const TypographyFont = ['manrope'] as const;

type TypographyProps<T extends React.ElementType> = {
  as?: T | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
  label?: string;
  color?: (typeof TypographyColor)[number];
  weight?: (typeof TypographyWeightVariant)[number];
  variant?: (typeof TypographyVariant)[number];
  font?: (typeof TypographyFont)[number];
} & React.ComponentPropsWithoutRef<T>;

const Typography = React.forwardRef<HTMLElement, TypographyProps<React.ElementType>>(
  (
    {
      as,
      label,
      className,
      color = 'default',
      variant = 'base',
      weight = 400,
      font,
      ...rest
    },
    ref
  ) => {
    const Component = as || 'p';
    return (
      <Component
        ref={ref}
        className={`
          ${variant === 'xs' && 'md:text-[1.2rem] md:leading-[2.2rem]' /* 12px */}
          ${variant === 'sm' && 'md:text-[1.4rem] md:leading-[2.4rem]' /* 14px */}
          ${variant === 'base' && 'md:text-[1.6rem] text-[1.4rem] md:leading-[2.6rem] leading-[2.2rem]' /* 16px */}
          ${variant === 'md' && 'md:text-[1.8rem] text-[1.4rem] md:leading-[2.8rem] leading-[2.4rem]' /* 18px */}
          ${variant === 'lg' && 'text-[1.8rem] leading-[2.8rem] md:text-[2rem] md:leading-[3rem]' /* 20px */}
          ${variant === 'xl' && 'md:text-[2.2rem] text-[1.6rem] md:leading-[3.2rem] leading-[2.4rem]' /* 22px */}
          ${variant === '2xl' && 'md:text-[2.4rem] text-[2rem] md:leading-[3.4rem] leading-[3.4rem]' /* 24px */}
          ${variant === '3xl' && 'md:text-[3.8rem] text-[2.6rem] md:leading-[4.8rem] leading-[3.6rem]' /* 38px */}
          ${variant === 'h1' && 'md:text-[6rem] text-[3.2rem] md:leading-[6.6rem] leading-[4.2rem]' /* 60px */}
          ${variant === 'h2' && 'md:text-[5.5rem] sm:text-[3.2rem] text-[2.8rem] md:leading-[6.5rem] leading-[4.2rem]' /* 55px */}
          ${variant === 'h3' && 'md:text-[4.8rem] text-[2.8rem] md:leading-[5.8rem] leading-[3.8rem]' /* 48px */}

          ${variant === 'heading' && 'text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] leading-[10rem] sm:leading-[14rem] md:leading-[20rem] lg:leading-[22rem]' /* 48px */}

          ${color === 'default' && 'text-default-textcolor'}
          ${color === 'white' && 'text-white'}
          ${color === 'dark-400' && 'text-dark-400'}
          

          ${weight === 100 && 'font-[100]'}
          ${weight === 200 && 'font-[200]'}
          ${weight === 300 && 'font-[300]'}
          ${weight === 400 && 'font-[400]'}
          ${weight === 500 && 'font-[500]'}
          ${weight === 600 && 'font-[600]'}
          ${weight === 700 && 'font-[700]'}
          ${weight === 800 && 'font-[800]'}
          ${weight === 900 && 'font-[900]'}

          ${font === 'manrope' && manrope.className}

          ${className}
        `}
        {...rest}
      >
        {label}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';


export default Typography;
