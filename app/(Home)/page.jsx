import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Promotion from "@/components/Promotion";
import Testimonials from "@/components/Testimonials";
import Trendy from "@/components/Trendy";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {

  return (
    <main className="relative min-h-screen">
      <Hero />
      <TrustedBy />
      <Categories />
      <Feature />
      <Banner
        text="Let’s make your
        next holiday amazing"
        image="/banner.png"
      />
      <Promotion />
      <Explore />
      <Trendy />
      <Testimonials />
    </main>
  )
}