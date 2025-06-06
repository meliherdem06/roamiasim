import Link from 'next/link'

export default function AdminDashboard() {
  // Mock statistics
  const stats = [
    { name: 'Toplam Sipariş', value: 128 },
    { name: 'Toplam Satış (€)', value: 2450 },
    { name: 'Aktif Ürün', value: 6 },
  ]

  // Mock last orders
  const lastOrders = [
    { id: 1, customer: 'Ali Veli', product: 'Avusturya eSIM - 5GB', status: 'Beklemede', date: '2024-06-06' },
    { id: 2, customer: 'Ayşe Yılmaz', product: 'Avusturya eSIM - 10GB', status: 'Onaylandı', date: '2024-06-05' },
    { id: 3, customer: 'John Doe', product: 'Avusturya eSIM - 20GB', status: 'Teslim Edildi', date: '2024-06-04' },
  ]

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Paneli Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-gray-500 mt-2">{stat.name}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Son Siparişler</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Müşteri</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ürün</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
              </tr>
            </thead>
            <tbody>
              {lastOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{order.customer}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{order.product}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{order.status}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-64 flex flex-col gap-4">
          <Link href="/orders" className="bg-primary text-white rounded-lg p-4 text-center font-semibold hover:bg-secondary transition">Sipariş Yönetimi</Link>
          <Link href="/products" className="bg-primary text-white rounded-lg p-4 text-center font-semibold hover:bg-secondary transition">Ürün Yönetimi</Link>
        </div>
      </div>
    </main>
  )
}
