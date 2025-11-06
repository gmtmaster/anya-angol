export default function Services() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-28">
            <h1 className="text-4xl font-serif font-bold mb-10 text-center">
                Szolgáltatások és óradíjak
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-accent/10 p-8 rounded-3xl">
                    <h2 className="text-2xl font-serif font-semibold mb-4">
                        Egyéni nyelvóra / Vizsgafelkészítés
                    </h2>
                    <ul className="space-y-2 text-lg">
                        <li>Alapfok / középfok / korrepetálás / társalgás: <strong>7.000 Ft</strong></li>
                        <li>Felsőfok / emelt szintű érettségi: <strong>8.000 Ft</strong></li>
                        <li>8 alkalmas óracsomag: <strong>50.400 – 58.400 Ft</strong></li>
                        <li>20 órás minitanfolyam: <strong>122.000 – 142.000 Ft</strong></li>
                    </ul>
                </div>

                <div className="bg-accent/10 p-8 rounded-3xl">
                    <h2 className="text-2xl font-serif font-semibold mb-4">
                        Csoportos nyelvóra / Vizsgafelkészítés
                    </h2>
                    <ul className="space-y-2 text-lg">
                        <li>2 fős csoport: <strong>5.200 – 6.000 Ft/fő</strong></li>
                        <li>3 fős csoport: <strong>4.550 – 5.250 Ft/fő</strong></li>
                        <li>8 alkalmas óracsomag kedvezménnyel</li>
                        <li>20 órás minitanfolyam elérhető</li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-16">
                <p className="text-lg">
                    <strong>Erste Bank</strong> – 11600006-00000000-98211485
                    <br />
                    <span className="text-sm text-neutral-500">
            Az utalás beérkezése után e-mailben küldöm a számlát, és a Google Meet linket.
          </span>
                </p>
                <a
                    href="mailto:angolnyelvgyak.online@gmail.com"
                    className="mt-8 inline-block bg-button text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-all"
                >
                    Időpontfoglalás
                </a>
            </div>
        </main>
    );
}
