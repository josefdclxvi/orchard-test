import type { ReactElement, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps): ReactElement => {
  return <div className="card">{children}</div>;
};

export default Card;
