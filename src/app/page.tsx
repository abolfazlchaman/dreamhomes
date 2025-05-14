import { MdOutlineVilla } from 'react-icons/md';
import Header from '@/app/Components/Header/Header';
import Featured from '@/app/Components/Featured/Featured';
import Trusted from '@/app/Components/Trusted/Trusted';
import Latest from '@/app/Components/Latest/Latest';
import Banner from '@/app/Components/Banner/Banner';
import Footer from '@/app/Components/Footer/Footer';
import SearchBar from '@/app/Components/SearchBar/SearchBar';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <section id='properties'>
        <SearchBar />
      </section>
      <section id='properties'>
        <Featured />
      </section>
      <section id='agencies'>
        <Trusted />
      </section>
      <section id='about'>
        <Latest />
      </section>
      <Banner />
      <section id='footer'>
        <Footer />
      </section>
      <span className='flex flex-col items-center justify-center text-center font-bold min-h-screen'>
        <MdOutlineVilla size={'2.5rem'} />
        DreamGem LLC. {new Date().getFullYear()}
        <br />
        &copy;All rights reserved.
        <span className='font-light mt-12'>
          Developed and Maintained by the <br />
          <Link
            className='underline underline-offset-4'
            href='/'>
            DreamGem Technichal Team
          </Link>
          .
        </span>
      </span>
    </main>
  );
}
