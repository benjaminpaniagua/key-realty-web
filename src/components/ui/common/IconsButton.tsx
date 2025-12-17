import Image from "next/image";
import type { IconItems } from "@/types/icons";
import Link from "next/link";

type IconProps = {
  items: IconItems[];
  className?: string;
};

export default function IconsButton({ items, className }: IconProps) {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {items.map((item) => (
        <Link
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            w-12 h-12
            rounded-xl
            bg-white/5
            backdrop-blur-sm
            border border-white/10
            shadow-[0_0_10px_rgba(0,0,0,0.5)]
            hover:bg-white/10
            transition
          "
        >
          <Image
            src={item.icon}
            alt={item.alt}
            width={26}
            height={26}
            className="opacity-90"
          />
        </Link>
      ))}
    </div>
  );
}
