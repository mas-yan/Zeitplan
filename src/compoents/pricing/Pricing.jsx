import { useEffect, useState } from "react";
import CardPricing from "./CardPricing";

export default function Pricing() {
  const [feature1, setFeature1] = useState([]);
  const data1 = [
    {
      data: "Jadwal Tak Terbatas",
    },
    {
      data: "Fitur Notifikasi (Kadang Telat)",
    },
    {
      data: "Mode Gelap",
    },
    {
      data: "Bisa Topup Pulsa",
    },
    {
      data: "Bisa Beli Token Listrik",
    },
    {
      data: "Data Lo Dijual",
    },
  ];
  const [feature2, setFeature2] = useState([]);
  const data2 = [
    {
      data: "Semua Fitur Sebelumnya",
    },
    {
      data: "Diingetin Makan",
    },
    {
      data: "Sleepcall Sampe Bobo",
    },
    {
      data: "Ditemenin Jalan Tiap Minggu",
    },
    {
      data: "Ditemenin Nonton Eksekswan",
    },
    {
      data: "Terhindar Razia Rambut",
    },
    {
      data: "Dapet Izin Bikin Ormas",
    },
  ];
  const [feature3, setFeature3] = useState([]);
  const data3 = [
    {
      data: "Semua Fitur Sebelumnya",
    },
    {
      data: "Dibayarin Kuliah 4 Semester",
    },
    {
      data: "Dibayarin Cicilan Motor",
    },
    {
      data: "Dicicilin KPR 12 Tahun",
    },
    {
      data: "Magang di NASA Cab. Depok",
    },
    {
      data: "Dapet Skin Alok",
    },
    {
      data: "Nonton Film Gratis di Ganool",
    },
    {
      data: "Naik Haji Bila Mampu",
    },
  ];

  useEffect(() => {
    setFeature1(data1);
    setFeature2(data2);
    setFeature3(data3);
  }, []);
  return (
    <div id="harga" className="pt-8 md:pt-24 pb-20 bg-cream-300 mt-24">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center">
          <div className="justify-center flex">
            <h1 className="text-dark-500 lg:w-4/12 font-patua inline-block text-2xl lg:text-4xl md:text-[38px] leading:[20px] md:leading-[52px]">
              Main catur sambil bersepeda, beda harga beda fitur
            </h1>
          </div>
          <p className="font-sans mt-3 lg:w-5/12 leading-[24px] inline-block md:leading-[32px] text-[0.85rem] md:font-normal md:text-lg text-dark-500 text-opacity-60">
            Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa
            juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!
          </p>
        </div>
        <div>
          <div className="grid gap-6 mt-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:mt-24 place-content-center">
            <CardPricing
              feature={feature1}
              description="Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US."
              price="Free"
              title="RINDURATU"
            />
            <CardPricing
              feature={feature2}
              description="Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain."
              price="Rp 100K"
              title="SULTAN"
            />
            <CardPricing
              feature={feature3}
              description="Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok."
              price="Rp 10000K"
              title="RAFATAR"
            />
          </div>
          <div className="justify-center flex">
            <p className="mt-24 text-sm md:text-base text-center lg:w-[567px] font-bold font-sans text-dark-500 ">
              Harap Diingat: &nbsp;
              <span className="text-dark-500 text-opacity-60">
                Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa
                berubah secara mendadak seperti pengumuman PPKM darurat.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
