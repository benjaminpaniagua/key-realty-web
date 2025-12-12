"use client";

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
  const openPdf = async () => {
    if (!pdfUrl) {
      console.error("No se proporcionó una URL válida para el PDF.");
      return;
    }

    window.open(pdfUrl, "_blank", "noopener,noreferrer");

    const fileName = pdfUrl.split("/").pop() || "documento.pdf";
    const triggerDownload = (url: string) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.rel = "noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error("No se pudo descargar el PDF.");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      triggerDownload(blobUrl);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
      triggerDownload(pdfUrl);
    }
  };

  return (
    <button
      onClick={openPdf}
      className="
        group relative overflow-hidden cursor-pointer
        px-8 py-4 rounded-2xl text-white text-base md:text-lg font-semibold
        flex items-center justify-center gap-3 w-full sm:w-fit mx-auto]
        hover:shadow-[0_40px_100px_rgba(203,172,249,0.28)]
        border-2 border-purple/25 bg-dark-blue hover:bg-dark-blue/80
        transition-all duration-300
      "
    >
      <span className="transition-transform">
        {text}</span>
      {icon && (
        <Image
          src={icon}
          alt={iconAlt}
          width={24}
          height={24}
          className="w-6 h-6 transition-transform"
        />
      )}
    </button>
  );
}
