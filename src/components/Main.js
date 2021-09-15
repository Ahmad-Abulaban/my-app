import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from "./HornedBeast";
import arrayData from "./data.json"
import {Modal, Button} from "react-bootstrap";
import FilterModal from "./FilterModal";


class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            object: {
                breed: ''
            },
            obj: {
                title: '',
                img: '',
                Parg: ''
            }
        }
    }

    submitHandler = async (event) => {
        event.preventDefault();
        await this.setState({
            breed: event.target.breed.value,
            showModal: true,
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

                <FilterModal
                    showModal={this.state.showModal}
                    handleClose={this.state.handleClose}
                    breed={this.state.breed}
                    filterHorns={this.state.filterHorns}
                />


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