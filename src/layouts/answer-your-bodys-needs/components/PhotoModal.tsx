import type { ReactElement } from "react";

import { useState } from "react";

interface ImgInit {
  src: string;
  openSrc: string;
  alt: string;
}

const images = [
  {
    src: "Image-01.jpg",
    openSrc: "Image-01@2x.jpg",
    alt: "01.jpg",
  },
  {
    src: "Image-02.jpg",
    openSrc: "Image-02@2x.jpg",
    alt: "02.jpg",
  },
  {
    src: "Image-03.jpg",
    openSrc: "Image-03@2x.jpg",
    alt: "03.jpg",
  },
];

const init: ImgInit = {
  src: "",
  openSrc: "",
  alt: "",
};

const PhotoModal = (): ReactElement => {
  const [img, setImg] = useState<ImgInit>(init);

  console.log(img);

  return (
    <div className="_left">
      {images.map((img) => {
        return (
          <button key={img.src} onClick={() => setImg(img)}>
            <img src={`/img/component-01/${img.src}`} alt={img.alt} />
          </button>
        );
      })}
    </div>
  );
};

export default PhotoModal;
