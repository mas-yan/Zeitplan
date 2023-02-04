import CardDescription from "./CardDescription";
import Feature from "./Feature";

export default function Description() {
    return (
        <section className="pt-[100px]">
          <div className={`flex md:justify-between flex-col lg:flex-row`}>
            <div className="xl:w-1/3">
              <h1 className="md:text-center lg:text-left md:w-12/12 lg:w-10/12 2xl:w-9/12 text-dark-500 font-patua text-4xl md:text-[38px] leading:[20px] md:leading-[52px]">
                Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
              </h1>
              <p className="font-sans md:w-12/12 lg:w-5/6 2xl:w-[369px] md:text-center lg:text-left mt-3 leading-[24px] md:leading-[32px] text-[1rem] md:font-normal md:text-lg text-dark-500 text-opacity-60">
                Sejujurnya aplikasi kita ini seringkali bermasalah.
                Kadang-kadang gak bisa submit data, kadang dibukanya lambat,
                kadang tiba-tiba logout sendiri, untung gak berdua.
              </p>
            <div className="flex flex-row font-inter tracking-widest mt-16 justify-start md:justify-center lg:justify-start">
            <div>
                  <p className="leading-[15px] text-[0.85rem] md:font-normal md:text-xs text-dark-500 text-opacity-70">
                    TOTAL DON’TLOUD.
                  </p>
                  <p className="font-semibold text-2xl text-dark mt-2">1,501,234</p>
                </div>
                <div className="border-r-2 text-dark-500 text-opacity-5 mx-8"></div>
                <div>
                  <p className="leading-[15px] text-[0.85rem] md:font-normal md:text-xs text-dark-500 text-opacity-70">
                    TOTAL USERS
                  </p>
                  <p className="font-semibold text-2xl text-dark mt-2">1,318,829</p>
                </div>
            </div>
            </div>
            <div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 lg:mt-0 mt-16 container mx-4">
                    <CardDescription icon="db_icon.png" title="Aplikasi Gratis" description="Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US." />
                    <CardDescription icon="network.png" title="Kode OTP Error" description="Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa." />
                    <CardDescription icon="user.png" title="Data Tidak Aman" description="Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb." />
                    <CardDescription icon="code.png" title="Biasanya Error" description="Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~" />
                </div>
            </div>
          </div>
          <div className={`flex relative flex-col-reverse justify-center lg:flex-row mt-[100px]`}>
            <div className="flex items-center lg:mt-0 mt-12 lg:justify-start sm:justify-center lg:w-7/12">
                <img src="group 20.png" className="inline-block" alt="" />
            </div>
            <div className="lg:w-5/12">
                <h1 className="md:text-center lg:text-left text-dark-500 font-patua text-2xl md:text-[38px] leading:[20px] md:leading-[52px]">
                Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~
                </h1>
                <p className="font-sans md:text-center lg:text-left mt-3 leading-[24px] md:leading-[32px] text-[0.85rem] md:font-normal md:text-lg text-dark-500 text-opacity-70">
                Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!
                </p>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 mt-10">
                    <Feature icon="cloud-off.png" title="Tidak Tersimpan Otomatis" description="Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh." />
                    <Feature icon="video.png" title="Si Rizal Gak Pernah Ngonten" description="Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten." />
                    <Feature icon="trash-2.png" title="Terhapus Otomatis" description="Data lo bakal kehapus otomatis tiap hari, biar hemat server kita." />
                    <Feature icon="bell.png" title="Nggak Tau Lagi Gw" description="Mikir teks buat konten susah bro, ini aja ngasal masih susah!" />
                </div>
            </div>
          </div>
        </section>
    )
}