import React from "react";
import "./ImageComp.css";

const ImageComp = ({ data, setSelectedImg }) => {
    return (
        <div className="images-container">
            {data.map((item) => {
                return (
                    <div
                        key={item.id}
                        onClick={() => setSelectedImg(item.urls.regular)}
                    >
                        <img
                            alt={item.alt_description}
                            src={item.urls.regular}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageComp;
