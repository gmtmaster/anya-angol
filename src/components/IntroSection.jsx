import { Check } from "lucide-react";
import React from "react";

const features = [
    "Érthető magyarázatokat",
    "Sok beszédet és gyakorlást",
    "Valós élethelyzetekre épülő feladatokat",
    "Barátságos, támogató légkört",
    "Használható szókincset a mindennapokra",
    "Lépésről lépésre haladást",
    "Folyamatos visszajelzést és bátorítást",
];

const lessons = [
    {
        title: "1 × 60 perces nyelvóra",
        text: "ha csak kipróbálnád vagy alkalomszerűen van szükséged segítségre.",
    },
    {
        title: "8 alkalmas óracsomag (8 × 60 perc, kedvezménnyel)",
        text: "ha rendszeres fejlődést szeretnél.",
    },
    {
        title: "20 órás minitanfolyam (20 × 60 perc, szintén kedvezménnyel)",
        text: "ha intenzíven szeretnél haladni és gyors eredményt elérni.",
    },
];


export default function IntroSection() {
    return (
        <section className=" max-w-6xl mx-auto px-8 py-24 bg-white/80 border-t-2 border-r-1 border-l-1 border-white rounded-[2rem] p-10 shadow-[0_6px_25px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all hover:shadow-lg  mx-6 mb-24">

            {/* Főcím */}
           <div className="max-w-4xl mx-auto rounded-3xl p-8 bg-white/80 shadow-lg border-t-2 border-r-1 border-l-1 border-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
                <span className="bg-clip-text text-transparent bg-[#E67E55]">Tartalmasabb</span> élet <span className="bg-clip-text text-transparent bg-[#E67E55]">angol</span> nyelvtudással
            </h2>

            {/* Bevezető */}
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
                <p>
                    Az angoltudás igazán izgalmassá és tartalmasabbá teszi az életed.
                    Akár utazni szeretnél, akár tanulni vagy vizsgázni, esetleg
                    egyszerűen csak jobban szeretnél boldogulni a mindennapokban vagy a
                    munkahelyeden – a magabiztos angol nyelvhasználat hatalmas előnyt
                    jelent.
                </p>

                <p>
                    A jó hangulatú, rendszeres nyelvgyakorlás segít abban, hogy
                    könnyedén, felszabadultan használhasd az angolt szórakozáshoz,
                    kikapcsolódáshoz és a céljaid eléréséhez is.
                </p>
            </div>
           </div>
            {/* Alrész: Angolórák */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6 ">
                <h3 className="text-2xl font-serif font-semibold text-center mb-4">
                    Angolórák, ahol <span className="bg-clip-text text-transparent bg-[#E67E55]">TE</span> vagy a <span className="bg-clip-text text-transparent bg-[#E67E55]">középpontban</span>
                </h3>
                <p className="text-lg leading-relaxed">
                    Élő online magánórákat tartok kamerán és mikrofonon keresztül.
                    Minden alkalommal személyesen figyelek rád, és úgy haladunk, ahogy
                    neked a legmegfelelőbb. A saját tempódban, kellő gyakorlással,
                    egyre magabiztosabb leszel az angol nyelv használatában.
                </p>
                <p className="text-lg leading-relaxed">
                    A tanultakhoz kapcsolódó figyelmed, bátorságod és nyelvhasználati
                    készséged folyamatosan fejlődik, így könnyebben eléred azt a célt,
                    amit kitűztél magad elé.
                </p>
            </div>

            {/* Mit kínálok */}
            <div className=" bg-white/80 rounded-4xl p-6 border-t-2 border-r-1 border-l-1 border-white shadow-xl max-w-4xl mx-auto mt-16">
                <h3 className="text-2xl font-serif font-semibold text-center mb-6">
                    Mit kínálok?
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-lg leading-relaxed list-none">
                    {features.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 p-4 bg-white/90 black rounded-xl border-t-2 border-white/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 mt-1  rounded-full p-1">
                                <Check size={20} strokeWidth={4} className="text-[#F7A38D]/90" />
                            </div>
                            <span className="font-medium">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex justify-center">
                    <a
                        href="https://app.minup.io/book/lekrinszkine-toth-eva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-block bg-[#F7A38D] border-t-2 border-white/30 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 uppercase font-bold text-lg"
                    >
                        Jelentkezek órára
                    </a>
                </div>
            </div>

            {/* Óratípusok */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6 ">
                <p className="text-lg leading-relaxed">
                    Bármilyen szintről indulsz, segítek abban, hogy magabiztosabb
                    legyél és közben élvezd az angoltanulást. Tapasztalt
                    nyelvtanárként és vizsgáztatóként szívesen fogadok minden
                    korosztályt és tudásszintet.
                </p>

                <div className="bg-white/80 rounded-4xl p-6 border-t-2 border-r-1 border-l-1 border-white shadow-xl max-w-4xl mx-auto mt-16">


                    <h4 className="text-xl font-serif font-semibold mb-6 text-center md:text-left">
                        A következő órákat kínálom:
                    </h4>

                    <ul className="space-y-4">
                        {lessons.map((lesson, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 bg-white/80 border border-[#F7A38D]/40 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex-shrink-0 mt-1 bg-[#F7A38D]/80 rounded-full p-1.5">
                                    <Check size={20} strokeWidth={2.5} className="text-white" />
                                </div>
                                <p className="text-lg leading-relaxed">
                                    <strong>{lesson.title}</strong> – {lesson.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Egyéni vagy csoportos */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-center mb-4">
                    <span className="bg-clip-text text-transparent bg-[#E67E55]">Egyéni</span> vagy <span className="bg-clip-text text-transparent bg-[#E67E55]">csoportos</span> tanulásra is van lehetőség – te döntesz!
                </h3>
                <p className="text-lg leading-relaxed">
                    Ha szívesebben tanulnál barátaiddal, kollégáiddal vagy
                    osztálytársaiddal, akkor kis (2–3 fős) csoportokat is létre tudunk
                    hozni. A magabiztosabb gyakorlás érdekében ezek a csoportok csak
                    ismerősökből állnak – idegeneket nem szervezünk össze.
                </p>
            </div>

            {/* Külön figyelem */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-center mb-4">
                    Külön <span className="bg-clip-text text-transparent bg-[#E67E55]">figyelmet</span> is igényelhetsz
                </h3>
                <p className="text-lg leading-relaxed">
                    Bátran jelentkezz akkor is, ha sajátos nevelési igényű diák vagy – a
                    te tempódban, teljes odafigyeléssel fogunk haladni.
                </p>
            </div>

            {/* Hobbiból */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-center mb-4">
                    Hobbiból, cél nélkül – vagy épp célzottan
                </h3>
                <p className="text-lg leading-relaxed">
                    Ha csak hobbiból tanulnál angolt, vagy épp szeretnéd felfrissíteni a
                    már meglévő, kissé megkopott tudásod, jó helyen jársz. Segítek
                    abban is, hogy könnyebben boldogulj külföldön, és valóban
                    magabiztosan használd az angolt.
                </p>
            </div>
        </section>
    );
}
