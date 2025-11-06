export default function Footer() {
    return (
        <footer className="bg-[#FAD4C3] text-white border-t border-white/30 py-6 mt-24 rounded-t-4xl">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 text-sm">
                {/* Bal oldal */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                    <a
                        href="/aszf.pdf"
                        className="hover:underline hover:opacity-90 transition"
                    >
                        ÁSZF
                    </a>
                    <span className="opacity-60">|</span>
                    <a
                        href="/adatkezeles.pdf"
                        className="hover:underline hover:opacity-90 transition"
                    >
                        Adatkezelési tájékoztató
                    </a>
                    <span className="opacity-60">|</span>
                    <span>© 2025 Angol Nyelvgyakorlás Online</span>
                </div>

                {/* Jobb oldal */}
                <div className="text-center sm:text-right text-black/90">
                    powered by{" "}
                    <a
                        href="https://lasolutions.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline hover:text-white"
                    >
                        LA Solutions
                    </a>
                </div>
            </div>
        </footer>
    );
}
