import Container from './Container'
import type { PromoSection } from '../types/promoSection'
import { Link } from 'react-router-dom'

type Props = {
  data: PromoSection
  className?: string
}

const SectionPromo = ({ data, className = 'mt-20' }: Props) => {
  return (
    <Container className={`${className} ${data.bgColor} rounded-2xl py-10 px-6 md:px-10 lg:px-10`}>
      <div className="relative md:grid grid-cols-2 text-center text-white">
        <div className={data.imageClasses}>
          <img src={data.image} alt="promo" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-between lg:gap-20">
          <div className="text-start text-white">
            <p>{data.discount}</p>
            <h2 className="text-3xl lg:text-7xl font-bold mb-4 uppercase">{data.titleLine1}</h2>
            <h2 className="text-3xl lg:text-7xl font-bold mb-4 uppercase">{data.titleLine2}</h2>
          </div>
          <div className="text-center text-white text-lg">
            <p>{data.dateRange}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start justify-between lg:justify-center">
          <p>{data.rightLabel}</p>
          <p className="text-2xl lg:text-4xl font-bold">{data.rightTitle}</p>
          <p className="text-lg mb-6 text-center md:text-start">{data.rightDescription}</p>
          <Link
            to={""}
            className={`bg-white ${data.buttonTextColor} font-semibold py-2 px-20 md:px-4 lg:px-20 rounded-full hover:bg-gray-200 cursor-pointer`}
          >
            Shop
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default SectionPromo
