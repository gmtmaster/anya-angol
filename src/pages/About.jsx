export default function About() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-28 flex justify-center items-center">
            <div className="bg-white/80 backdrop-blur-sm border border-[#e8ddd7] rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10 md:p-16 text-[#3a2a1e]">
                {/* Fejléc */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-center text-[#2c1d13]">
                    Rólam
                </h1>

                {/* Finom elválasztó vonal */}
                <div className="w-24 h-[3px] bg-[#F7A38D] mx-auto mb-10 rounded-full"></div>

                {/* Tartalom */}
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

                    {/* Inspiráló zárómondat */}
                    <div className="pt-4 text-center">
            <span className="italic text-[#F7A38D] font-semibold text-xl">
              „Minden lehetséges – csak el kell kezdeni!”<br />
              <span className="not-italic text-[#3a2a1e] font-medium">
                Just do it!
              </span>
            </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
