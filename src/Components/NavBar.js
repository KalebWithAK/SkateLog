import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navs: [
                { title: 'Home', link: '/', id: 0 },
                { title: 'About', link: '/about', id: 1 },
                { title: 'Reviews', link: '/reviews', id: 2 },
                { title: 'Shop', link: '/shop', id: 3 },
            ],
        };
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                { this.state.navs.map(nav => <Link to={nav.link}>{nav.title}</Link>) }
            </div>
        );
    }
}