import { FaStar, FaRegStar, FaHeart } from 'react-icons/fa'
import Image from 'next/image'

interface ItemCardProp {
  name: string,
  price: string,
  src: string,
  isSale: boolean,
  isFave: boolean,
  rating: number
}

const ItemCard = ({name, price, src, isSale, isFave, rating}: ItemCardProp) => {
  return (
    <div className="col-lg-3 mt-2 best">
          <div className="card">
            <div className="card-body rounded border border-1 text-center">
            <div className="collection-img position-relative">
                <Image src={src} alt="item" className="rounded" width={250} height={300}/>
                { isSale ? 
                <span
                  className="bg-warning position-absolute d-flex align-items-center justify-content-center text-white">
                    SALE
                </span> : null }
                { isFave ?
                <span className="position-absolute d-flex align-items-center justify-content-center text-warning fs-3">
                  <FaHeart/>
                </span> : null }
              </div>
              <div className="star text-center text-warning">
                { rating >= 1 ? <FaStar/> : <FaRegStar/> }
                { rating >= 2 ? <FaStar/> : <FaRegStar/> }
                { rating >= 3 ? <FaStar/> : <FaRegStar/> }
                { rating >= 4 ? <FaStar/> : <FaRegStar/> }
                { rating >= 5 ? <FaStar/> : <FaRegStar/> }
              </div>
              <p className="fs-5 mb-1">{name}</p>
              <p className="fs-5 fw-bold">${price}</p>
              <button className="btn-card m-auto d-block fs-5">Add to Cart</button>
            </div>
          </div>
        </div>
  )
}

export default ItemCard