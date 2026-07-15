import Link from 'next/link'

export default function Sidebar(){
  return (
    <aside style={{width:250, background:'#0f172a', color:'#fff', padding:20}}>
      <h3>وافل</h3>
      <nav>
        <ul style={{listStyle:'none', padding:0}}>
          <li><Link href="/">لوحة التحكم</Link></li>
          <li style={{marginTop:10}}><Link href="/map">الخريطة الحية</Link></li>
          <li style={{marginTop:10}}><a>المناديب</a></li>
          <li style={{marginTop:10}}><a>العملاء</a></li>
          <li style={{marginTop:10}}><a>المناطق</a></li>
        </ul>
      </nav>
    </aside>
  )
}
