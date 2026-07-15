import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <h1 className="title">لوحة التحكم - إدارة المندوبين</h1>
        <div className="cards">
          <div className="card">الزيارات اليوم: 24</div>
          <div className="card">المكتملة: 18</div>
          <div className="card">المتأخرة: 3</div>
        </div>
        <div style={{marginTop:20}}>
          <Link href="/map">انتقل إلى الخريطة الحية</Link>
        </div>
      </div>
    </Layout>
  )
}
