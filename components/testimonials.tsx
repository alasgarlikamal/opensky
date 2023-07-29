import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'

export default function Testimonials() {
  return (
    <section   id={"team"} className={"scroll-smooth"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Komandamızın əvəzedilməz üzvləri</h2>
            <p className="text-xl text-gray-400">Perihelion</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 items-center" data-aos="fade-up">
                  <Image className="rounded-full" src={TestimonialImage01} width={200} height={200} alt="Testimonial 01" />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Ilkin Kərimli</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">AI & Signal Processing Engineer at eiLink | CEO of Edument</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 justify-center items-center" data-aos="fade-up">
              <Image className="rounded-full" src={TestimonialImage01} width={200} height={200} alt="Testimonial 01" />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Rəsul Ələkbərli</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">AI Engineer</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 justify-center items-center" data-aos="fade-up">
              <Image className="rounded-full" src={TestimonialImage01} width={200} height={200} alt="Testimonial 01" />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Kamal Ələsgərli</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">AI Engineer</a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 justify-center items-center" data-aos="fade-up">
              <Image className="rounded-full" src={TestimonialImage01} width={200} height={200} alt="Testimonial 01" />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Zeynəb Məmmədova</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">AI Engineer</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
