import React, { useEffect, useRef, useState } from 'react'

export default function MapComponent(){
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [map, setMap] = useState<any>(null)
  const [reps, setReps] = useState<any[]>([])

  useEffect(() => {
    // load reps
    fetch('/api/reps').then(r => r.json()).then(setReps)
    fetch('/api/territories').then(r => r.json())
    // load google maps script
    if (!window || !(window as any).google) {
      const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
      const src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }

    function initMap(){
      if (!mapRef.current) return
      const center = { lat: 30.0444, lng: 31.2357 }
      const m = new (window as any).google.maps.Map(mapRef.current, { zoom: 12, center })
      setMap(m)
    }
  }, [])

  useEffect(() => {
    if (!map) return
    // clear existing markers
    // add markers for reps
    reps.forEach(r => {
      const marker = new (window as any).google.maps.Marker({
        position: { lat: r.lat, lng: r.lng },
        map,
        title: r.name
      })
      const info = new (window as any).google.maps.InfoWindow({ content: `<b>${r.name}</b>` })
      marker.addListener('click', () => info.open(map, marker))
    })
  }, [map, reps])

  return <div ref={mapRef} style={{width:'100%',height:'100%'}} />
}
