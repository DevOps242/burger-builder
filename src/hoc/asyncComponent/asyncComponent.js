import React, { Component } from 'react';
import { render } from 'react-dom';

// This code handles lazy loading in the given application.
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component : null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
 }

 export default asyncComponent;