import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from "./HornedBeast";
import arrayData from "./data.json"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            obj : {
                title: '',
                img: '',
                Parg: ''
            }
        }
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    beastNameButton = (title, img, Parg) => {
        this.setState({
            showModal: true,
            obj:{title, img ,Parg}
        })
    }

    render() {

        return (
            <div style={{ backgroundColor: "lightgray" }}>
                {arrayData.map((element, ind) => {
                    return (
                        <HornedBeast
                            key={ind}
                            title={element.title}
                            img={element.image_url}
                            Parg={element.description}
                            keyword={element.keyword}
                            horns={element.horns}
                            beastNameButton={this.beastNameButton} />
                    )
                })}

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.state.obj.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src={this.state.obj.img} alt={this.state.obj.title} style={{ width: '100%'}}/>
                        <br />
                        <br />
                        {this.state.obj.Parg}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>


        )
    }


}


export default Main;