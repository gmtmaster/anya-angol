export default function Hero() {
    return (
        <section className="flex flex-col items-center h-screen justify-center text-white text-center py-24 px-6">

            <h1 className="text-4xl md:text-6xl max-w-4xl font-serif font-bold mb-6 [text-shadow:0_3px_16px_rgba(0,0,0,0.5)]">
                BESZÉLJ ANGOLUL{" "}
                <span className="[text-shadow:none] bg-clip-text text-transparent bg-gradient-to-b from-[#FAD4C3] to-[#E67E55]">
                MAGABIZTOSAN
              </span>{" "}
                – <br/> LÉPÉSRŐL LÉPÉSRE!
            </h1>


            <p className="max-w-2xl text-xl leading-relaxed">
                Kivé válhatsz, ha beszélsz egy nyelvet?
                <br />
                Olyanná, aki <strong>magabiztosan kommunikál</strong> a világ bármely pontján,
                <br /> aki <strong>kapukat nyit</strong> új élmények felé,
                <br /> és aki <strong>tartalmasabb életet</strong> él az angol nyelvtudás által.
            </p>
            <a
                href="https://app.minup.io/book/lekrinszkine-toth-eva"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-[#F7A38D] border-t-2 border-white/30 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 uppercase font-bold text-lg"
            >
                Jelentkezem órára
            </a>
        </section>
    );
}
