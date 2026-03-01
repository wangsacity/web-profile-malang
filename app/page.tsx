import IconComponent from "@/src/user-component/icon.component";

const heroData = [
  { ttl: "Profesional dan Terpercaya", dsc: "Menjalankan setiap kegiatan usaha dengan komitmen tinggi terhadap kualitas, ketepatan, dan kepercayaan mitra." },
  { ttl: "Pengalaman dan Kapabilitas", dsc: "Didukung oleh pengalaman kerja yang relevan serta kemampuan dalam menangani berbagai kebutuhan proyek secara terstruktur." },
  { ttl: "Komitmen Terhadap Kualitas", dsc: "Mengutamakan standar kerja yang konsisten untuk menghasilkan layanan dan hasil yang optimal." },
];

const serviceData = [
  {
    icon: "home",
    ttl: "Pengembangan Kawasan Perumahan",
    dsc: "Kawasan hunian yang direncanakan dengan tata ruang dan lingkungan yang tertata.",
  },
  {
    icon: "gauge",
    ttl: "Penjualan Unit Hunian",
    dsc: "Proses transaksi unit yang transparan dan mudah dijangkau untuk setiap pelanggan.",
  },
  {
    icon: "user-round-search",
    ttl: "Desain dan Kualitas Bangunan",
    dsc: "Standar konstruksi yang dijaga untuk kenyamanan dan ketahanan hunian.",
  },
  {
    icon: "factory",
    ttl: "Fasilitas dan Lingkungan",
    dsc: "Lingkungan hunian yang mendukung kenyamanan, keamanan, dan fasilitas penunjang.",
  },
  {
    icon: "circle-gauge",
    ttl: "Inovasi",
    dsc: "Perencanaan kawasan dengan mempertimbangkan perkembangan kebutuhan masa depan.",
  },
  {
    icon: "user-key",
    ttl: "Layanan Purna Jual",
    dsc: "Pelayanan purna jual yang membantu kebutuhan penghuni setelah serah terima unit.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#E6E6E6] p-0 sm:px-6 py-8">
      {/* HERO SECTION */}
      <section className="bg-white rounded-xl shadow max-w-3xl w-full mb-8 px-5 pt-8 pb-6 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-center mb-2">
          THE SPIRIT&nbsp;OF<br className="hidden sm:block" />SUPER SERVING
        </h1>
        <div className="w-full rounded-md overflow-hidden bg-[#8da282] my-4 flex flex-col items-center">
          <img
            src="/hero-1.jpg"
            alt="Tampak depan perumahan"
            className="w-full h-auto object-cover"
            style={{ maxHeight: 210 }}
          />
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#8da282] px-2 pt-3 pb-3">
            {heroData.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-[13px] text-slate-900">
                <div className="font-semibold text-center">{item.ttl}</div>
                <div className="opacity-80 text-center">{item.dsc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERUSAHAAN & IMAGE */}
      <section className="flex flex-col sm:flex-row items-stretch gap-6 w-full max-w-3xl mb-8">
        <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col justify-center">
          <h2 className="font-bold text-base mb-2 tracking-wide uppercase text-[#557145]">PT BUMI REDJO ABADI</h2>
          <p className="text-[15px] leading-relaxed text-slate-900">
            PT Bumi Redjo Abadi merupakan perusahaan yang bergerak di bidang pengembangan dan penjualan perumahan.
            Perusahaan berfokus pada penyediaan hunian yang layak, nyaman, dan bernilai investasi bagi masyarakat.<br /><br />
            Dengan perencanaan yang matang dan pengelolaan yang profesional, PT Bumi Redjo Abadi berkomitmen
            menghadirkan kawasan hunian yang memperhatikan kualitas bangunan, lingkungan, serta kebutuhan jangka panjang penghuninya.
          </p>
        </div>
        <div className="flex-shrink-0 max-w-xs w-full flex items-center">
          <img
            src="/hero-2.png"
            alt="Perumahan"
            className="rounded-xl w-full object-cover border border-[#e1e5db] shadow"
            style={{ maxHeight: 180 }}
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full max-w-3xl mb-8">
        <div className="mb-2 text-[#557145] font-semibold uppercase tracking-wide text-base">Our Services</div>
        <div className="text-[14.5px] text-slate-900 leading-relaxed mb-5">
          PT Bumi Redjo Abadi menghadirkan solusi hunian melalui perencanaan yang matang, pembangunan berkualitas,
          dan proses penjualan yang transparan untuk memenuhi kebutuhan tempat tinggal masyarakat.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {serviceData.map((data, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white rounded-lg p-4 border border-[#d2d8c8]/50 shadow-sm">
              <div className="mb-2 text-[#7d946d] flex items-center justify-center">
                <IconComponent name={data.icon} size={30} strokeWidth={1.6} />
              </div>
              <div className="font-semibold mb-1 text-[15px]">{data.ttl}</div>
              <div className="text-[13.5px] opacity-90">{data.dsc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LOKASI SECTION */}
      <section className="w-full max-w-3xl rounded-xl bg-[#8da282] px-5 py-5 flex flex-col gap-2 shadow">
        <div className="font-bold text-slate-900 text-[16px] mb-1">Kunjungi Lokasi Kami</div>
        <div className="opacity-95 text-[14px] mb-2 text-slate-900">
          PT Bumi Redjo Abadi beroperasi dari lokasi resmi yang mudah dijangkau di Kota Malang, sebagai pusat pelayanan dan kegiatan operasional perusahaan.
        </div>
        <div className="font-medium text-[14.2px] text-slate-900">
          Jl. Angkawijaya, Bunton, Sidorahayu,<br />
          Kec. Wagir, Kota Malang, Jawa Timur 65158
        </div>
      </section>
    </div>
  );
}
