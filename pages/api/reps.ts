// Mock reps and gps
import type { NextApiRequest, NextApiResponse } from 'next'

const reps = [
  { id: 'rep-1', name: 'محمد علي', lat: 30.0444, lng: 31.2357 },
  { id: 'rep-2', name: 'أحمد صلاح', lat: 30.0500, lng: 31.2333 },
  { id: 'rep-3', name: 'سارة حسن', lat: 30.0580, lng: 31.2320 }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(reps)
}
