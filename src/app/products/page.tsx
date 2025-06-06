import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Avusturya eSIM - 5GB',
    description: '5GB veri, 30 gün geçerli',
    price: '€19.99',
    features: ['5GB veri', '30 gün geçerli', 'Avusturya genelinde kullanım', 'Hızlı aktivasyon'],
  },
  {
    id: 2,
    name: 'Avusturya eSIM - 10GB',
    description: '10GB veri, 30 gün geçerli',
    price: '€29.99',
    features: ['10GB veri', '30 gün geçerli', 'Avusturya genelinde kullanım', 'Hızlı aktivasyon'],
  },
  {
    id: 3,
    name: 'Avusturya eSIM - 20GB',
    description: '20GB veri, 30 gün geçerli',
    price: '€39.99',
    features: ['20GB veri', '30 gün geçerli', 'Avusturya genelinde kullanım', 'Hızlı aktivasyon'],
  },
]

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            eSIM Paketlerimiz
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Avusturya'da kullanabileceğiniz yüksek hızlı ve güvenilir eSIM çözümleri
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
                <p className="mt-4 text-gray-500">{product.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{product.price}</span>
                </p>
                <Link
                  href={`/order/${product.id}`}
                  className="mt-8 block w-full bg-primary border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondary"
                >
                  Sipariş Ver
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  Özellikler
                </h3>
                <ul className="mt-6 space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 