import type { SectionIcon } from '../types/sectionIcon'
import { Truck } from 'lucide-react'
import { BadgeCheck } from 'lucide-react'
import { Headset } from 'lucide-react'
import { Wallet } from 'lucide-react'

export const sectionIcon: SectionIcon[] = [
  {
    icon: Truck,
    text1: 'Free Shipping',
    text2: 'Free shipping on all order',
  },

  {
    icon: BadgeCheck,
    text1: 'Money Guarantee',
    text2: '30 Day Money Back',
  },

  {
    icon: Headset,
    text1: 'Online Support 24/7',
    text2: 'Technical Support 24/7',
  },

  {
    icon: Wallet,
    text1: 'Secure Payment',
    text2: 'All Cards Accepted',
  },
]
