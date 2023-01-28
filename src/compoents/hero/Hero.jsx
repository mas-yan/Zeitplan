
import { StackedCarousel } from 'react-stacked-carousel'
import Button from '../Button'
import CardReview from '../CardReview'

export default function Hero() {
    return (
        <div className="flex mt-20">
          <div className="w-1/2">
            <p className=" items-center justify-center font-patua font-normal text-6xl lg:w-10/12 2xl:w-9/12 leading-[60px] text-dark-500">Sebuah cara mudah mengatur jadwal kuliah kamu</p>
            <p className="font-sans lg:w-9/12 2xl:w-3/5 mt-4 leading-[34px] text-lg text-dark-500 text-opacity-70">Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>
            <div className="mt-10 mb-10 flex">
              <Button className={'px-[50px] py-[15px] rounded-md'}>Learn More</Button>
              <Button className={'px-[50px] py-[15px] rounded-md ml-[15px] bg-opacity-10 border-opacity-25'} textCol={'text-primary-500'}>Play Demo</Button>
            </div>
            <div className="relative">
                <StackedCarousel
                  autoRotate={false}
                  containerClassName={"container"}
                  cardClassName="pr-40 mt-10"
                  leftButton={<Button className={'absolute top-[215px] left-[350px] bg-opacity-[20%] px-2.5 rounded-full'} textCol={'text-primary-500/100 text-2xl'}>{"<"}</Button>}
                  rightButton={
                  <Button className={'absolute top-[215px] left-[400px] bg-opacity-[20%] px-2.5 rounded-full'} textCol={'text-primary-500/100 text-2xl'}>
                    {">"}
                  </Button>
                }
                >
                  <div key={'child1'}>
                    <CardReview comment='“Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”' image='cust.png' name='P-Star 7' scholl='Mahasiswa Boating School Ny. Puff' />
                  </div>
                  <div key={'child2'}>
                    <CardReview comment='“Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”' image='cust.png' name='P-Star 7' scholl='Mahasiswa Boating School Ny. Puff' />
                  </div>
                  <div key={'child3'}>
                    <CardReview comment='“Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”' image='cust.png' name='P-Star 7' scholl='Mahasiswa Boating School Ny. Puff' />
                  </div>
                </StackedCarousel>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src="group 11.png" alt="" />
          </div>
        </div>
    )
}