import { useTranslation } from 'react-i18next'
import { ArrorLeft, ArrowLink, ArrowRight, CalendarIcon, CheckIcon, CloudCreateLogo, SendIcon } from './Icons'
import Button from './Button'

export default function Hero () {
  const { t } = useTranslation()
  return (
    <section className='relative'>
      <div className='container mx-auto px-6 min-h-[650px] py-12 flex flex-col gap-16 justify-center items-center font-normal'>
        <div className='flex flex-col gap-6'>
          <header className='flex flex-col justify-center items-center gap-4 lg:gap-6'>
            <div className='flex h-11 text-sm'>
              <div className='flex items-center justify-center w-12 border border-secondary rounded-xl border-r-0'>
                <CalendarIcon />
              </div>
              <div className='flex items-center justify-center px-4 border border-secondary border-l-0 rounded-xl'>
                {t('DAY_HACKATHON')}
              </div>
            </div>

            <span className='flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-halloween text-brand'>
              CLOUDINARY
              <CloudCreateLogo className='w-8 lg:w-16 h-auto' />
              CLOUDCREATE
            </span>

            <h1 className='text-center flex gap-4 items-center text-2xl md:text-4xl lg:text-6xl text-primary font-halloween leading-[1]'>
              <ArrorLeft className='w-6 lg:w-12 h-auto' />
              SPOOKY AI HACKATHON
              <ArrowRight className='w-6 lg:w-12 h-auto' />
            </h1>
          </header>

          <div className='flex flex-col gap-8'>
            <p className='max-w-[850px] text-center text-balance'>
              <span className='opacity-80 font-bold block mb-3 text-[16px] lg:text-lg'>
                {t('JOIN_US_FOR_THE_SPOOKY').toUpperCase()}
              </span>
              <span className='text-sm lg:text-[16px]'>
                {t('ABOUT_SPOOKE').toUpperCase()}
              </span>
            </p>

            {/* buttons */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
              <Button />

              <a
                href='https://cld.media/cloudcreatesubmit'
                className='font-normal inline-flex items-center gap-2 px-4 py-2 bg-grey/50 rounded-[100vh] text-nowrap'
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
        </div>

        <ul className='flex flex-wrap gap-8 gap-y-4 justify-start md:justify-center text-sm md:text-[16px] text-light/80'>
          <li className='flex items-center text-nowrap gap-2'>
            <CheckIcon
              className='w-6 md:w-8'
            />
            <span>
              {t('IMAGES_SPOOKE_EFFECTS')}
            </span>
          </li>

          <li className='flex items-center text-nowrap gap-2'>
            <CheckIcon
              className='w-6 md:w-8'
            />
            <span>
              {t('USING_IA_TO_GENERATE')}
            </span>
          </li>

          <li className='flex items-center text-nowrap gap-2'>
            <CheckIcon
              className='w-6 md:w-8'
            />
            <span>
              {t('TRANSFORMING_IMAGES')}
            </span>
          </li>

          <li className='flex items-center text-nowrap gap-2'>
            <CheckIcon
              className='w-6 md:w-8'
            />
            <span>
              {t('VIDEOS_WITH_OVERLAYS')}
            </span>
          </li>
        </ul>
      </div>

      {/* CRICLE BLUR */}
      <div
        className='absolute w-[450px] h-[450px] bg-grey top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 -z-4 blur-[200px] opacity-80'
      />
    </section>
  )
}
