import { useTranslation } from 'react-i18next'

export default function App () {
  const { t } = useTranslation()
  return (
    <h1 className='text-large font-bold underline text-orange-600'>
      {t('DAY_HACKATHON')}
    </h1>
  )
}
