import type { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonSize = 'sm' | 'md' | 'icon';
type ButtonVariant = 'primary' | 'outline' | 'circle';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  className,
  ...props
}) => {
  const base = `
    inline-flex
    items-center
    justify-center
    font-semibold
    rounded-lg
    transition-colors
    disabled:opacity-50
    disabled:pointer-events-none
    cursor-pointer
    outline-none
    active:scale-[0.98]
    transition duration-150 ease-in-out
  `;

  const sizes: Record<ButtonSize, string> = {
    sm:  `
      px-[16px] py-[9px]
      border
      text-[14px] leading-[100%] text-center
      font-bold font-sans
    `,
    md: `
      w-[min(80vw,500px)]
      pt-[14px] pb-[16px] px-[16px]
      text-[18px] leading-[100%] tracking-[0%]
      font-extrabold font-sans
      align-bottom
    `,
    icon: `
      w-6
      h-6
    `
  };

  const variants: Record<ButtonVariant, string> = {
    primary:  `
      bg-[linear-gradient(180deg,_#6DBF1D_0%,_#498013_100%)]
      text-white
      font-bold
      shadow-[0px_1px_1px_0px_#0003,_inset_0px_1px_0px_#ffffff80,_inset_0px_-1px_4px_#ffffff4d]
      hover:brightness-105
    `,
    outline: `
      text-white/60
      border border-white/20
      bg-transparent
      hover:text-white hover:border-white
    `,
    circle: `
      rounded-full
    `
  };

  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
