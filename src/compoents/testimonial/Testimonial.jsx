import CardReview from "../CardReview";

export default function Testimonial() {
  return (
    <>
      <div className="pt-8 md:pt-24 pb-20 bg-primary-500 bg-opacity-10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center">
            <div className="justify-center flex">
              <h1 className="text-dark-500 lg:w-4/12 font-patua inline-block text-2xl lg:text-4xl md:text-[38px] leading:[20px] md:leading-[52px]">
                Apa kata umat manusia tentang aplikasi keren ini?
              </h1>
            </div>
            <p className="font-sans mt-3 lg:w-[567px] leading-[24px] inline-block md:leading-[32px] text-[0.85rem] md:font-normal md:text-lg text-dark-500 text-opacity-60">
              Kami tidak memfilter semua review, males soalnya. Jadi semua yang
              ditampilkan di sini semuanya asli tanpa reksadana.
            </p>
          </div>
          <div className="grid gap-6 mt-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:mt-24 place-content-center">
            <CardReview
              clsComnt="py-5"
              class="w-fit"
              comment="“Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉”"
              image="cust.png"
              name="Sanusi Sulivan"
              scholl="Mahasiswa Boating School Ny. Puff"
            />
            <CardReview
              clsComnt="py-5"
              class="w-fit"
              comment="“Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.”"
              image="cust.png"
              name="Wahyu Hayuk"
              scholl="Mahasiswa Abadi"
            />
            <CardReview
              clsComnt="py-5"
              class="w-fit"
              comment="“Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!”"
              image="cust.png"
              name="Ibu Scarlet Darkening"
              scholl="Ibunya Wahyu Hayuk"
            />
            <CardReview
              clsComnt="py-5"
              class="w-fit"
              comment="“Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”"
              image="cust.png"
              name="Indah Cyank Dya Clmax"
              scholl="Works at Looking For True Love, Inc"
            />
            <CardReview
              clsComnt="py-5"
              class="w-fit"
              comment="“Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... 😀😀😀😀😀”"
              image="cust.png"
              name="Jumadi RT. 03"
              scholl="Ketua RT. 06"
            />
            <CardReview
              clsComnt="py-5"
              class="w-fit"
              comment="“aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.”"
              image="cust.png"
              name="Cucunya Megalodon"
              scholl="Pecinta Kucing Hungaria"
            />
          </div>
        </div>
      </div>
    </>
  );
}
