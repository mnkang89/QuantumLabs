import React from "react";

export class TeamMember extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    imageUrl: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='teammember-box' >
        <img src={this.props.imageUrl} width='102%' height='100%' />
        <div className="teammember-text">
          <div className="teammember-name">
            <h4>{this.props.name}</h4>
          </div>
          <div className="teammember-status">
            <h6><strong>{this.props.title}</strong></h6>
          </div>
          <div className="teammember-content">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
