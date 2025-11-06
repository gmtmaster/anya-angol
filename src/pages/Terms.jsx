export default function Terms() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-28 text-[#3a2a1e]">
            <div className="bg-white/85 border-t-2 border-[#F7A38D]/60 backdrop-blur-sm rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 md:p-14">

                {/* Fejléc */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center text-[#2c1d13]">
                    Általános Szerződési Feltételek
                </h1>
                <p className="text-center text-sm uppercase tracking-wide text-[#F7A38D] mb-8">
                    (a továbbiakban: „ÁSZF”)
                </p>
                <div className="w-24 h-[3px] bg-[#F7A38D] mx-auto mb-10 rounded-full"></div>

                {/* Tartalom */}
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Jelen ÁSZF Lekrinszkiné Tóth Éva egyéni vállalkozó (a továbbiakban: „Magántanár”)
                        szolgáltatásaira terjed ki, amelyeket a saját maga által üzemeltetett
                        <strong> www.angolnyelvgyakorlasonline.hu</strong> weboldalon ismertet.
                    </p>
                    <p>
                        Jelen ÁSZF szabályozza a Magántanár és a megbízó (a továbbiakban: „Tanítvány”)
                        jogait és kötelezettségeit. Az ÁSZF hatálybalépésének időpontja:
                        <strong> 2023. november 1.</strong>
                    </p>
                    <p>
                        A Magántanár vállalja, hogy a Tanítvány tudásszintjének és igényeinek felmérése
                        alapján angol nyelvből általános (nem üzleti) nyelvoktatást és nyelvi képzést nyújt.
                    </p>

                    {/* Kiemelt szakaszok */}
                    <section className="bg-[#FFF6ED] border border-[#F7A38D]/30 rounded-2xl p-6 space-y-3">
                        <h3 className="text-2xl font-serif font-semibold text-[#F7A38D] mb-3">
                            Az oktatás alapjai
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Az indulási szint az első óra után kerül meghatározásra.</li>
                            <li>
                                A képzés célja: vizsgafelkészítés (érettségi, nyelvvizsga),
                                korrepetálás, magabiztos beszédkészség fejlesztése,
                                valamint egyéni célok elérése (pl. állásinterjú, prezentáció).
                            </li>
                            <li>Az oktatás formája: online, Google Meet vagy Zoom felületen.</li>
                            <li>Időpont: egyénileg egyeztetett foglalás alapján.</li>
                        </ul>
                    </section>

                    <section className="bg-white/80 border border-[#F7A38D]/25 rounded-2xl p-6 space-y-3">
                        <h3 className="text-2xl font-serif font-semibold text-[#F7A38D] mb-3">
                            Díjazás és fizetés
                        </h3>
                        <p>
                            A felek megállapodnak, hogy a nyelvórák díja a honlapon közzétett
                            „Választható szolgáltatások” menüpontban meghatározottak szerint érvényes.
                            A képzési díjat a Tanítvány banki átutalással köteles megfizetni, a
                            Magántanár által megadott számlaszámra. Igény esetén készpénzes fizetésre is van lehetőség.
                        </p>
                        <p>
                            A Magántanár minden nyelvóráról számlát állít ki.
                            Tört órákra arányosított díj nem alkalmazható.
                        </p>
                    </section>

                    <section className="bg-[#FFF6ED] border border-[#F7A38D]/30 rounded-2xl p-6 space-y-3">
                        <h3 className="text-2xl font-serif font-semibold text-[#F7A38D] mb-3">
                            Lemondás és szüneteltetés
                        </h3>
                        <p>
                            A Tanítvány legkésőbb 24 órával az óra előtt kérheti a módosítást.
                            Ezen túl az óra lemondottnak minősül, és az előre kifizetett díj nem téríthető vissza.
                        </p>
                        <p>
                            Óraszüneteltetés esetén nincs időpont garancia – a visszatéréskor a szabad
                            kapacitás függvényében történik az új időpont egyeztetése.
                        </p>
                    </section>

                    <section className="bg-white/80 border border-[#F7A38D]/25 rounded-2xl p-6 space-y-3">
                        <h3 className="text-2xl font-serif font-semibold text-[#F7A38D] mb-3">
                            Egyéb rendelkezések
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A Magántanár engedélye nélkül hang- vagy videófelvétel nem készíthető.</li>
                            <li>A Magántanár nem felel, ha a Tanítvány saját hibájából nem éri el célját.</li>
                            <li>Bármelyik fél felmondhatja a szerződést; az előre kifizetett díjak nem visszatéríthetők.</li>
                            <li>
                                A Tanítvány hozzájárul személyes adatai adminisztrációs célú nyilvántartásához,
                                melyet a Magántanár bizalmasan kezel.
                            </li>
                        </ul>
                    </section>

                    <p>
                        A szerződés feltételei közös megegyezéssel módosíthatók.
                    </p>

                    <div className="pt-10 text-center">
                        <span className="italic text-[#F7A38D] font-semibold">
                            Hatályos: 2023. november 1-től
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
