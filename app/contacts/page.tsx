"use client";

import { useState } from "react";
import { MapPin, Phone, Globe, Clock, Facebook } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        noHp: "",
        metodePembayaran: "",   // CASH | Cash Inhouse | KPR
        pesan: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2500);
    };

    return (
        <div className="bg-[#e6e6e6] min-h-screen pb-0">

            {/* ─── Header ─── */}
            <div className="max-w-5xl mx-auto px-6 pt-10 pb-4">
                <h1 className="text-[1.1rem] font-bold uppercase tracking-wide text-slate-800 mb-1">
                    Hubungi Kami
                </h1>
                <p className="text-[14px] text-slate-600">
                    Konsultasikan Kebutuhan Hunian Anda Bersama Kami. Temukan Rumah Impian Anda Sekarang Juga.
                </p>
            </div>

            {/* ─── Form Card ─── */}
            <div className="max-w-5xl mx-auto px-6 pb-10">
                <div className="bg-white rounded-xl shadow-sm px-8 py-7">
                    <p className="text-[14px] font-semibold text-slate-700 mb-6">
                        Isi Data Untuk Mendapatkan Informasi Perumahan
                    </p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

                        {/* Nama - kiri */}
                        <div>
                            <label htmlFor="nama" className="block text-[13px] text-slate-600 mb-1">
                                Nama<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                required
                                placeholder="Masukkan Nama Anda"
                                value={form.nama}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-[13px] text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#8da282]"
                            />
                        </div>

                        {/* Metode Pembayaran - kanan, dropdown */}
                        <div>
                            <label htmlFor="metodePembayaran" className="block text-[13px] text-slate-600 mb-1">
                                Metode Pembayaran yang Diinginkan
                            </label>
                            <select
                                id="metodePembayaran"
                                name="metodePembayaran"
                                value={form.metodePembayaran}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-[13px] text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-[#8da282] appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 12px center",
                                    paddingRight: "36px",
                                }}
                            >
                                <option value="" disabled>Pilih metode pembayaran</option>
                                <option value="CASH">CASH</option>
                                <option value="Cash Inhouse">Cash Inhouse</option>
                                <option value="KPR">KPR</option>
                            </select>
                        </div>

                        {/* Email - kiri */}
                        <div>
                            <label htmlFor="email" className="block text-[13px] text-slate-600 mb-1">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Masukkan Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-[13px] text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#8da282]"
                            />
                        </div>

                        {/* Pesan / Pertanyaan - kanan, row span 2 */}
                        <div className="md:row-span-2">
                            <label htmlFor="pesan" className="block text-[13px] text-slate-600 mb-1">
                                Pesan / Pertanyaan Tambahan
                            </label>
                            <textarea
                                id="pesan"
                                name="pesan"
                                rows={5}
                                placeholder="Tulis pertanyaan Anda di sini"
                                value={form.pesan}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-[13px] text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#8da282] resize-none"
                                style={{ height: "118px" }}
                            />
                        </div>

                        {/* No. HP - kiri */}
                        <div>
                            <label htmlFor="noHp" className="block text-[13px] text-slate-600 mb-1">
                                No. HP<span className="text-red-500">*</span>
                            </label>
                            <div className="flex border border-slate-300 rounded overflow-hidden focus-within:ring-1 focus-within:ring-[#8da282]">
                                <div className="flex items-center gap-1 px-3 bg-white border-r border-slate-300 shrink-0">
                                    <span className="inline-block w-5 h-3.5 rounded-[2px] overflow-hidden">
                                        <svg viewBox="0 0 20 14" width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="7" fill="#CE1126" />
                                            <rect y="7" width="20" height="7" fill="#FFFFFF" />
                                        </svg>
                                    </span>
                                    <span className="text-[13px] text-slate-600">+62</span>
                                </div>
                                <input
                                    type="tel"
                                    id="noHp"
                                    name="noHp"
                                    required
                                    placeholder="85123456789..."
                                    value={form.noHp}
                                    onChange={handleChange}
                                    className="flex-1 px-3 py-2 text-[13px] text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 flex justify-end pt-1 mt-2">
                            <button
                                type="submit"
                                disabled={submitted}
                                className="bg-[#8da282] hover:bg-[#6e8a64] text-white text-[13px] font-semibold px-8 py-2 rounded transition-colors disabled:opacity-70"
                            >
                                {submitted ? "Terkirim ✔" : "Kirim"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            {/* ─── Info + Photo Section ─── */}
            <div className="w-full" style={{ background: "#e6e6e6" }}>
                {/* SVG Wave organik — satu gelombang besar: kiri sedang → puncak kiri → lembah tengah-kanan → naik kanan */}
                <svg
                    viewBox="0 0 1440 100"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full block"
                    style={{ display: "block", marginBottom: "-2px" }}
                >
                    <path
                        d="M0,32 C150,32 260,6 370,12 C480,18 650,58 800,58 C950,58 1180,20 1440,28 L1440,100 L0,100 Z"
                        fill="#8da27e"
                    />
                </svg>
            </div>
            <div
                className="w-full py-10 px-6"
                style={{ background: "#8da27e" }}
            >
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10">

                    {/* Info */}
                    <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin size={20} className="mt-0.5 text-white shrink-0" />
                            <p className="text-[14px] text-white leading-relaxed">
                                Jl. Angkawijaya, Bunton, Sidorahayu,<br />
                                Kec. Wagir, Kota Malang,<br />
                                Jawa Timur 65158
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-white shrink-0" />
                            <a
                                href="https://wa.me/6282143694994"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] text-white hover:underline font-medium"
                            >
                                6282143694994
                            </a>
                        </div>
                        <div className="flex items-start gap-3">
                            <Clock size={18} className="text-white shrink-0 mt-0.5" />
                            <div className="text-[14px] text-white">
                                <div>Senin - Jumat : 08.00 - 17.00</div>
                                <div>Sabtu - Minggu : 10.30 - 15.30</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe size={18} className="text-white shrink-0" />
                            <a
                                href="https://www.BumiRedjoAbadi.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] text-white hover:underline"
                            >
                                www.BumiRedjoAbadi.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Facebook size={18} className="text-white shrink-0" />
                            <span className="text-[14px] text-white">Bumi Rejo Group</span>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-[380px]">
                            <Image
                                src="/about-us-1.png"
                                alt="Foto Perumahan"
                                width={380}
                                height={220}
                                className="object-cover w-full h-[220px]"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* ─── Google Maps ─── */}
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.923456789!2d112.59!3d-7.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTgnNDguMCJTIDExMsKwMzUnMjQuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="340"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Perumahan Bumi Redjo Abadi"
                />
            </div>

        </div>
    );
}
