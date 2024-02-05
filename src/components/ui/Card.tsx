import { FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-xl bg-gray-300/50 border border-white/50 p-5 rounded">
      {children}
    </div>
  );
};

export default Card;
