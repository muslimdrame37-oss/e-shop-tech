import BlogSection from '../components/BlogSection'
import CategorieSection from '../components/CategorieSection'
import HeroSection from '../components/HeroSection'
import PartnersSection from '../components/PartnersSection'
import ProductCard from '../components/ProductCard'
import SectionIcon from '../components/SectionIcon'
import SectionPromo from '../components/SectionPromo'
import { promoSection } from '../constants/promoSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <section id="categories">
        <CategorieSection />
      </section>
      <SectionIcon />
      <SectionPromo data={promoSection[0]} className="mt-25" />
      <section id="products">
        <ProductCard />
      </section>
      <SectionPromo data={promoSection[1]} className="mt-20" />
      <BlogSection />
      <PartnersSection />
    </div>
  )
}

export default HomePage
