import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import Cards from "../components/Cards";
import CircularGallery from "../components/CircularGallery.jsx";





export default function Home() {
    return (
        <main className="pt-20">
            <Hero />
            <div style={{ height: '800px', position: 'relative' }}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
            </div>
            <IntroSection />
            <Cards />
        </main>
    );
}
