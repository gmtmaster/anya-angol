import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import Cards from "../components/Cards";

export default function Home() {
    return (
        <main className="pt-20">
            <Hero />
            <IntroSection />
            <Cards />
        </main>
    );
}
