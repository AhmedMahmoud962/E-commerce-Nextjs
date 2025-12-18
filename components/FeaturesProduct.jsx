import Image from 'next/image'
import { assets } from '../assets/assets'

const Features = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: 'Unparalleled Sound',
    description: 'Experience crystal-clear audio with premium headphones.',
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: 'Stay Connected',
    description: 'Compact and stylish earphones for every occasion.',
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: 'Power in Every Pixel',
    description: 'Shop the latest laptops for work, gaming, and more.',
  },
]

const FeaturesProduct = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-none ">
          <p className="text-3xl font-bold text-center">Features <span className="font-bold text-red-600">Products</span></p>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6 p-2">
            {Features.map((feature) => (
              <div key={feature.id} className="group relative">
                <Image
                  alt={feature.title}
                  src={feature.image}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="/products">
                    <span className="absolute inset-0" />
                    {feature.title}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesProduct
