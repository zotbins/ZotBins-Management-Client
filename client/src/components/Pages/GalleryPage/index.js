import React from 'react';

import { Row, Col } from 'antd';
import Gallery from "react-photo-gallery";
// endpoint = https://zotbins.pythonanywhere.com/observation/get/image-list"

    
function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
}

class GalleryPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          photos: [
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
                src: "https://zotbins.pythonanywhere.com/uploads/2020-05-24_203450_ZBin7.jpg",
                width: 1,
                height: 1
            }
          ]
        }
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        fetch('http://localhost:9000/image-list', { method: "GET" })
        .then(response => response.json())
        .then(data => {
            this.setImages(data["imageNames"])
        });
    }

    setImages(images) {
        var i;
        var joined = [];
        for(i = 0; i < images.length; i = i + 1){
            var link = "https://zotbins.pythonanywhere.com/uploads/" + images[i];
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
            joined = joined.concat([{src: link, width: w, height: h}]);
            
        }
        this.setState({photos: joined});
    }

    render() { 
        if(this.state.imageList === null) {
          return (<h1>Loading images</h1>);
        }
        else {
        return (
            <div id={"gallery-page"}>
                <div>
                    <Row>
                        <Col>
                            <h1>Gallery</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Gallery photos={this.state.photos} direction="column" columns={columns}/>
                    </Row>
                </div>
            </div>
        )
      }
    }
}

export default GalleryPage;