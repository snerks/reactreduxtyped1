import * as React from 'react';
import { connect } from 'react-redux';

import '../App.css';

import { RootState } from '../store/rootState';
import { getAreaOfSquare } from '../actions/shape';
// import { SquareAction } from '../reducers/shape';

interface SquareDataProps {
    area: number;
}

interface SquareDispatchProps {
    handleGetArea: (size: number) => void;
}

type SquareProps = SquareDataProps & SquareDispatchProps;

interface SquareState {
    size: number;
}

class Square extends React.Component<SquareProps, SquareState> {

    constructor(props: SquareProps) {
        super(props);

        this.state = ({
            size: Math.sqrt(props.area)
        });
    }

    handleIncrementSize(): void {

        const currentSize = this.state.size;

        this.setState({
            size: currentSize + 1
        });
    }

    render() {
        const { area, handleGetArea } = this.props;
        const { size } = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to the Square Component</h2>
                </div>
                {/*<p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>*/}

                <div>
                    <p>Square size is <span>{size}</span></p>
                    <button onClick={() => this.handleIncrementSize()}>Increment Size</button>

                    <p>Square area is <span>{area}</span></p>

                    <button onClick={() => handleGetArea(size)}>Get Area</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): SquareDataProps => ({
    area: state.shape.area
});

const mapDispatchToProps = (dispatch: Function): SquareDispatchProps => ({
    handleGetArea: (size) => { dispatch(getAreaOfSquare(size)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Square as any);