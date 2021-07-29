import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageComp from "../ImageComp/ImageComp";
import "./ImageContainer.css"
import Modal from "../Modal/Modal";
const ImageContainer = () => {
    const [imageData,setImageData] = useState();
    const [loading,setLoading]=useState(true)
    const [selectedImg,setSelectedImg]=useState(null)
    useEffect(() => {
        const fetchImages = async () => {
            const res = await axios.get(
                "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
            );
            setImageData(res.data)
            setLoading(false)
        };
        fetchImages();
    }, []);
    return(
        <div>
            <h2>Image Gallery</h2>
            {
                loading && <h3>Loading...</h3>
            }
            {
                imageData && <ImageComp data={imageData} setSelectedImg={setSelectedImg}/>
            }       
            {
                selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
            }     
        </div>
    )
};

export default ImageContainer;
