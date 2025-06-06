import { useState } from 'react'

const initialOrders = [
  { id: 1, customer: 'Ali Veli', product: 'Avusturya eSIM - 5GB', status: 'Beklemede', date: '2024-06-06' },
  { id: 2, customer: 'Ayşe Yılmaz', product: 'Avusturya eSIM - 10GB', status: 'Onaylandı', date: '2024-06-05' },
  { id: 3, customer: 'John Doe', product: 'Avusturya eSIM - 20GB', status: 'Teslim Edildi', date: '2024-06-04' },
]

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders)

  const handleStatusChange = (id: number, status: string) => {
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o))
  }
  const handleDelete = (id: number) => {
    setOrders((prev) => prev.filter((o) => o.id !== id))
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Sipariş Yönetimi</h1>
      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Müşteri</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ürün</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2 whitespace-nowrap">{order.customer}</td>
              <td className="px-4 py-2 whitespace-nowrap">{order.product}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option>Beklemede</option>
                  <option>Onaylandı</option>
                  <option>Teslim Edildi</option>
                  <option>Reddedildi</option>
                </select>
              </td>
              <td className="px-4 py-2 whitespace-nowrap">{order.date}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button onClick={() => handleDelete(order.id)} className="text-red-600 hover:underline mr-2">Sil</button>
                <button className="text-primary hover:underline">Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
} 