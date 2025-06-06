import { useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Avusturya eSIM - 5GB', price: 19.99 },
  { id: 2, name: 'Avusturya eSIM - 10GB', price: 29.99 },
  { id: 3, name: 'Avusturya eSIM - 20GB', price: 39.99 },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [newProduct, setNewProduct] = useState({ name: '', price: '' })

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) return
    setProducts((prev) => [
      ...prev,
      { id: prev.length + 1, name: newProduct.name, price: parseFloat(newProduct.price) },
    ])
    setNewProduct({ name: '', price: '' })
  }
  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }
  const handleEdit = (id: number, name: string, price: string) => {
    setProducts((prev) => prev.map((p) => p.id === id ? { ...p, name, price: parseFloat(price) } : p))
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Ürün Yönetimi</h1>
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Ürün Adı"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border rounded px-2 py-1"
        />
        <input
          type="number"
          placeholder="Fiyat (€)"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border rounded px-2 py-1"
        />
        <button onClick={handleAdd} className="bg-primary text-white px-4 py-1 rounded">Ekle</button>
      </div>
      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ürün Adı</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Fiyat (€)</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 whitespace-nowrap">
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => handleEdit(product.id, e.target.value, product.price.toString())}
                  className="border rounded px-2 py-1 w-full"
                />
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => handleEdit(product.id, product.name, e.target.value)}
                  className="border rounded px-2 py-1 w-full"
                />
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:underline">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
} 