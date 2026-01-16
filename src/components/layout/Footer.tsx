
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();
  const copyright = t("copyright", { year });

  return (
    <div className='flex items-center text-sm font-inter px-8 py-8'>
        <p className='text-off-white/70'>{copyright}</p>
    </div>
  )
}
