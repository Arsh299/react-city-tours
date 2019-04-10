import React, { Component } from 'react';
import "./tour.scss";
import "../../index.scss";
export default class tour extends Component {
  state={
    showInfo:false
  };
  handleInfo=()=>{
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render() {
    const { id,city,img,name, info}= this.props.tour;
    const {removeTour}=this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="tour pic"/>
          <span className="close-btn"onClick={()=>removeTour(id)}>
              <i className="fas fa-window-close"/>
            </span>        
        </div> 
        <div className="tour-info ">
          <h3 className="text">{city}</h3>
          <br/>
            <h4 className="text">{name}</h4>
            <br/>
              <h5>
                info{""}<span onClick={this.handleInfo}>
                  <i className="fas fa-caret-square-down"  style={{color:"#82b340"}}/>
                </span>
              </h5>
    {this.state.showInfo&&<p>{info}</p>  } 
        </div>
      </article>
    )
  }
}