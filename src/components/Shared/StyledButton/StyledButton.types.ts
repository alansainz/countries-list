import { ReactNode, MouseEventHandler } from 'react';

export default interface StyledButtonProps {
  countryName?: string;
  children?: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
