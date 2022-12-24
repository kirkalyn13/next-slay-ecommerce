import BlogCard from "../Common/BlogCard"

interface Blog {
  id: number
  title: string,
  summary: string,
  author: string,
  src: string,
}

const blogs = [
  {id: 1, title: "Lorem ipsum dolor sit amet consectetur.", summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, cumque.", author: "Foo Bar", src:"/blog/blog_1.jpg"},
  {id: 2, title: "Lorem ipsum dolor sit amet consectetur.", summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, cumque.", author: "Foo Bar", src:"/blog/blog_2.jpg"},
  {id: 3, title: "Lorem ipsum dolor sit amet consectetur.", summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, cumque.", author: "Foo Bar", src:"/blog/blog_3.jpg"},
]

const Blogs = () => {
  return (
    <section id="blogs" className="py-5">
      <div className="container  text-center py-5">
        <div className="row">
          <div className="col-lg-6 m-auto py-5">
            <h2>Our Latest Blog</h2>
            <div className="line my-4"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, reprehenderit.</p>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog: Blog)=><BlogCard key={blog.id} title={blog.title} summary={blog.summary} author={blog.author} src={blog.src}/>)}
        </div>
      </div>
    </section>
  )
}

export default Blogs