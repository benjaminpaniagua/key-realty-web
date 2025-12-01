import Link from "next/link";
import Image from "next/image";
import { SOCIALS } from "@/types/about";

export default function SocialMediaSection() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 p-6 lg:p-10">
      <div>
        <h3 className="text-2xl font-semibold text-white leading-tight">
          Check my social media!
        </h3>
      </div>

      <div className="flex items-center gap-10">
        {SOCIALS.map((social) => (
          <Link
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl"
          >
            <span
              className={`relative z-10 flex items-center justify-center w-[62px] h-[62px] rounded-full transition-all duration-300 ease-out transform-gpu group-hover:scale-105 group-hover:opacity-95 ${
                social.className ?? ""
              }`}
            >
              <Image src={social.src} alt={social.alt} width={62} height={62} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
