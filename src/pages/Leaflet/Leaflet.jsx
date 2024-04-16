import { Helmet } from 'react-helmet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Leaflet = () => {

    return (
        <div className='w-[500px] h-[400px] m-auto'>
        <Helmet>
            <title>Techno-Real-Estate | Leaflet</title>
        </Helmet>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Leaflet;