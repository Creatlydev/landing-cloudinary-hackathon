import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'

export default function App () {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}
