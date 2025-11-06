export default function About() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row justify-between items-center gap-16">
            {/* --- BAL OLDAL: SZÖVEG --- */}
            <div className="flex-1 bg-white/80 border-t-2 border-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10 md:p-14 text-[#3a2a1e]">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center md:text-left text-[#2c1d13]">
                    Rólam
                </h1>

                <div className="w-24 h-[3px] bg-[#F7A38D] mb-10 rounded-full mx-auto md:mx-0"></div>

                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Lekrinszkiné Tóth Éva vagyok, 32 év gimnáziumi tanítási, 34 év
                        vizsgafelkészítési és érettségiztetési, valamint 17 év BME és Origó
                        nyelvvizsgáztatási tapasztalattal rendelkezem.
                    </p>

                    <p>
                        2023 novembere óta egyéni vállalkozóként dolgozom magántanárként, és
                        célom, hogy átadjam mindazt a tudást és tapasztalatot, amit az évek
                        során megszereztem – ezzel segítve tanítványaimat a saját céljaik
                        elérésében.
                    </p>

                    <p>
                        Az órákat rugalmasan, online formában tartom, így nem kell utaznod –
                        csak egy laptop vagy mobiltelefon szükséges. Bárhonnan,
                        kényelmesen csatlakozhatsz az élő órákhoz.
                    </p>

                    <p>
                        Hiszek abban, hogy az angol nyelvet ma már mindenkinek érdemes
                        legalább alapszinten elsajátítania, hogy ne szigetelődjön el a
                        világtól. A pozitív, támogató hozzáállásommal abban segítelek, hogy
                        bátran és kitartóan haladj előre.
                    </p>

                    <div className="pt-4 text-center md:text-left">
                        <span className="italic text-[#F7A38D] font-semibold text-xl">
                            „Minden lehetséges – csak el kell kezdeni!”<br />
                            <span className="not-italic text-[#3a2a1e] font-medium">
                                Just do it!
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            {/* --- JOBB OLDAL: KÉP --- */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-full md:w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-t-white/60">
                    <img
                        src="/11.png"
                        alt="Lekrinszkiné Tóth Éva portré"
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
            </div>
        </main>
    );
}
