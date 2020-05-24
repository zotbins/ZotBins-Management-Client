import React from 'react';

import { Row, Col } from 'antd';
import Gallery from "react-photo-gallery";
// endpoint = https://zotbins.pythonanywhere.com/observation/get/image-list"


const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
  ];
    
function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
}

var img; 

function getImages(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://zotbins.pythonanywhere.com/observation/get/image-list');
    request.send();
    request.onload = () => {
        if(request.states == 200){
            img = JSON.parse(request.response);
        }else{
            console.log(`error ${request.status} ${request.statusText}`);
        }
    }
}

function setImages(){
    let temp = img.imageNames;
    var i;
    for(i = 0; i < temp.length; i++){
        var w = 1;
        var h = 1;
        if(i%3 == 0){
            w = 3;
            h = 4;
        }
        if(i%2 == 0){
            w = 4;
            h = 3;
        }
        photos.push(temp[i], w, h);
    }
}

class GalleryPage extends React.Component {
    constructor(props){
        super(props);
        //getImages();
        //setImages();
    }

    render() { 
        return (
            <div id={"gallery-page"}>
                <div>
                    <Row>
                        <Col>
                            <h1>Gallery</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Gallery photos={photos} direction="column" columns={columns}/>
                    </Row>
                </div>
            </div>
        )
    }
}

export default GalleryPage;
