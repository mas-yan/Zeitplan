export default function Footer() {
  return (
    <div className="container mx-auto px-4 md:px-0 pt-8 md:pt-24 pb-20">
      <div className="text-center">
        <div className="justify-center flex">
          <h1 className="text-dark-500 font-patua inline-block text-2xl lg:text-4xl md:text-[38px] leading:[20px] md:leading-[52px]">
            Download Aplikasi Keren Ini Sekarang!
          </h1>
        </div>
        <p className="font-sans mt-3 lg:w-[761px] leading-[24px] inline-block md:leading-[32px] text-[0.85rem] md:font-normal md:text-lg text-dark-500 text-opacity-60">
          Please download lah aplikasi ini, udah susah-susah buat, mana pas
          bikin sampe begadang, terus juga ditambah weekend. Jadi, please
          download lah ya.
        </p>
      </div>
      <div className="flex items-center justify-center mt-11">
        <a
          href="#"
          className="bg-black rounded-md py-1 px-2 text-white mr-4 inline-block"
        >
          <img src="image 12.png" alt="app store" className="inline-block" />
        </a>
        <a
          href="#"
          className="bg-black rounded-md py-1 px-2 text-white inline-block"
        >
          <img src="image 13.png" alt="app store" className="inline-block" />
        </a>
      </div>

      <hr className="mt-[187px]" />
      <div className="my-24 flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-auto lg:w-4/12">
          <img src="image 3.png" alt="logo" />
          <p className="font-patua text-lg leading-[21.94px] mt-5">Zeitplan</p>
          <p className="font-sans mt-5 leading-[26px] inline-block text-base text-dark-500 text-opacity-60">
            Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah,
            jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal
            lainnya. Walaupun banyak error, setidaknya kami sudah berusaha
            semaksimal mungkin.
          </p>
          <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-500 text-opacity-60">
            COPYRIGHT (C) 2023. DESIGN BY NAUVAL & SLICING BY RIYAN
          </p>
        </div>
        <div className="flex lg:w-8/12 flex-auto justify-between">
          <div className="flex-1 lg:w-32">
            <p className="font-patua text-lg leading-[21.94px] mt-5">Sitemap</p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Beranda
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Fitur-fitur
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Harga
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Testimoni
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Download
            </p>
          </div>
          <div className="flex-1 lg:w-32">
            <p className="font-patua text-lg leading-[21.94px] mt-5">Partner</p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Sefan.ru
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Ganool
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Waptrick
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Stafaband
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              MyWapBlog
            </p>
            <p className="font-sans font-semibold mt-5 leading-[17.6px] text-sm text-dark-900 text-opacity-60">
              Friv
            </p>
          </div>
          <div className="flex-1 lg:w-32">
            <p className="font-patua text-lg leading-[21.94px] mt-5">
              Tetep Terhubung
            </p>
            <p className="font-sans mt-5 leading-[26px] inline-block text-base text-dark-500 text-opacity-60">
              Lihat kami pansos di sosial media berikut:
            </p>
            <div className="flex justify-between md:justify-start mt-5">
              <a href="#">
                <img
                  src="frame 29.png"
                  className="mr-1 md:mr-2.5 md:w-auto w-9"
                  alt="ig"
                />
              </a>
              <a href="#">
                <img
                  src="frame 30.png"
                  className="mr-1 md:mr-2.5 md:w-auto w-9"
                  alt="fb"
                />
              </a>
              <a href="#">
                <img
                  src="frame 31.png"
                  className="mr-1 md:mr-2.5 md:w-auto w-9"
                  alt="tw"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
