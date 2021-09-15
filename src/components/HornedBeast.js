import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0,

        }
    }

    increaseNumberOfVotes = () => {
        this.setState({
            numOfVotes: this.state.numOfVotes + 1
        })
    }

    render() {
        return (
            <div style={{ width: '25%', float: "left" }}  >

                <Card style={{ minHeight: '900px' }}>
                    <Card.Img className='cardVote' variant="top" src={this.props.img} alt={this.props.keyword} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            horns {this.props.horns}
                            <br />
                            {this.props.Parg}
                        </Card.Text>
                        <Card.Text>
                            ❤️  Number of Votes {this.state.numOfVotes}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfVotes} variant="primary">Vote</Button>
                        <br />
                        <br />
                        <Button variant="primary" onClick={() => {

                            this.props.beastNameButton(this.props.title, this.props.img, this.props.Parg)
                        }}>Modal</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }


}


export default HornedBeast;