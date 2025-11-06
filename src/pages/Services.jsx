import { BookOpen, Users } from "lucide-react"; // npm i lucide-react

export default function Services() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-28 text-[#3a2a1e]">
            {/* Fejléc */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-center text-[#2c1d13]">
                Szolgáltatások és óradíjak
            </h1>
            <div className="w-24 h-[3px] bg-[#F7A38D] mx-auto mb-14 rounded-full"></div>

            {/* Kártyák */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Egyéni */}
                <div className="bg-white/80 border border-[#e8ddd7] rounded-[2rem] p-10 shadow-[0_6px_25px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-6">
                        <div className="p-4 bg-[#F7A38D]/20 rounded-full">
                            <BookOpen size={40} className="text-[#F7A38D]" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-serif font-semibold text-center mb-6">
                        Egyéni nyelvóra / Vizsgafelkészítés
                    </h2>
                    <ul className="space-y-3 text-lg text-left list-disc list-inside">
                        <li>
                            Alapfok / középfok / korrepetálás / társalgás:{" "}
                            <strong>7.000 Ft</strong>
                        </li>
                        <li>
                            Felsőfok / emelt szintű érettségi: <strong>8.000 Ft</strong>
                        </li>
                        <li>
                            8 alkalmas óracsomag: <strong>50.400 – 58.400 Ft</strong>
                        </li>
                        <li>
                            20 órás minitanfolyam: <strong>122.000 – 142.000 Ft</strong>
                        </li>
                    </ul>
                </div>

                {/* Csoportos */}
                <div className="bg-white/80 border border-[#e8ddd7] rounded-[2rem] p-10 shadow-[0_6px_25px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-6">
                        <div className="p-4 bg-[#F7A38D]/20 rounded-full">
                            <Users size={40} className="text-[#F7A38D]" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-serif font-semibold text-center mb-6">
                        Csoportos nyelvóra / Vizsgafelkészítés
                    </h2>
                    <ul className="space-y-3 text-lg text-left list-disc list-inside">
                        <li>
                            2 fős csoport: <strong>5.200 – 6.000 Ft/fő</strong>
                        </li>
                        <li>
                            3 fős csoport: <strong>4.550 – 5.250 Ft/fő</strong>
                        </li>
                        <li>8 alkalmas óracsomag kedvezménnyel</li>
                        <li>20 órás minitanfolyam elérhető</li>
                    </ul>
                </div>
            </div>

            {/* Banki info + CTA */}
            <div className="text-center mt-20 bg-white/80 border border-[#e8ddd7] rounded-[2rem] p-10 shadow-[0_6px_25px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                    <strong>Erste Bank</strong> – 11600006-00000000-98211485
                    <br />
                    <span className="text-sm text-neutral-500 block mt-1">
            Az utalás beérkezése után e-mailben küldöm a számlát, és a Google
            Meet linket.
                  </span>
                </p>

                <a
                    href="mailto:angolnyelvgyak.online@gmail.com"
                    className="mt-8 inline-block bg-[#F7A38D] text-white px-10 py-4 rounded-full shadow-md uppercase font-bold text-lg hover:opacity-90 transition-all"
                >
                    Időpontfoglalás
                </a>
            </div>
        </main>
    );
}
