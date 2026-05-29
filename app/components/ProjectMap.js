'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import MapContainer and children to avoid SSR errors
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ProjectMap() {
  const [L, setL] = useState(null);

  useEffect(() => {
    import('leaflet').then(leaflet => {
      // Fix marker icon issues in Next.js/Leaflet
      delete leaflet.Icon.Default.prototype._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      
      const customIcon = new leaflet.Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2Q0YWYzNyI+PHBhdGggZD0iTTEyIDBDNy4wMyAwIDMgNC4wMyAzIDljMCA1LjI1IDkgMTUgOSAxNXMyLjI1LTkuNzUgOS0xNUMyMSA0LjAzIDE2Ljk3IDAgMTIgMHptMCAxM2MtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6Ii8+PC9zdmc+',
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
      });
      setL({ customIcon });
    });
  }, []);

  const position = [12.9716, 77.5946]; // Bangalore Coordinates

  const projects = [
    { id: 1, name: 'Whitefield Commercial Park', pos: [12.9698, 77.7499] },
    { id: 2, name: 'Koramangala Luxury Villas', pos: [12.9279, 77.6271] },
    { id: 3, name: 'Indiranagar Tech Hub', pos: [12.9784, 77.6408] },
    { id: 4, name: 'Jayanagar Heritage Remodel', pos: [12.9299, 77.5826] },
    { id: 5, name: 'Electronic City Skyscraper', pos: [12.8452, 77.6602] }
  ];

  if (!L) return <div style={{ height: '400px', background: '#01186a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', borderRadius: '12px' }}>Loading Map...</div>;

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
      <MapContainer center={position} zoom={11} style={{ height: '100%', width: '100%', zIndex: 1 }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {projects.map(p => (
          <Marker key={p.id} position={p.pos} icon={L.customIcon}>
            <Popup>
              <div style={{ color: '#01186a', fontWeight: 'bold', fontSize: '1rem', marginBottom: '4px' }}>{p.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Build Brilliance Signature Project</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
