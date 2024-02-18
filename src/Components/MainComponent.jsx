import React from 'react';
import DownloadablePDF from './DownloadablePDF';
function MainComponent() {
  const content = ['Item 1', 'Item 2', 'Item 3'];
  const obj= [{
    name:"Aakash",
    id:"",
    Title:"Downloading",
    imageSrc:"../../public/vite.svg"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading",
    imageSrc:"../../public/vite.svg"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading",
    imageSrc:"../../public/vite.svg"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading",
    imageSrc:"../../public/vite.svg"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading",
    imageSrc:"../../public/vite.svg"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading",
    imageSrc:"../../public/vite.svg"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading",
    imageSrc:"../../public/vite.svg"
  }]

  return (
    <div>
      <h1>Downloadable PDF</h1>
      <img src="../../public/checkbox-5.png" alt="" height={20} width={20} />
      <DownloadablePDF content={obj} />
    </div>
  );
}

export default MainComponent;
