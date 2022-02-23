import { Box } from '@mui/material';
import { GoogleMap, useLoadScript, Marker, } from '@react-google-maps/api';
import styles from './LaunchMap.styles';

const center = {
    lat: 46.9708296,
    lng: 31.9894319,
};

const LaunchMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '',
    });

    if (loadError) {
        return <>Map cannot be loaded right now, sorry.</>
    }

    if (!isLoaded) {
        return <>Loading maps</>;
    }

    // return isLoaded ? renderMap() : <Spinner />

    return (
        <Box sx={styles.outerBox}>
            <GoogleMap
                mapContainerStyle={styles.mapContainer}
                clickableIcons={true}
                center={center}
                zoom={12}
            >
                <Marker
                    onLoad={console.log}
                    position={center}
                />
            </GoogleMap>
        </Box>
    );
};

export default LaunchMap;
