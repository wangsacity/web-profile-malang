"use client";

import Image from "next/image";
import { Building2, Home, Clock } from "lucide-react";

// ─── Page ───────────────────────────────────────────────────────────────────
export default function PortofolioPage() {
    return (
        <div className="bg-[#e6e6e6] min-h-screen pb-0">

            {/* ─── Hero Banner ─── */}
            <div className="relative w-full h-[340px] overflow-hidden">
                <Image
                    src="/hero-1.jpg"
                    alt="Portofolio Proyek"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay gelap */}
                <div className="absolute inset-0 bg-black/45" />
                {/* Teks hero */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow mb-3">
                        Portofolio Proyek Kami
                    </h1>
                    <p className="text-white/90 text-[14px] md:text-[15px] max-w-md leading-relaxed drop-shadow">
                        Berbagai proyek dan kawasan hunian yang telah kami<br />
                        kembangkan dengan komitmen dan ketepatan waktu
                    </p>
                </div>
            </div>

            {/* ─── Stats Bar ─── */}
            <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-10">
                <div className="bg-white rounded-xl shadow-md px-8 py-5 grid grid-cols-3 divide-x divide-slate-200">
                    <div className="flex flex-col items-center gap-1 px-4">
                        <div className="flex items-center gap-2">
                            <Building2 size={22} className="text-[#8da27e]" />
                            <span className="text-2xl font-bold text-slate-800">10+</span>
                        </div>
                        <span className="text-[12px] text-slate-500 text-center">Proyek Selesai</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 px-4">
                        <div className="flex items-center gap-2">
                            <Home size={22} className="text-[#8da27e]" />
                            <span className="text-2xl font-bold text-slate-800">500+</span>
                        </div>
                        <span className="text-[12px] text-slate-500 text-center">Unit Terbangun</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 px-4">
                        <div className="flex items-center gap-2">
                            <Clock size={22} className="text-[#8da27e]" />
                            <span className="text-2xl font-bold text-slate-800">8+</span>
                        </div>
                        <span className="text-[12px] text-slate-500 text-center">Tahun Berpengalaman</span>
                    </div>
                </div>
            </div>

            {/* ─── Track Record Section ─── */}
            <div className="max-w-5xl mx-auto px-6 py-14">
                <div className="bg-white rounded-2xl shadow-sm px-6 py-10">
                    {/* Gambar Track Record — simpan file di: public/portofolio/track-record.png */}
                    <div className="relative w-full">
                        <Image
                            src="/portofolio/track-record.png"
                            alt="Track Record Kami — Proyek Perumahan"
                            width={1200}
                            height={520}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}
