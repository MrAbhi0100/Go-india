import  { Component } from 'react'
import "./Navbar.css";
import { MenuItems } from './Menuitems';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {clicked: false};
    handleClicked = () => {
        this.setState({ clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='nav-logo'>Go India</h1>

        <div className='menu-icon' onClick={this.handleClicked}>
            <i className={this.state.clicked ?"fas fa-times" : "fas fa-bars"}></i>
            
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) =>{
                return(
            <li key={index}>
                <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>{item.title}
                </Link>
               
            </li>

                )
            })}
            <button>Sign up</button>
        </ul>

      </nav>
    )
  }
}
