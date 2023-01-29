import Button from '../Button'
import CarrdCarousel from './CardCarousel'

export default function Hero({addH}) {
    return (
        <div className={`flex relative flex-col-reverse lg:flex-row mt-12 lg:mt-20 ${addH}`}>
          <div className="lg:w-1/2 ">
            <p className=" items-center justify-center md:text-center lg:text-left font-patua font-normal text-4xl md:text-5xl md:w-12/12 lg:text-6xl lg:w-10/12 2xl:w-9/12 leading:[20px] md:leading-[60px] text-dark-500">Sebuah cara mudah mengatur jadwal kuliah kamu</p>
            <div className='font-sans md:w-12/12 2xl:w-3/5 md:text-center lg:text-left mt-4 leading-[24px] md:leading-[34px] text-[0.85rem] md:font-normal md:text-lg text-dark-500 text-opacity-70'>
              <p>Datang kuliah terlambat karena ketiduran itu tidak masalah;  </p>
              <p>datang kuliah karena lupa jadwal itu sangatlah tidak keren.</p>
              <p>Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>

            </div>
            <div className="mt-10 mb-8 flex md:justify-center lg:justify-start">
              <Button className={'px-[20px] lg:px-[50px] py-[10px] lg:py-[15px] rounded-md'}>Learn More</Button>
              <Button className={'px-[20px] lg:px-[50px] py-[10px] lg:py-[15px] rounded-md ml-[15px] bg-opacity-10 border-opacity-25'} textCol={'text-primary-500'}>Play Demo</Button>
            </div>
            <CarrdCarousel/>
            <div className="h-80 lg:hidden"></div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <img src="group 11.png" alt="" />
          </div>
        </div>
    )
}