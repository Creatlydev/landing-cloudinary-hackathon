import footerImage from '../../public/footer.png'

export default function Footer () {
  return (
    <footer className='mt-28'>
      <img
        className='w-full'
        src={footerImage}
        alt=''
      />
    </footer>
  )
}
