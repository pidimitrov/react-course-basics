import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);

        console.log('Persons.constructor();')
    }

    componentWillMount(){
        console.log('Persons.componentWillMount();');
    }

    componentDidMount(){
        console.log('Persons.componentDidMount();');
    }

    componentWillUnmount(){
        console.log('Persons.componentWillUnmount();');
    }

    componentWillReceiveProps = (newPops) => {
        console.log('Persons.componentWillReceiveProps();', newPops);
    }

    shouldComponentUpdate(newProps, newState){
        console.log('Persons.shouldComponentUpdate();', newProps, newState);

        return newProps !== this.props;
    }

    componentWillUpdate(newProps, newState){
        console.log('Persons.componentWillUpdate();', newProps, newState);
    }

    componentDidUpdate(){
        console.log('Persons.componentDidUpdate();', this.props, this.state);

        // time to retrieve some thata form DB and so on.
    }

    render() {
        console.log('Persons.render();');

        return (
            <div>
                {this.props.persons.map((person, index) => {
                    return <Person name={person.name}
                        age={person.age}
                        click={() => this.props.deletePersonHandler(index)}
                        key={person.id}
                        change={(event) => this.props.changedHandler(event, person.id)} />
                })}
            </div>
        )
    }
}

export default Persons;