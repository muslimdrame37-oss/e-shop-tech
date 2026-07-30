
import Container from './Container'
import casquehero from '../assets/casque-hero.png'

const HeroSection = () => {
  return (
    <Container className="relative mx-2 flex flex-col gap-15 items-start mt-20 px-8 py-8 lg:py-50 rounded-4xl bg-gray-200">
      <div className=" ">
        <div>
          <h3 className="font-semibold lg:text-3xl">Beats solo</h3>
          <h2 className="font-bold text-3xl lg:text-5xl">Wireless</h2>
          <h1 className="text-white font-bold text-4xl lg:text-9xl tracking-widest uppercase">
            headphone
          </h1>
        </div>
      </div>
      <img
        src={casquehero}
        alt=""
        className="absolute top-0  w-100  left-18 lg:top-5 lg:left-53 lg:w-300 pointer-events-none"
      />
      <div className="absolute bottom-18 right-0 hidden lg:flex flex-col items-end text-md w-110 pr-20">
        <h3 className="text-black font-semibold">Description</h3>
        <p className="text-neutral-500 text-sm text-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis autem.
          Distinctio alias optio magni eveniet ipsum? Possimus perspiciatis, illo.
        </p>
      </div>
      <div className="mb-3">
        <a href={"#categories"} className="text-white bg-red-600 px-3 py-4 lg:px-15 rounded-3xl">
          Shop By Categorie
        </a>
      </div>
    </Container>
  )
}

export default HeroSection
