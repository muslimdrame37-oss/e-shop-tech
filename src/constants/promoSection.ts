import type { PromoSection } from '../types/promoSection'
import redSpeaker from '../assets/red-speaker.png'
import greenWatch from '../assets/greenWatch.png'

export const promoSection: PromoSection[] = [
  {
    bgColor: 'bg-red-700',
    image: redSpeaker,
    imageClasses:
      'absolute -top-27 left-3/5 transform -translate-x-1/2 w-60 h-60 md:w-210 md:left-70 md:-top-60 lg:w-280 lg:-top-65 lg:left-115 pointer-events-none object-cover',
    discount: '20 % OFF',
    titleLine1: 'Fine',
    titleLine2: 'Smile',
    dateRange: '15 Nov To 7 Dec',
    rightLabel: 'Beats Solo Air',
    rightTitle: 'Summer Sale',
    rightDescription:
      "Company that's grown from 210 to 480 employees in the last 12 months.",
    buttonTextColor: 'text-red-700',
  },

  {
    bgColor: 'bg-green-600',
    image: greenWatch,
    imageClasses:
      'absolute -top-34 left-3/5 transform -translate-x-1/2 w-60 h-60 md:w-130 md:left-62 md:-top-60 lg:w-280 lg:-top-65 lg:left-150 pointer-events-none object-cover',
    discount: '20 % OFF',
    titleLine1: 'Happy',
    titleLine2: 'House',
    dateRange: '15 Nov To 7 Dec',
    rightLabel: 'Beats Solo Air',
    rightTitle: 'Summer Sale',
    rightDescription:
      "Company that's grown from 210 to 480 employees in the last 12 months.",
    buttonTextColor: 'text-green-700',
  },
]
