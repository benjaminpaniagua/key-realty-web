import IconsButton from '@/components/ui/common/IconsButton'
import { DEFAULT_ICON_ITEMS } from '@/types/icons'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();
  const copyright = t("copyright", { year });

  return (
    <div className='flex justify-between items-center text-sm font-inter px-8 py-8'>
        <p className='text-white/70'>{copyright}</p>
         <IconsButton items={DEFAULT_ICON_ITEMS} />
    </div>
  )
}
