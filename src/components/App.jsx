import React from 'react';
import {
    ComponentOne,
    ComponentTwo,
    ComponentThree
} from './gallery';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexCounter: 0,
            componentArray: []
        };
    }

    componentDidMount() {
        let componentArray = [
            <ComponentOne />,
            <ComponentTwo />,
            <ComponentThree />
        ];
        this.setState({ componentArray });
    }

    renderArrows() {
        return (
            <ul className="nav justify-content-around">
                <li className="nav-item">
                    <button
                        className="nav-link active btn btn-info"
                        onClick={() => this.leftArrowClick()}
                    >-</button>
                </li>
                <li className="nav-item">
                    <button
                        className="nav-link active btn btn-info"
                        onClick={() => this.rightArrowClick()}
                    >+</button>
                </li>
            </ul>
        );
    }

    rightArrowClick() {
        let indexCounter = this.state.indexCounter + 1;
        if (indexCounter < this.state.componentArray.length) {
            this.setState({ indexCounter });
        }
    }

    leftArrowClick() {
        let indexCounter = this.state.indexCounter - 1;
        if (indexCounter >= 0) {
            this.setState({ indexCounter });
        }
    }

    renderComponents() {
        let array = this.state.componentArray;
        let index = this.state.indexCounter
        return (
            <div>
                {array[index]}
            </div>
        );
    }

    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col-12">
                        {this.renderArrows()}
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-12 mx-2 border">
                        {this.renderComponents()}
                    </div>
                </div>
            </main>
        );
    }
};