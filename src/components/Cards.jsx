import React, { useState } from "react";

export default function Cards() {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            title: "Nyelvoktatás",
            details: [
                "általános (nem üzleti) nyelvoktatás az alapoktól felsőfokig minden szinten",
                "minden korosztálynak",
                "hobbiként vagy vizsgázási céllal",
                "a fő hangsúlyt a magabiztos általános beszédkészség elsajátítására, valamint a gördülékeny kommunikációs készség fejlesztésére helyezzük",
            ],
        },
        {
            title: "Korrepetálás",
            details: [
                "nyelvtan gyakorlás, szükség esetén nyelvtan magyarázat",
                "adott tananyag feldolgozása együtt: segítség házi feladatban",
                "kiejtésgyakorlás",
                "szövegértés és íráskészség gyakorlás",
            ],
        },
        {
            title: "Társalgás",
            details: [
                "a már meglévő beszédkészség felfrissítése és fejlesztése általános társalgási témákban",
                "magabiztos, gördülékeny nyelvhasználat szinten tartása",
                "elméletben és „papíron” már létező nyelvtudás gyakorlati alkalmazása",
                "napi aktualitások, hírek és újságcikkek feldolgozása angolul",
                "angol nyelvű olvasmányélmények megvitatása, az eredeti regény vagy novella közös olvasása és megbeszélése",
                "célországokkal kapcsolatos kulturális és országismereti tudás bővítése",
                "felkészülés angol nyelvű állásinterjúra, beszámolóra, prezentációra vagy felvételi elbeszélgetésre stb.",
                "segítség saját videoblog-bejegyzés készítésében",
                "felkészülés hétköznapi angol nyelvű kommunikációra utazás vagy külföldi barátokkal való találkozás előtt",
            ],
        },
        {
            title: "Nyelvvizsga",
            details: [
                "Felkészítés alap-, közép- és felsőfokú általános (nem üzleti) nyelvvizsgákra:",
                "különböző általános nyelvvizsgatípusok megismerése",
                "az írásbeli feladatok gyakorlása",
                "a szinthez szükséges nyelvtani tudás ismétlése",
                "a szóbeli követelmények pontosítása, a társalgási témakörök és vizsgafeladatok átbeszélése, a szókincs biztos elsajátítása",
                "a hallott szöveg értésének fejlesztése",
                "tippek a magabiztos és sikeres vizsgázáshoz, a stressz kezeléséhez és az önbizalom növeléséhez",
            ],
        },
        {
            title: "Érettségi",
            details: [
                "Felkészítés közép- és emelt szintű érettségire:",
                "a szinthez szükséges nyelvtan elsajátítása és ismétlése feladatokon keresztül",
                "az írásbeli részhez tartozó feladattípusok begyakorlása",
                "a szóbeli témakörökhöz kapcsolódó szókincs aktivizálása és bővítése",
                "az emelt szintű szóbeli és íráskészség feladatok megoldásához szükséges gondolkodás elsajátítása",
            ],
        },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="py-20 px-6 flex flex-col items-center text-center bg-white/80 border border-[#e8ddd7] rounded-[2rem] p-10 shadow-[0_6px_25px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 mx-4 my-16 shadow-md">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-[#3a2a1e]">
                Szolgáltatásaim
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full justify-items-center">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="card flex flex-col items-center w-full max-w-xs p-8 text-center bg-white border border-[#e8ddd7] rounded-3xl hover:shadow-lg transition-all"
                    >
                        <h3 className="mb-4 text-2xl italic font-serif text-[#3a2a1e]">
                            {item.title}
                        </h3>
                        <button
                            onClick={() => toggle(i)}
                            className="bg-[#F7A38D] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all"
                        >
                            {openIndex === i ? "Bezárás" : "Részletek"}
                        </button>

                        {/* lenyíló rész */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                openIndex === i ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <ul className="text-left list-disc list-inside text-sm text-[#3a2a1e] leading-relaxed space-y-2 mt-2">
                                {item.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-14 max-w-3xl text-lg leading-relaxed text-center text-[#3a2a1e]">
                <p>
                    Amint megvan a kiválasztott nyelvtanulási forma és egyetértesz az
                    ÁSZF-ben, valamint az Adatkezelési tájékoztatóban foglaltakkal, az
                    időpontfoglalás az egyéni és csoportos nyelvórákra, illetve
                    vizsgafelkészítő órákra itt lehetséges:
                </p>
            </div>

            <div className="mt-8">
                <button className="bg-[#F7A38D] text-white px-10 py-3 rounded-full shadow-md uppercase font-bold text-lg hover:opacity-90 transition-all">
                    Időpontfoglalás
                </button>
            </div>
        </section>
    );
}
