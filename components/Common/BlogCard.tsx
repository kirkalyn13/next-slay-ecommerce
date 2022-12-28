import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string,
  summary: string,
  author: string,
  src: string,
}

const BlogCard = ({title, summary, author, src}: BlogCardProps) => {
  return (
    <div className="col-md-6 col-lg-4 card border-0 my-3">
      <div className="container">
        <Image src={src} alt="blog" className="rounded" width={320} height={220}/>
      </div>
      {/* <img src={src} alt="Blog 1"/> */}
      <div className="card-body px-0">
        <h4 className="card-title">
          {title}
        </h4>
        <p className="card-text mt-3 text-muted">
          {summary}
        </p>
        <p className="card-text">
          <small className="text-muted">Author: </small>{author}
        </p>
        <button className="btn-accent">
          <Link href="#" className="text-decoration-none text-light">Read More</Link>
        </button>
      </div>
    </div>
  )
}

export default BlogCard