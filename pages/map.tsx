import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false })

export default function MapPage() {
  return (
    <Layout>
      <h2>الخريطة الحية للمناديب</h2>
      <div style={{height: '70vh'}}>
        <MapComponent />
      </div>
    </Layout>
  )
}
