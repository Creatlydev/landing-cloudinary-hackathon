import { useTranslation } from 'react-i18next'
import logo from '../../public/logo.svg'
import spiderTop from '../../public/spider-top.webp'
import spiderWeb from '../../public/spider-web.webp'
import spiderTopRight from '../../public/spider-top-right.webp'
import { ArrowLink, SendIcon } from './Icons'

export default function Header () {
  const { t } = useTranslation()

  return (
    <header className='relative'>
      <div className='flex justify-between items-center h-12 md:h-24 container mx-auto px-6'>
        <div>
          <img className='h-6 md:h-11' src={logo} alt='Logo de cloudinary' />
        </div>

        <div className='flex items-center gap-8'>
          <a href='#prizes' className='font-halloween md:text-xl hover:text-primary'>
            {t('PRIZES')}
          </a>

          <a
            href='https://cld.media/cloudcreatesubmit'
            className='font-normal hidden md:flex items-center gap-2 px-4 py-2 bg-grey/50 rounded-[100vh]'
            target='_blank' rel='noreferrer'
          >
            <SendIcon />
            {t('SEND_PROJECT')}
            <ArrowLink
              width={20}
              height={20}
            />
          </a>

        </div>
      </div>

      <img
        src={spiderTop}
        className='w-[300px] sm:w-[400px] md:w-[500px] absolute top-0 left-20 -z-1'
        alt='Tela de araña'
      />

      <img
        src={spiderTopRight}
        className='hidden md:block w-[400px] absolute top-0 right-0 -z-1'
        alt='Tela de araña'
      />

      <img
        src={spiderWeb}
        className='absolute -top-1/3 left-5 md:left-20 w-10 md:w-15 -z-1 animate-elastic'
      />
    </header>
  )
}
