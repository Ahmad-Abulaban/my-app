import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap/";

class FilterModal extends React.Component {
  render() {
    return (
      <>
        <Form onChange={this.props.submitHandler}>
          <Form.Label>select the horns</Form.Label>
          <Form.Select name="breed" aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="wool">wool</option>
          </Form.Select>
        </Form>
      </>
    );
  }
}

export default FilterModal;