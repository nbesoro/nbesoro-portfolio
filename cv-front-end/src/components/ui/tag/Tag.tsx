"use client";
import * as React from 'react';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import Typography from '../typographies/Typography';

const TAG_SIZE = ['base', 'md', 'lg'] as const;
type TagSize = (typeof TAG_SIZE)[number];

type TagProps = {
  label?: string;
  size?: TagSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      label,
      className,
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          ${size === 'base' && 'px-[16px] py-[8px] text-[12px]'}
          ${size === 'md' && 'px-[18px] py-[8px] text-[14px]'}
          ${size === 'lg' && 'px-[22px] py-[8px] text-[16px]'}
          inline-flex items-center gap-2 bg-dark-400/20 rounded-full
          ${className}
        `}
        {...rest}
      >
        {LeftIcon && (
          <div>
            <LeftIcon size="1em" className={`${leftIconClassName}`} />
          </div>
        )}
        <Typography label={label} />
        {RightIcon && (
          <div>
            <RightIcon size="1em" className={`${rightIconClassName}`} />
          </div>
        )}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
