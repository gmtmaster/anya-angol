export default function Hero() {
    return (
        <section className="flex flex-col items-center h-screen justify-center text-white text-center py-24 px-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                BESZÉLJ ANGOLUL
                {' '}<span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FAD4C3] to-[#E67E55]">MAGABIZTOSAN</span>

                {' '}– LÉPÉSRŐL LÉPÉSRE!
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 ">
                Lekrinszkiné Tóth Éva vagyok
            </h2>
            <p className="max-w-2xl text-xl leading-relaxed">
                Kivé válhatsz, ha beszélsz egy nyelvet?
                <br />
                Olyanná, aki <strong>magabiztosan kommunikál</strong> a világ bármely pontján,
                <br /> aki <strong>kapukat nyit</strong> új élmények felé,
                <br /> és aki <strong>tartalmasabb életet</strong> él az angol nyelvtudás által.
            </p>
            <button
                href="/services"
                className="mt-10 bg-button text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-all uppercase font-bold text-lg"
            >
                Jelentkezem órára
            </button>
        </section>
    );
}
