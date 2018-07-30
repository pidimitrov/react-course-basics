import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Styled from '../hoc/Styled'

export const AuthContext = React.createContext(false);

class App extends Component {
    constructor(props) {
        super(props);

        console.log('App.constructor();')


        this.state = {
            persons: [
                { id: '356dfs', name: 'Max', age: 29 },
                { id: 'fdss478', name: 'Manu', age: 31 },
                { id: 'fdsfsd69', name: 'Stephanie', age: 26 }
            ],
            showPersons: false,

            authenticated: false
        }
    }

    componentWillMount(){
        console.log('App.componentWillMount();');
    }

    componentDidMount(){
        console.log('App.componentDidMount();');
    }

    componentWillUnmount(){
        console.log('App.componentWillUnmount();');
    }

    shouldComponentUpdate(newProps, newState){
        console.log('App.shouldComponentUpdate();', newProps, newState);

        return newState.persons !== this.state.persons ||
            newState.showPersons !== this.state.showPersons ||
            newState.authenticated !== this.state.authenticated;
    }

    componentWillUpdate(newProps, newState){
        console.log('App.componentWillUpdate();', newProps, newState);
    }

    componentDidUpdate(){
        console.log('App.componentDidUpdate();', this.props, this.state);

        // time to retrieve some thata form DB and so on.
    }


    toglePersonVisibilityHandler = () => {
        this.setState({ showPersons: !this.state.showPersons })
    }

    deletePersonHandler = (index) => {
        // const persons = this.state.persons; make it IMMUTABLE
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // spread oper. -> copy of array
        persons.splice(index, 1);
        this.setState({ persons });
    }

    changedHandler = (event, id) => {
        const newPersons = [...this.state.persons];

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        newPersons[personIndex].name = event.target.value;
        this.setState({ persons: newPersons });
    }

    static getDerivedStateFromProps(newProps, prevState){
        console.log('App.getDerivedStateFromProps();')

        return prevState
    }

    getSnapshotBeforeUpdate(){
        console.log('App.getSnapshotBeforeUpdate();')

    }

    render() {

        console.log('App.render();');

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                deletePersonHandler={this.deletePersonHandler}
                changedHandler={this.changedHandler} />


        }

        return (
            <Styled classes="App">
                 <button onClick={() => this.setState({showPersons: true})}>show persons</button>

                 <button onClick={() => this.setState({authenticated: true})}>Log in!</button>

                <h1>Hello World!!!</h1>

                <button onClick={this.toglePersonVisibilityHandler}>Click me be!</button>

                <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
            </Styled>


        );

        // return React. createElement('div', {className: 'App'}, React.createElement('h1', null,'alabalanica'));
    }
}

export default App;
