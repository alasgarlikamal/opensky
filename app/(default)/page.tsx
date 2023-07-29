import Header from "@/components/ui/header";

export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import {useRef} from "react";

export default function Home() {

    return (
    <>
        <Header />
      <Hero />
      <Features />
      {/*<Zigzag />*/}
      <Testimonials />
      {/*<Newsletter />*/}
    </>
  )
}
