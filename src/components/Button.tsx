interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-secondary" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
