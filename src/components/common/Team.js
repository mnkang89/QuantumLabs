import React, { Component } from 'react';
import { HorizontalSplit } from "./horizontal-split";
import { Row, Col } from "../helpers/bootstrap";

export class Team extends React.Component {

  render() {
    return (
      <div className="Team-row" >
        <Row>
          <div className="card-deck">
            {this.props.children.map((member, idx) => {
              return (
                <Col size={["xs-12", "sm-6", "lg-3"]} key={idx}>{member}</Col>
              );
            })}
          </div>
        </Row>
      </div>
    );
  }

}
