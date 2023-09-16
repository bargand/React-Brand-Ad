import React from 'react'

export default function Mainbody() {
  return (
    <div>
        <div className="main">
        <div className="mainLeft">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deleniti cupiditate quibusdam, blanditiis eveniet impedit accusamus. Voluptatibus, recusandae? Iste, recusandae?</p>
            <div className="buttonM">
                <button>Shop Now</button>
                <button className='button2'>Category</button>
            </div>
            <p>Also Available on</p>
            <div className="ImagesM">
                <img src="/images/flipkart.png" alt="flipkart logo" />
                <img src="/images/amazon.png" alt="amazon logo" />
            </div>
        </div>
        <div className="mainRight">
            <img src="/images/hero-image.png" alt="nike shoes" />
        </div>
        </div>
    </div>
  )
}
