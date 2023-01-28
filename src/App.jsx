import Button from "./compoents/Button"
import Navbar from "./compoents/navbar/Navbar"

function App() {

  return (
    <div className="bg-gradient-to-t py-14 from-cream-500 to-cream-50">
      <div className="container mx-auto">
        <Navbar/>
        <div className="flex mt-20">
          <div className="w-1/2">
            <p className="flex items-center justify-center font-patua font-normal text-6xl lg:w-10/12 2xl:w-9/12 leading-[60px] text-dark-500">Sebuah cara mudah mengatur jadwal kuliah kamu</p>
            <p className="font-sans lg:w-9/12 2xl:w-3/5 mt-4 leading-[34px] text-lg text-dark-500 text-opacity-60">Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>
            <div className="mt-10 flex">
              <Button className={'px-[50px] py-[15px]'}>Learn More</Button>
              <Button className={'px-[50px] py-[15px] ml-[15px] bg-opacity-10 border-opacity-25'} textCol={'text-primary-500'}>Play Demo</Button>
            </div>
          </div>
          <div className="w-1/2">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
