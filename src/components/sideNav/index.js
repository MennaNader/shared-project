import React, { Component } from "react";
import styles from './styles.scss';

export class SideNav extends Component {
    render() {
        return (
            <aside>
                <header>
                    <h1>TAMM</h1>
                </header>
                <hr />
                <section>
                    <a href="#">Aspects of Life</a>
                    <a href="#">Abu Dhabi Government Entities</a>
                    <a href="#">About Abu Dhabi</a>
                    <a href="#">Co-Create</a>
                    <a href="#">Statistics</a>
                    <a href="#">About TAMM</a>
                    <a href="#">Media</a>
                    <a href="#">Support</a>
                </section>
                <hr />
                <footer>
                    <h2>العربى</h2>
                </footer>
            </aside>
        )
    }
}