import Image from 'next/image'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Main } from './components/Main'
import { LargCard } from './components/LargCard'
import Footer from './components/Footer'


export default function Home() {
  return (
      <>
        <Header/>
        <Banner/>
        <Main/>
        <LargCard/>
        <Footer/>
      </>
  )
}
