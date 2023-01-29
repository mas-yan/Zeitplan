import { StackedCarousel } from 'react-stacked-carousel'
import Button from '../Button'
import CardReview from '../CardReview'

export default function CarrdCarousel() {
    return (
        <div className="relative md:ml-0">
                <StackedCarousel
                  autoRotate={false}
                  containerClassName={"container mx-8 md:ml-[8rem] lg:mx-0"}
                  cardClassName="mt-10"
                  leftButton={<Button className={'absolute top-[63px] md:top-[215px] md:top-[205px] left-[210px] md:left-[470px] lg:left-[350px] bg-opacity-[20%] px-2.5 rounded-full'} textCol={'text-primary-500/100 text-2xl'}>{"<"}</Button>}
                  rightButton={
                  <Button className={'absolute top-[63px] md:top-[215px] left-[260px] md:top-[205px] md:left-[520px] lg:left-[400px] bg-opacity-[20%] px-2.5 rounded-full'} textCol={'text-primary-500/100 text-2xl'}>
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
    )
}