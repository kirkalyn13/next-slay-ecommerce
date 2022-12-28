import Image from "next/image"

interface PopularItemProps {
    name: string,
    price: string,
    src: string,
}

const PopularItem = ({name, price, src}: PopularItemProps) => {
  return (
    <div className="d-flex align-items-start justify-content-start">
        <Image
            src={src}
            alt="popular"
            className="img-fluid rounded pe-3"
            width={80}
            height={80}
        />
        <div className="description">
            <p className="mb-0">{name}</p>
            <span>${price}</span>
        </div>
    </div>
  )
}

export default PopularItem