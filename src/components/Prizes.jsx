import { useTranslation } from 'react-i18next'

import { ArrorLeft, ArrowRight, CheckIcon } from './Icons'
import Button from './Button'

export default function Prizes () {
  const { t } = useTranslation()

  return (
    <section className='mt-32 py-12' id='prizes'>
      <div className='container mx-auto px-6 flex items-center justify-center flex-col gap-12 text-balance'>
        <h2 className='text-center flex gap-4 items-center text-2xl md:text-4xl lg:text-5xl text-secondary font-halloween leading-[1]'>
          <ArrorLeft className='w-6 lg:w-12 h-auto' />
          {t('WHAT_CAN_WIN').toUpperCase()}
          <ArrowRight className='w-6 lg:w-12 h-auto' />
        </h2>

        <div className='flex flex-col gap-20'>
          <div className='text-center flex flex-col gap-6 justify-center items-center'>
            <h3 className='text-primary font-halloween text-xl lg:text-3xl'>
              {t('TOP_TEN_WINNERS').toUpperCase() + ':'}
            </h3>
            <ul className='font-normal text-left columns-1 md:columns-2 gap-12'>
              <li className='flex items-center gap-4 py-1'>
                <CheckIcon
                  className='w-6 md:w-8'
                />
                <span>
                  {t('TSHIRT_CLOUDINARY')}
                </span>
              </li>

              <li className='flex items-center gap-4 py-1'>
                <CheckIcon
                  className='w-6 md:w-8'
                />
                <span>
                  {t('CLOUDINARY_STICKERS')}
                </span>
              </li>

              <li className='flex items-center gap-4 py-1'>
                <CheckIcon
                  className='w-6 md:w-8'
                />
                <span>
                  {t('STICKER_CLOUDINARY')}
                </span>
              </li>

              <li className='flex items-center gap-4 py-1'>
                <CheckIcon
                  className='w-6 md:w-8'
                />
                <span>
                  {t('CLOUDINARY_UNICORN')}
                </span>
              </li>
            </ul>
          </div>

          <div className='text-center flex flex-col gap-6 justify-center items-center'>
            <h3 className='text-primary font-halloween text-xl lg:text-3xl'>
              {t('TOP_THREE_WINNERS').toUpperCase() + ':'}
            </h3>

            <ul className='font-normal w-full flex flex-col justify-center items-center gap-4 lg:flex-row lg:gap-0'>
              <li className='w-full max-w-[348px] text-4xl px-6 py-12 rounded-3xl bg-grey/50 flex flex-col gap-6 lg:rounded-r-none'>
                <span className='font-halloween'>
                  {t('THIRD_PLACE')}
                </span>
                <span className='font-halloween text-5xl'>
                  $100
                </span>
                <span className='text-lg'>
                  {t('CLOUDINARY_PLUS_FREE')}
                </span>
              </li>

              <li className='w-full max-w-[348px] text-4xl px-6 py-20 rounded-3xl bg-secondary text-dark flex flex-col gap-6'>
                <span className='font-halloween'>
                  {t('FIRST_PLACE')}
                </span>
                <span className='font-halloween text-5xl'>
                  $500
                </span>
                <span className='text-lg'>
                  {t('CLOUDINARY_PLUS_FREE')}
                </span>
              </li>

              <li className='w-full max-w-[348px] text-4xl px-6 py-12 rounded-3xl bg-grey/50 flex flex-col gap-6 lg:rounded-l-none'>
                <span className='font-halloween'>
                  {t('SECOND_PLACE')}
                </span>
                <span className='font-halloween text-5xl'>
                  $250
                </span>
                <span className='text-lg'>
                  {t('CLOUDINARY_PLUS_FREE')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12'>
          <Button />
        </div>
      </div>
    </section>
  )
}
