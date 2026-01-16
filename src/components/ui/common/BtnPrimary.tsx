import type { BtnPrimary as BtnPrimaryType } from "@/types/Btn";

interface BtnPrimaryProps extends BtnPrimaryType {
  children?: React.ReactNode;
  image?: string;
}

function BtnPrimary({ 
  label, 
  bgColor = "bg-navy", 
  textColor = "text-off-white",
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
        ${bgColor} hover:bg-off-white ${textColor} hover:text-navy ${className}
        flex items-center gap-2
      `}
    >
      {children || label}
    </button>
  );
}

export default BtnPrimary;