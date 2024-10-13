import { useTranslation } from 'react-i18next'
import { ArrowLink } from './Icons'

export default function Button () {
  const { t } = useTranslation()

  return (
    <div className='relative group cursor-pointer font-normal'>
      <a
        className='inline-flex items-center gap-2 rounded-[100vh] border border-light px-4 md:px-2 p-2 text-nowrap transition-transform group-hover:-rotate-[2deg] origin-bottom-left bg-dark'
        href='https://cld.media/cloudcreateregister'
        target='_blank' rel='noreferrer'
      >
        <span className='px-4 hidden md:block font-bold bg-primary rounded-2xl'>
          {t('YES')}
        </span>
        <span>
          {t('WANT_TO_PARTICIPATE')}
        </span>
        <ArrowLink
          width={20}
          height={20}
        />
      </a>
      <div
        className='absolute rounded-[100vh] bg-grey/70 inset-0 -z-1'
      />
    </div>
  )
}
