import Image from "next/image";

type ButtonProps = {
  text: string;
  icon: string;
  iconAlt: string;
  pdfUrl: string;
};

export default function Button({ 
  text, 
  icon, 
  iconAlt,
  pdfUrl
}: ButtonProps) {
  const openPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      console.error("No se proporcionó una URL válida para el PDF.");
    }
  };

  return (
    <button
      onClick={openPdf}
      className="group px-8 py-4 rounded-2xl bg-linear-to-r from-light-blue to-blue border-2 border-light-blue text-white text-base md:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-light-blue hover:border-dark-blue w-full sm:w-fit mx-auto"
      title="ssss"
    >
      <span className="transition-transform group-hover:-translate-x-1">
        {text}</span>
      {icon && (
        <Image
          src={icon}
          alt={iconAlt}
          width={24}
          height={24}
          className="w-6 h-6 transition-transform group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
