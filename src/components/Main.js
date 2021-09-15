import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from "./HornedBeast";
import arrayData from "./data.json"
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap/";

class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
                i: 0,
                fil: [],
            obj: {
                title: '',
                img: '',
                Parg: ''
            }
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            i : Number(event.target.value),
            fil: arrayData.filter(element => element.horns === Number(event.target.value)),
        });
    };

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    beastNameButton = (title, img, Parg) => {
        this.setState({
            showModal: true,
            obj: { title, img, Parg }
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: "lightgray" }}>

                <Form onChange={this.submitHandler}>
                    <Form.Label>select the horns</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="0">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Select>
                </Form>


                {this.state.i === 0 ? arrayData.map((element, ind) => {
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
                }) : this.state.fil.map((element, ind) => {
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
                })
                }


                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.obj.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src={this.state.obj.img} alt={this.state.obj.title} style={{ width: '100%' }} />
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