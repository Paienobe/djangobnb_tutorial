interface CustomButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ label, className, onClick }: CustomButtonProps) => {
  return (
    <div
      className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer text-center ${className}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default CustomButton;
