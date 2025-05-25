'use client'

import Layout from '@/modules/layout/layout'
import { useState, useEffect } from 'react'
import { useProductStore } from '@/stores/product.store'
import { useOrderStore } from '@/stores/order.store'

export default function OrderPage() {
  const { products, getProducts } = useProductStore()
  const { createOrder } = useOrderStore()

  const [form, setForm] = useState({
    buyerName: '',
    buyerEmail: '',
    buyerPhone: '',
    shippingAddress: '',
    city: '',
    productName: '',
    quantity: 1,
    paymentMethod: ''
  })

  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [lastOrderData, setLastOrderData] = useState<any>(null)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    const product = products.find(p => p.product === form.productName)
    if (product) {
      setTotal(product.price * form.quantity)
    }
  }, [form.productName, form.quantity, products])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: name === 'quantity' ? Number(value) : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage('')
    try {
      const newOrder = { ...form, total }
      await createOrder(newOrder)
      setLastOrderData(newOrder)
      setSuccessMessage('🎉 Pedido enviado exitosamente.')
      setForm({
        buyerName: '',
        buyerEmail: '',
        buyerPhone: '',
        shippingAddress: '',
        city: '',
        productName: '',
        quantity: 1,
        paymentMethod: ''
      })
    } catch (error) {
      console.error('Error al enviar el pedido:', error)
      setSuccessMessage('❌ Hubo un error al enviar el pedido.')
    } finally {
      setLoading(false)
    }
  }

  const downloadReceipt = () => {
    if (!lastOrderData) return
    const content = `
    📦 RECIBO DE PEDIDO 📦

    Cliente: ${lastOrderData.buyerName}
    Correo: ${lastOrderData.buyerEmail}
    Teléfono: ${lastOrderData.buyerPhone || 'No registrado'}
    Dirección: ${lastOrderData.shippingAddress}
    Ciudad: ${lastOrderData.city}

    Producto: ${lastOrderData.productName}
    Cantidad: ${lastOrderData.quantity}
    Método de pago: ${lastOrderData.paymentMethod}

    TOTAL: $${lastOrderData.total.toFixed(2)}

    Gracias por tu compra ❤️
    `
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'recibo_pedido.txt'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">Realizar Pedido</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input name="buyerName" value={form.buyerName} placeholder="Nombre completo" onChange={handleChange} required className="w-full p-2 border rounded bg-white" />
        <input name="buyerEmail" value={form.buyerEmail} placeholder="Correo electrónico" onChange={handleChange} required className="w-full p-2 border rounded bg-white" />
        <input name="buyerPhone" value={form.buyerPhone} placeholder="Teléfono (opcional)" onChange={handleChange} className="w-full p-2 border rounded bg-white" />
        <input name="shippingAddress" value={form.shippingAddress} placeholder="Dirección de envío" onChange={handleChange} required className="w-full p-2 border rounded bg-white" />
        <input name="city" value={form.city} placeholder="Ciudad" onChange={handleChange} required className="w-full p-2 border rounded bg-white" />

        <select name="productName" value={form.productName} onChange={handleChange} required className="w-full p-2 border rounded bg-white">
          <option value="">Selecciona un producto</option>
          {products.map((p) => (
            <option key={p.id} value={p.product}>{p.product}</option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          min="1"
          value={form.quantity}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded bg-white"
        />

        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required className="w-full p-2 border rounded bg-white">
          <option value="">Método de pago</option>
          <option value="Tarjeta">Tarjeta</option>
          <option value="Contraentrega">Contraentrega</option>
        </select>

        <p>Total a pagar: <strong>${total.toFixed(2)}</strong></p>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white font-bold rounded transition duration-200 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar Pedido'}
        </button>

        {successMessage && (
          <div className="mt-4 p-3 text-white rounded bg-green-500 animate-fade-in">
            {successMessage}
            {lastOrderData && (
              <button onClick={downloadReceipt} className="ml-4 underline text-sm hover:text-white">
                Descargar recibo
              </button>
            )}
          </div>
        )}
      </form>
    </Layout>
  )
}
