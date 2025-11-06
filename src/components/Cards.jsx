import React from "react";

export default function Cards() {
    const items = [
        "Nyelvoktatás",
        "Korrepetálás",
        "Társalgás",
        "Nyelvvizsga",
        "Érettségi",
    ];

    return (
        <section className="py-20 px-6 flex flex-col items-center text-center bg-accent/10 rounded-[3rem] mx-4 my-16 bg-white shadow-md">

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
                Szolgáltatásaim
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl w-full justify-items-center">
                {items.map((title, i) => (
                    <div
                        key={i}
                        className="card flex flex-col justify-between items-center w-full max-w-xs p-8 text-center bg-white/60 border border-accent/30 rounded-3xl hover:shadow-md transition-all"
                    >
                        <h3 className="mb-6 text-2xl italic font-serif">{title}</h3>
                        <button className="bg-button text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all">
                            Részletek
                        </button>
                    </div>
                ))}
            </div>


            <div className="mt-14 max-w-3xl text-lg leading-relaxed text-center">
                <p>
                    Amint megvan a kiválasztott nyelvtanulási forma és egyetértesz az
                    ÁSZF-ben, valamint az Adatkezelési tájékoztatóban foglaltakkal, az
                    időpontfoglalás az egyéni és csoportos nyelvórákra, illetve
                    vizsgafelkészítő órákra itt lehetséges:
                </p>
            </div>

            {/* Gomb */}
            <div className="mt-8">
                <button className="bg-button text-white px-10 py-3 rounded-full shadow-md uppercase font-bold text-lg hover:opacity-90 transition-all">
                    Időpontfoglalás
                </button>
            </div>
        </section>
    );
}
