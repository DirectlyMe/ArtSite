import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import "./styles.scss";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentText: "",
            filteredList: [],
        };

        this.searchBar = React.createRef();
        this.input = React.createRef();
    }

    componentDidMount() {
        if (this.input.current && this.searchBar.current) {
            this.input.current.focus();

            this.setIsActive();
        }
    }

    handleSearchChange = event => {
        const text = event.target.value.toLowerCase();

        if (text !== "") {
            let filteredList = this.props.galleryItems.filter(item => {
                const lc = item.title.toLowerCase();

                if (lc.includes(text)) {
                    return true;
                } else {
                    return false;
                }
            });

            this.setState({ filteredList, currentText: text });
        } else {
            this.setState({ filteredList: [], currentText: "" });
        }
    };

    setIsActive = (event) => {
        if (!this.searchBar.current) return;

        document.addEventListener("click", this.closeMenu);
    }

    closeMenu = (event) => {
        if (!this.searchBar.current || !this.input.current) return; 

        if (!this.searchBar.current.contains(event.target)) {
            this.props.searchBarToggleFunc();
            setTimeout(() => {
                document.removeEventListener("click", this.closeMenu);
            }, 0);
        }
    }

    render() {
        const resultItems = this.state.filteredList.map((item, index) => (
            <Link
                className="search-bar--result-link"
                to={`/gallery-item/${item.product_id}`}
                key={index}
            >
                <li className="search-bar--result-item">{item.title}</li>
            </Link>
        ));

        return (
            <div className="search-bar" ref={this.searchBar} onClick={this.setIsActive}>
                <input
                    type="text"
                    className="search-bar--input"
                    placeholder="Search..."
                    value={this.state.currentText}
                    onChange={this.handleSearchChange}
                    ref={this.input}
                />
                {this.filteredList !== "" ? (
                    <div className="search-bar--results-menu">
                        <ul className="search-bar--results-list">{resultItems}</ul>
                    </div>
                ) : null}
            </div>
        );
    }
}
SearchBar.contextType = Context;

export default SearchBar;
