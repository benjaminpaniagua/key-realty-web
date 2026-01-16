import type { BtnSecondary as BtnSecondaryType } from "@/types/Btn";

interface BtnSecondaryProps extends BtnSecondaryType {
  children?: React.ReactNode;
}

function BtnSecondary({ 
  label, 
  bgColor = "white", 
  textColor = "navy",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  children
}: BtnSecondaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-xl font-medium text-base md:text-sm transition-all duration-300
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        bg-${bgColor} hover:bg-navy text-${textColor} hover:text-white ${className}
      `}
    >
      {children || label}
    </button>
  );
}

export default BtnSecondary;