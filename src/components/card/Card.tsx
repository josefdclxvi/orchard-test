import type { ReactElement, ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = (props: CardProps): ReactElement => {
  const { children, className } = props;

  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
