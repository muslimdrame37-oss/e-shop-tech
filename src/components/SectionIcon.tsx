import { sectionIcon } from '../constants/sectionIcon'
import Container from './Container'

const SectionIcon = () => {
  return (
    <Container className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sectionIcon.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row lg:flex-row items-center justify-start md:justify-center lg:justify-center  gap-3"
        >
          <div>
            <item.icon size={60} className="text-red-500" />
          </div>
          <div className="text-center md:text-start lg:text-start text-black">
            <p>{item.text1}</p>
            <p>{item.text2}</p>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default SectionIcon
