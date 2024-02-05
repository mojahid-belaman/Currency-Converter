import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className } = props;
  return (
    <button
      {...props}
      className={`bg-blue-500 hover:bg-blue-600 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
