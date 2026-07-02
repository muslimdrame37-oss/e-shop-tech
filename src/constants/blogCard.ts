import type { BlogCard } from '../types/blogCard'
import adultBlurBlog from '../assets/adultBlur-blog.jpg'
import macbookBlog from '../assets/macbook-blog.png'
import billetto from '../assets/billetto.jpg'

export const blogCard: BlogCard[] = [
  {
    image: adultBlurBlog,
    date: 'October 5 2019',
    author: 'Paul',
    title: 'How Well Are You Funnelling',
    excerpt:
      'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s...',
  },
  {
    image: macbookBlog,
    date: 'October 5 2019',
    author: 'Paul',
    title: 'How to Automate Visual',
    excerpt:
      'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper...',
  },
  {
    image: billetto,
    date: 'October 5 2019',
    author: 'Paul',
    title: 'Regression Testing in WordPress',
    excerpt:
      'There are many variations passages of Lorem Ipsum available, but the majority have suffered alterat...',
  },
]
