import type { ProductCard } from '../types/productCard'
import beats from '../assets/beats.jpg'
import rockymountain from '../assets/rockymountain.jpg'
import beats2 from '../assets/beats-2.jpg'
import gameConsole from '../assets/Game-Console.jpg'
import whiteEliteBook from '../assets/White-EliteBook.jpg'
import goreWear from '../assets/gore-wear.jpg'
import wirelessAudio from '../assets/wireless-audio.jpg'
import pinkWatch from '../assets/pinkWatch.jpg'

export const productCard: ProductCard[] = [
  {
    image: beats,
    name: 'Beats',
    price: 995,
  },

  {
    image: rockymountain,
    name: 'Rocky Mountain',
    price: 8250,
  },
  {
    image: gameConsole,
    name: 'Game Console Controller Cable',
    price: 8250,
  },
  {
    image: whiteEliteBook,
    name: 'White EliteBook Tablet 810',
    price: 9950,
    discount: 3500,
    edit: 'text-gray-300 line-through',
  },
  {
    image: goreWear,
    name: 'Gore Wear C7',
    price: 499,
  },
  {
    image: wirelessAudio,
    name: 'Wireless Audio System Multiroom 360',
    price: 8250,
  },
  {
    image: beats2,
    name: 'Beats',
    price: 9950,
  },
  {
    image: pinkWatch,
    name: 'Smartwatch 2.0 LTE Wifi',
    price: 499,
  },
]
