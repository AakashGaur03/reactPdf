import React from 'react';
import DownloadablePDF from './DownloadPDF';
function MainComponent() {
  const content = ['Item 1', 'Item 2', 'Item 3'];
  const obj= [{
    name:"Aakash",
    id:"",
    Title:"Downloading"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading"
  },{
    name:"Aakash",
    id:"",
    Title:"Downloading"
  }]

  return (
    <div>
      <h1>Downloadable PDF</h1>
      <DownloadablePDF content={obj} />
    </div>
  );
}

export default MainComponent;
