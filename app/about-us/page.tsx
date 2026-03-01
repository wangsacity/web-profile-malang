"use client";

import { useState } from "react";
import { MapPin, Phone, Globe, Clock, Users } from "lucide-react";
import Image from "next/image";

export default function Page() {
    // Form State
    const [form, setForm] = useState({
        nama: "",
        kontak: "",
        kebutuhan: "",
        tipe: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submit
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
    };

    return (
        <div className="bg-[#e6e6e6] min-h-screen pb-10">
            {/* Header */}
            <div className="max-w-5xl mx-auto px-4 pt-8">
                <div className="text-[1.12rem] font-bold uppercase mb-1 text-slate-800 tracking-wide">
                    Hubungi Kami
                </div>
                <div className="text-[15px] opacity-80 mb-6">
                    Konsultasikan kebutuhan hunian Anda bersama kami. Tentukan rumah impian Anda sekarang juga.
                </div>
            </div>

            {/* Form Card */}
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white px-6 py-7 rounded-lg shadow mb-10">
                    <div className="font-semibold text-slate-800 mb-4 text-base">
                        Isi Data Untuk Mendapatkan Informasi Perumahan
                    </div>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="nama" className="block text-sm font-medium mb-2">Nama*</label>
                            <input
                                type="text"
                                name="nama"
                                id="nama"
                                required
                                value={form.nama}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 bg-[#f7faf7] focus:outline-none focus:ring-2 focus:ring-[#8da282]"
                            />
                        </div>
                        <div>
                            <label htmlFor="kontak" className="block text-sm font-medium mb-2">Nomor WhatsApp / HP*</label>
                            <input
                                type="text"
                                name="kontak"
                                id="kontak"
                                required
                                value={form.kontak}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 bg-[#f7faf7] focus:outline-none focus:ring-2 focus:ring-[#8da282]"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="kebutuhan" className="block text-sm font-medium mb-2">Kebutuhan / Pertanyaan</label>
                            <textarea
                                name="kebutuhan"
                                id="kebutuhan"
                                rows={2}
                                value={form.kebutuhan}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 bg-[#f7faf7] focus:outline-none focus:ring-2 focus:ring-[#8da282]"
                            />
                        </div>
                        <div>
                            <label htmlFor="tipe" className="block text-sm font-medium mb-2">Tipe Rumah (Opsional)</label>
                            <input
                                type="text"
                                name="tipe"
                                id="tipe"
                                value={form.tipe}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 bg-[#f7faf7] focus:outline-none focus:ring-2 focus:ring-[#8da282]"
                                placeholder="Contoh: 36/72"
                            />
                        </div>
                        <div className="sm:col-span-2 flex justify-end items-center">
                            <button
                                disabled={submitted}
                                type="submit"
                                className="bg-[#8da282] text-white px-8 py-2 rounded font-semibold hover:bg-[#758c64] transition-colors"
                            >
                                {submitted ? "Terkirim ✔" : "Kirim"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Company Info Section */}
            <div className="max-w-5xl mx-auto px-4 my-10">
                <div className="bg-[#9bb69e] rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-8">
                    {/* Left Info */}
                    <div className="flex-1 min-w-[230px]">
                        <div className="flex items-start gap-3 mb-2">
                            <MapPin className="mt-1 text-[#446950]" size={20} />
                            <div className="text-[15px] text-slate-900">
                                Jl. Angkawijaya, Bunton, Sidorahayu,<br />
                                Kec. Wagir, Kota Malang,<br />
                                Jawa Timur 65158
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <Phone size={18} className="text-[#446950]" />
                            <a
                                href="https://wa.me/6282143694994"
                                className="hover:underline text-[15px] text-slate-900 font-medium"
                                target="_blank"
                                rel="noopener"
                            >
                                6282143694994
                            </a>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <Clock size={18} className="text-[#446950]" />
                            <div className="text-[14px] text-slate-900">
                                <div>Senin - Jumat : 08.00 - 17.00</div>
                                <div>Sabtu - Minggu : 10.30 - 15.30</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <Globe size={18} className="text-[#446950]" />
                            <a
                                href="https://www.BumiRedjoAbadi.com"
                                className="hover:underline text-[15px] text-slate-900"
                                target="_blank"
                                rel="noopener"
                            >
                                www.BumiRedjoAbadi.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users size={18} className="text-[#446950]" />
                            <span className="text-[15px] text-slate-900">Bumi Rejo Group</span>
                        </div>
                    </div>
                    {/* Center Image */}
                    <div className="flex-1 flex justify-center items-center min-w-[250px] max-w-[380px]">
                        <div className="rounded-lg overflow-hidden shadow-lg border border-[#b2cdb4] bg-white">
                            <Image
                                src="/about-us-1.png"
                                alt="Perumahan"
                                width={360}
                                height={170}
                                className="object-cover w-full h-[170px]"
                                priority
                            />
                        </div>
                    </div>
                </div>
                {/* Google Maps Below */}
                <div className="mt-6 rounded-lg overflow-hidden border border-black/10 bg-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.923456789!2d112.59!3d-7.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTgnNDguMCJTIDExMsKwMzUnMjQuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}