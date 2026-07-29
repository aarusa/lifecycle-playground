import { Component } from "react";

class LifecycleLogger extends Component {

    constructor(props){
        super(props);
        // console.log('Component init...')
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("Component mounted...");
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            console.log("Component Updated...", this.state.count);
        }
    }

    componentWillUnmount() {
        console.log('Component unmount...');
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    render() {
        return(
            <div className="logger-container">
                <h2>Lifecycle Logger (Class component)</h2>
                {/* <p>{ this.props.message }</p> */}
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount} className="secondary-btn">Update</button>
            </div>
        );
    }
}

export default LifecycleLogger;