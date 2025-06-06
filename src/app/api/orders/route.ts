import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Here you would typically save the order to a database
    // For now, we'll just log it and return a success response
    console.log('New order received:', body)

    // Send email notification to admin
    // This is where you would implement email sending logic
    
    return NextResponse.json({ success: true, message: 'Sipariş başarıyla alındı' })
  } catch (error) {
    console.error('Order processing error:', error)
    return NextResponse.json(
      { success: false, message: 'Sipariş işlenirken bir hata oluştu' },
      { status: 500 }
    )
  }
} 