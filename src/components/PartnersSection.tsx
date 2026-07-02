import Container from './Container'
import { partnerLogo } from '../constants/partnerLogo'

const PartnersSection = () => {
  return (
    <div className="w-full bg-gray-300 mt-20 py-25 px-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 place-items-center gap-8">
          {partnerLogo.map((partner, index) => (
            <img
              key={index}
              src={partner.image}
              alt={partner.name}
              className="h-13 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-50"
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default PartnersSection
