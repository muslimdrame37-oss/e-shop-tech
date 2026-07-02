import Container from './Container'
import { blogCard } from '../constants/blogCard'

const BlogSection = () => {
  return (
    <Container className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogCard.map((post, index) => (
          <div key={index} className="group flex flex-col">
            <div className="w-full overflow-hidden rounded-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-500 text-sm mt-4">
              {post.date} <span className="mx-1">.</span> by {post.author}
            </p>
            <h3 className="text-lg font-bold mt-2 group-hover:text-red-600 transition-colors duration-300">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default BlogSection
