import { useEffect, useState } from "react";
import "./Apod.css"


function Apod () {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=MxoUVFHc23KPuw8io8OJWIVBWA3Lcb4TNPYpgX7q";
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                setPhoto(data.url);

                // DOMparser para extraer la url de la imagen
                // const parser = new DOMParser();
                // const doc = parser.parseFromString(htmlText, 'text/html');
                // const imgUrl = doc.querySelector('img');

                // if (imgUrl) {
                //     const imgElement = "https://apod.nasa.gov/apod/" + imgUrl.getAttribute("src");
                //     setPhoto(imgElement);
                // };
            }
            catch (err) {
                console.error('Error fetching APOD:', err);
            }    
        };

        fetchPhoto();
    }, []);

    return (
        <div className="apod-container">
            {!photo ? (
                <p>Loading...</p>
            ) : photo ? (
                <img src={photo} alt="Astronomy Picture Of the Day" />
            ) : (
                <p>No image found</p>
            )}
        </div>
    );
}

export default Apod;

