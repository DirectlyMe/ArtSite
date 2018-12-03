import React, { Component } from "react";
import { ReactComponent as RightArrow } from "../../images/nextArrow.svg";
import { Link } from "react-router-dom";
import "./styles.scss";

class PageDropDown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.dropDownMenu = React.createRef();
  }

  showMenu = event => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = event => {
    const node = this.dropDownMenu.current;
    if (node) {
      if (!node.contains(event.target)) {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener("click", this.closeMenu);
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.showMenu} className="page-selector">
          <div className="page-title">{this.props.currentPage}</div>
          <RightArrow className="more-arrow" />
        </div>
        {this.state.showMenu ? (
          <div
            className="drop-down"
            ref={this.dropDownMenu}
          >
            <Link to="/" className="page-link">
            <div className="page-button">
              Home
            </div></Link>
            <hr />
            <div className="page-button">Merch</div>
            <hr />
            <div className="page-button">Contact</div>
            <hr />
            <div className="page-button">Cart</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PageDropDown;
