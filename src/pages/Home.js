// Home.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // 样式文件

const bodyImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/body2.png` },
];

// body 1 的选项
const body1ColorImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/color1_body1.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/color2_body1.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/color3_body1.png` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/color4_body1.png` },
    { id: 5, src: `${process.env.PUBLIC_URL}/images/color5_body1.png` },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/color6_body1.png` },
    { id: 7, src: `${process.env.PUBLIC_URL}/images/color7_body1.png` },
    { id: 8, src: `${process.env.PUBLIC_URL}/images/color8_body1.png` },
    { id: 9, src: `${process.env.PUBLIC_URL}/images/color9_body1.png` },
    { id: 10, src: `${process.env.PUBLIC_URL}/images/color10_body1.png` },
    { id: 11, src: `${process.env.PUBLIC_URL}/images/color11_body1.png` },
   
  ];
  
  const body1EyeImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/eye1_body1.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/eye2_body1.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/eye3_body1.png` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/eye4_body1.png` },
    { id: 5, src: `${process.env.PUBLIC_URL}/images/eye5_body1.png` },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/eye6_body1.png` },
    { id: 7, src: `${process.env.PUBLIC_URL}/images/eye7_body1.png` },
    { id: 8, src: `${process.env.PUBLIC_URL}/images/eye8_body1.png` },
    { id: 9, src: `${process.env.PUBLIC_URL}/images/eye9_body1.png` },
    { id: 10, src: `${process.env.PUBLIC_URL}/images/eye10_body1.png` },
    { id: 11, src: `${process.env.PUBLIC_URL}/images/eye11_body1.png` },
  ];
  
  const body1MouthImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/mouth1_body1.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/mouth2_body1.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/mouth3_body1.png` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/mouth4_body1.png` },
    { id: 5, src: `${process.env.PUBLIC_URL}/images/mouth5_body1.png` },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/mouth6_body1.png` },
    { id: 7, src: `${process.env.PUBLIC_URL}/images/mouth7_body1.png` },
    { id: 8, src: `${process.env.PUBLIC_URL}/images/mouth8_body1.png` },
    { id: 9, src: `${process.env.PUBLIC_URL}/images/mouth9_body1.png` },
    { id: 10, src: `${process.env.PUBLIC_URL}/images/mouth10_body1.png`},
    { id: 11, src: `${process.env.PUBLIC_URL}/images/mouth11_body1.png` },
    { id: 12, src: `${process.env.PUBLIC_URL}/images/mouth12_body1.png` },
    { id: 13, src: `${process.env.PUBLIC_URL}/images/mouth13_body1.png`},
  ];
  
  const body1ClothImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/cloth1_body1.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/cloth2_body1.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/cloth3_body1.png` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/cloth4_body1.png` },
  ];
  
  // body 2 的选项
  const body2ColorImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/color1_body2.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/color2_body2.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/color3_body2.png` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/color4_body2.png` },
    { id: 5, src: `${process.env.PUBLIC_URL}/images/color5_body2.png` },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/color6_body2.png` },
    { id: 7, src: `${process.env.PUBLIC_URL}/images/color7_body2.png` },
    { id: 8, src: `${process.env.PUBLIC_URL}/images/color8_body2.png` },
    { id: 9, src: `${process.env.PUBLIC_URL}/images/color9_body2.png` },
    { id: 10, src: `${process.env.PUBLIC_URL}/images/color10_body2.png` },
    { id: 11, src: `${process.env.PUBLIC_URL}/images/color11_body2.png` },
   
  ];
  
  const body2EyeImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/eye1_body2.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/eye2_body2.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/eye3_body2.png` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/eye4_body2.png` },
    { id: 5, src: `${process.env.PUBLIC_URL}/images/eye5_body2.png` },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/eye6_body2.png` },
    { id: 7, src: `${process.env.PUBLIC_URL}/images/eye7_body2.png` },
    { id: 8, src: `${process.env.PUBLIC_URL}/images/eye8_body2.png` },
    { id: 9, src: `${process.env.PUBLIC_URL}/images/eye9_body2.png` },
    //{ id: 10, src: `${process.env.PUBLIC_URL}/images/eye10_body2.png` },
  ];
  
  const body2MouthImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/mouth1_body2.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/mouth2_body2.png` },
  ];
  
  const body2ClothImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/cloth1_body2.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/cloth2_body2.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/cloth3_body2.png` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/cloth4_body2.png` },
  ];

function Home() {
    const [selectedBody, setSelectedBody] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedEyes, setSelectedEyes] = useState(null);
    const [selectedMouth, setSelectedMouth] = useState(null);
    const [selectedClothes, setSelectedClothes] = useState(null);
    const [showAbout, setShowAbout] = useState(false);
    const [aboutImage, setAboutImage] = useState(null); 

  const canvasRef = useRef(null);
  const navigate = useNavigate(); // 用于页面跳转


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAbout && !event.target.closest(".about-author-container")) {
        setShowAbout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAbout]);

  

  const getColorImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1ColorImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2ColorImages;
    return [];
  };

  const getEyeImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1EyeImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2EyeImages;
    return [];
  };

  const getMouthImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1MouthImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2MouthImages;
    return [];
  };

  const getClothImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1ClothImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2ClothImages;
    return [];
  };

  
  const isMouthDisabled = () => {
    return selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`;
  };


  // 绘制选中的身体部位到canvas
  const drawToCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 清空canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const images = [selectedBody, selectedColor, selectedEyes, selectedMouth, selectedClothes];
    images.forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }
    });
  };

  // 保存图片功能
  const saveImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "cutie.png";
    link.click();
  };

  useEffect(() => {
    if (selectedBody || selectedColor || selectedEyes || selectedMouth || selectedClothes) {
      drawToCanvas();
    }
  }, [selectedBody, selectedColor, selectedEyes, selectedMouth, selectedClothes]);

  return (
    <div className="container">
      <div className="left-panel">
        <h3>请选择物种</h3>
        <div className="row">
          {bodyImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`body ${image.id}`}
              onClick={() => {
                setSelectedBody(image.src);
                setSelectedColor(null);
                setSelectedEyes(null);
                setSelectedMouth(null);
                setSelectedClothes(null);
              }}
              className="image-item"
            />
          ))}
        </div>

        {selectedBody && (
          <>
          <h3>请选择颜色</h3>
            <div className="row">
              {getColorImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`eye ${image.id}`}
                  onClick={() => setSelectedColor(image.src)}
                  className="image-item"
                />
              ))}
            </div>
            <h3>请选择眼型</h3>
            <div className="row">
              {getEyeImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`color ${image.id}`}
                  onClick={() => setSelectedEyes(image.src)}
                  className="image-item"
                />
              ))}
            </div>

            <h3>请选择嘴型</h3>
            <div className="row">
              {/* No Mouth Icon 放在最前面 */}
              
              {selectedBody !== `${process.env.PUBLIC_URL}/images/body1.png` && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/none-icon.png`}  
                  alt="No Mouth Icon"
                  onClick={() => setSelectedMouth(null)} 
                  className="image-item"
                />
              )}

              {!isMouthDisabled() && getMouthImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`mouth ${image.id}`}
                  onClick={() => setSelectedMouth(image.src)}
                  className="image-item"
                />
              ))}

              
            </div>

            <h3>请选择头饰</h3>
            <div className="row">
              <img
                  src={`${process.env.PUBLIC_URL}/images/none-icon.png`}  
                  alt="No Cloth Icon"
                  onClick={() => setSelectedClothes(null)} 
                  className="image-item"
              />
              {getClothImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`clothes ${image.id}`}
                  onClick={() => setSelectedClothes(image.src)}
                  className="image-item"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="right-panel">
        <div className="display-box">
          <canvas ref={canvasRef} width={200} height={200} style={{ display: "none" }}></canvas>
          {selectedBody && <img src={selectedBody} alt="Selected Body" className="selected-part" />}
          {selectedColor && <img src={selectedColor} alt="Selected Color" className="selected-part" />}
          {selectedEyes && <img src={selectedEyes} alt="Selected Eyes" className="selected-part" />}
          {selectedMouth && <img src={selectedMouth} alt="Selected Mouth" className="selected-part" />}
          {selectedClothes && <img src={selectedClothes} alt="Selected Clothes" className="selected-part" />}
        </div>

        <button onClick={saveImage} className="save-button">
          保存图像
        </button>
      </div>

      {/* 新增跳转到关于作者页面的按钮 */}
      <button onClick={() => navigate('/about')} className="about-button">
        关于作者
      </button>
    </div>
  );
}

export default Home;
