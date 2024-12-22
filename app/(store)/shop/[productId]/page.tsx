import React from 'react'
import ImagePreviewsSection from './sections/image-previews-section'
import ProductDetailSection from './sections/product-detail-section'

const ProduceDetails = () => {
  const images = [
    1,2,3
  ]

  return (
    <div className='container'>
      <div className='flex gap-8'>
        <ImagePreviewsSection images={images} />
        <ProductDetailSection title={'Tote Bag'} category={'tote-bag'} price={'100.75'} colors={['red', 'blue', 'green']} sizes={['XS', 'S', 'M']} />
      </div>
    </div>
  )
}

export default ProduceDetails