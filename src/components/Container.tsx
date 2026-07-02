import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: Props) => {
  return <div className={`mx-4 lg:mx-6  ${className}`}>{children}</div>
}

export default Container
