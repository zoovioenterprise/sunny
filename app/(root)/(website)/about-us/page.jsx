import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
  title: 'About',
  links: [
    { label: 'About' },
  ]
}
const AboutUs = () => {
  return (
    <div>
      <WebsiteBreadcrumb props={breadcrumb} />
      <div className='lg:px-40 px-5 py-20'>
        <h1 className='text-xl font-semibold mb-3'>About Us</h1>

        <p>
          Welcome to <b>Zoovio Enterprise</b>, where innovation meets fun, comfort, and quality.
        </p>

        <p>
          Zoovio Enterprise is a customer-focused brand dedicated to bringing exciting and reliable footwear products to families across India. We specialize in <b>LED roller skate shoes for kids</b>, designed to combine style, play, and performance in one unique product. Our mission is to make everyday movement more enjoyable while ensuring safety, durability, and eye-catching design.
        </p>

        <p className='mt-5'>What makes Zoovio Enterprise stand out:</p>

        <ul className='list-disc ps-10 mt-3'>
          <li>
            <b>Kid-Focused Design:</b> Our roller skate shoes feature built-in wheels and vibrant LED lights that kids love, while maintaining comfort and stability.
          </li>

          <li>
            <b>Quality You Can Trust:</b> Each product is checked to meet strict quality and safety standards, ensuring durability and reliable performance.
          </li>

          <li>
            <b>Value for Money:</b> We aim to offer premium-looking, feature-rich products at affordable prices for Indian customers.
          </li>

          <li>
            <b>Fast & Reliable Delivery:</b> We primarily serve customers through trusted online marketplaces like Amazon India, ensuring smooth ordering and timely delivery.
          </li>

          <li>
            <b>Customer Satisfaction First:</b> From product selection to after-sales support, we focus on creating a positive and hassle-free shopping experience.
          </li>
        </ul>

        <p className='mt-3'>
          As a growing brand, Zoovio Enterprise is committed to continuous improvement—introducing new designs, enhancing product features, and listening closely to customer feedback.
        </p>

        <p className='mt-3'>
          Thank you for choosing <b>Zoovio Enterprise</b>. Let’s roll into a brighter, more playful future—together.
        </p>
      </div>

    </div>
  )
}

export default AboutUs
