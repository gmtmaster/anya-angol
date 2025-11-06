export default function IntroSection() {
    return (
        <section className=" px-8 py-24 bg-white/80 border border-[#e8ddd7] rounded-[2rem] p-10 shadow-[0_6px_25px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 mx-6 mb-24">

            {/* Főcím */}
           <div className="rounded-3xl p-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10">
                Tartalmasabb élet angol nyelvtudással
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
                    Angolórák, ahol te vagy a középpontban
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
            <div className=" card max-w-4xl mx-auto mt-16">
                <h3 className="text-2xl font-serif font-semibold text-center mb-6">
                    Mit kínálok?
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-lg leading-relaxed list-none">
                    {[
                        "✔ Érthető magyarázatokat",
                        "✔ Sok beszédet és gyakorlást",
                        "✔ Valós élethelyzetekre épülő feladatokat",
                        "✔ Barátságos, támogató légkört",
                        "✔ Használható szókincset a mindennapokra",
                        "✔ Lépésről lépésre haladást",
                        "✔ Folyamatos visszajelzést és bátorítást",
                    ].map((item, i) => (
                        <li
                            key={i}
                            className="p-4 bg-white/60 rounded-2xl border border-accent/30 shadow-sm hover:shadow-md transition-all"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Óratípusok */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6 ">
                <p className="text-lg leading-relaxed">
                    Bármilyen szintről indulsz, segítek abban, hogy magabiztosabb
                    legyél és közben élvezd az angoltanulást. Tapasztalt
                    nyelvtanárként és vizsgáztatóként szívesen fogadok minden
                    korosztályt és tudásszintet.
                </p>

                <h4 className="text-xl font-serif font-semibold mt-10">
                    A következő órákat kínálom:
                </h4>
                <ul className="list-disc pl-6 text-lg space-y-2">
                    <li>
                        <strong>1 × 60 perces nyelvóra</strong> – ha csak kipróbálnád vagy
                        alkalomszerűen van szükséged segítségre.
                    </li>
                    <li>
                        <strong>8 alkalmas óracsomag</strong> (8 × 60 perc, kedvezménnyel)
                        – ha rendszeres fejlődést szeretnél.
                    </li>
                    <li>
                        <strong>20 órás minitanfolyam</strong> (20 × 60 perc, szintén
                        kedvezménnyel) – ha intenzíven szeretnél haladni és gyors
                        eredményt elérni.
                    </li>
                </ul>
            </div>

            {/* Egyéni vagy csoportos */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-center mb-4">
                    Egyéni vagy csoportos tanulásra is van lehetőség – te döntesz!
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
                    Külön figyelmet is igényelhetsz
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
