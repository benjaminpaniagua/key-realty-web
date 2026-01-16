import type { BtnPrimary as BtnPrimaryType } from "@/types/Btn";

interface BtnPrimaryProps extends BtnPrimaryType {
  children?: React.ReactNode;
}

function BtnPrimary({ 
  label, 
  bgColor = "navy", 
  textColor = "white",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  children
}: BtnPrimaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-xl font-medium text-base md:text-sm transition-all duration-300
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        bg-${bgColor} hover:bg-white text-${textColor} hover:text-navy ${className}
      `}
    >
      {children || label}
    </button>
  );
}

export default BtnPrimary;