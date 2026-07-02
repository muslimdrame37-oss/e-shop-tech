import Container from './Container'
import { categorieCard } from '../constants/categorieCard'

const CategorieSection = () => {
  return (
    <Container className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-20 lg:gap-x-4 rounded-xl">
        {categorieCard.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-xl ${card.bgColor} ${card.cardPadding} ${card.gap} ${card.colSpan} ${card.cardHeight} ${card.itemsAlign} ${card.justifyContent}`}
          >
            <h3 className={`text-xl capitalize ${card.textColor}`}>{card.text}</h3>
            <h2 className={`font-bold text-2xl ml-2 capitalize ${card.subtitleColor}`}>
              {card.subtitle}
            </h2>
            <h1 className={`font-bold uppercase text-5xl ${card.titleColor} ${card.titleTextSize}`}>
              {card.title}
            </h1>
            <button
              className={`w-fit font-medium rounded-2xl ${card.buttonColor} ${card.buttonTextColor} ${card.buttonPadding}`}
            >
              Browse
            </button>
            <img
              src={card.image}
              alt={card.title}
              className={`absolute ${card.imagePosition} ${card.imageWidth}`}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default CategorieSection
