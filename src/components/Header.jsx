import React, { Component } from "react";
import "./NavbarStyles.css";

class Header extends Component {
    state = { clicked: false, activeDropdown: null };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    toggleDropdown = (index) => {
        this.setState({ activeDropdown: this.state.activeDropdown === index ? null : index });
    };

    render() {
        const { setPage } = this.props; // Pass `setPage` as a prop from App.js
        const menuItems = [

            {
                title: "Attractions",
                Cname: "nav-links dropdown",
                dropdown: [
                    { title: "Beaches & Islands", url: "beaches-islands" },
                    { title: "Heritage & History", url: "heritage-history" },
                    { title: "Culture & Tradition", url: "culture-tradition" },
                    { title: "Nature & Adventure", url: "nature-adventure" },
                ],
            },
            {
                title: "Local Food",
                Cname: "nav-links dropdown",
                dropdown: [
                    { title: "Desserts", url: "desserts" },
                    { title: "Must Try Dishes", url: "must-try-dishes" },
                    { title: "Foodie Events", url: "foodie-events" },
                    { title: "Street Food", url: "street-food" },
                ],
            },
            {
                title: "Transportation",
                Cname: "nav-links dropdown",
                dropdown: [
                    { title: "Ferry", url: "ferry" },
                    { title: "Flight", url: "flight-information" },
                    { title: "Bus", url: "bus" },
                    { title: "KTM", url: "ktm" },
                    { title: "Bike", url: "bike" },
                ],
            },
            {
                title: "Accommodation",
                Cname: "nav-links dropdown",
                dropdown: [
                    { title: "Hotel", url: "hotel" },
                    { title: "Homestay", url: "homestay" },
                    { title: "Resort", url: "resort" },
                ],
            }
        ];

        return (
            <div>
                <div className="top-half-background">
                    <video className="background-video" autoPlay loop muted playsInline >
                        <source src="/videos/penangvideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div>

                <nav className="NavbarItems">
                    <h1 className="navbar-logo">MyPenang</h1>

                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {menuItems.map((item, index) => (
                            <li key={index} className={item.dropdown ? "dropdown-item" : ""}>
                                <button
                                    className={item.Cname}
                                    onClick={() => {
                                        if (item.dropdown) {
                                            this.toggleDropdown(index);
                                        } else {
                                            setPage(item.url); // Change the page
                                        }
                                    }}
                                >
                                    {item.title}
                                </button>
                                {item.dropdown && this.state.activeDropdown === index && (
                                    <ul className="dropdown-menu">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <li key={subIndex} className="dropdown-item">
                                                <button
                                                    className="dropdown-link"
                                                    onClick={() => setPage(subItem.url)}
                                                >
                                                    {subItem.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="header-icons">
                        <i className="fas fa-globe" title="Language"></i>
                        <i className="fas fa-heart" title="Favorites"></i>
                        <i className="fas fa-search" title="Search"></i>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
