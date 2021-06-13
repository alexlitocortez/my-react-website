import { render } from "@testing-library/react";
import React, {Component} from "react";
import ReactDom from 'react-dom';
import './Drumkit.html';

Class Drumkit extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = './Drumkit.html';
        this.div.appendChild(script);
    }
    render() {
        return (
            <div ref={el => (this.div = el)}>
                <h1>Hello</h1>
                {/* {Script is inserted here} */}
            </div>
        )
    }
}

export default Drumkit
