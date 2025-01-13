// interface ButtonProps {
//   children: string;
//   onClick: () => void;
// }

// const Button = ({ children, onClick }: ButtonProps) => {
//   return (
//     <div className="d-grid gap-2 col-6 mx-auto">
//       <button className="btn btn-secondary" onClick={onClick}>
//         {children}
//       </button>
//     </div>
//   );
// };

// export default Button;

import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Optional className for custom styling
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
