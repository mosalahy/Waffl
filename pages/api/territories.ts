// Mock territories seed
import type { NextApiRequest, NextApiResponse } from 'next'

const territories = [
  { id: 't1', name: 'شبرامصر', center: { lat: 30.0710, lng: 31.2770 } },
  { id: 't2', name: 'الخيمة', center: { lat: 30.0100, lng: 31.2000 } },
  { id: 't3', name: 'فيصل', center: { lat: 30.0200, lng: 31.2300 } },
  { id: 't4', name: 'الهرم', center: { lat: 29.9761, lng: 31.1313 } },
  { id: 't5', name: 'المعادي', center: { lat: 29.9670, lng: 31.2710 } },
  { id: 't6', name: 'المنشية', center: { lat: 30.0626, lng: 31.2255 } },
  { id: 't7', name: 'المقطم', center: { lat: 30.0217, lng: 31.3100 } },
  { id: 't8', name: 'حلوان', center: { lat: 29.8610, lng: 31.3170 } },
  { id: 't9', name: 'مايو', center: { lat: 29.9570, lng: 31.2590 } }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(territories)
}
