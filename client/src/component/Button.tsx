import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  inverted?: boolean;
}>;

export const Button = ({ children, inverted }: Props) => {
  const color = inverted
    ? 'border border-red-600 hover:bg-red-600'
    : 'bg-red-600 hover:bg-red-700';

  return (
    <button
      type="submit"
      className={
        `inline-flex justify-center rounded-sm py-2 px-4 text-sm ` +
        color
      }
    >
      {children}
    </button>
  );
};
