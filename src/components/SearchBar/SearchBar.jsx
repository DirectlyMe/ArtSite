import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import "./styles.scss";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentText: "",
            fullList: [],
            filteredList: [],
        };

        this.searchBar = React.createRef();
    }

    componentDidMount() {
        const { galleryItems } = this.props;

        this.setState({ fullList: galleryItems });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
        }
    }

    handleChange = event => {
        const text = event.target.value.toLowerCase();

        if (text !== "") {
            let filteredList = this.state.fullList.filter(item => {
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
        event.preventDefault();
        if (!this.searchBar.current) return;

        document.addEventListener("click", this.closeMenu);
    }

    closeMenu = (event) => {
        if (!this.searchBar.current) return; 

        if (!this.searchBar.current.contains(event.target)) {
            this.props.searchBarToggleFunc();
            document.removeEventListener("click", this.closeMenu);
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
            <div className="search-bar" ref={this.searchBar}>
                <input
                    type="text"
                    className="search-bar--input"
                    placeholder="Search..."
                    value={this.state.currentText}
                    onClick={this.setIsActive}
                    onChange={this.handleChange}
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
