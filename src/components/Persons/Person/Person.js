import React, {Component} from 'react';
import './Person.css'
import PropTypes from 'prop-types'
import {AuthContext} from '../../../containers/App'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();

        console.log('Person.constructor();')
    }

    componentWillMount(){
        console.log('Person.componentWillMount();');
    }

    componentDidMount(){
        console.log('Person.componentDidMount();');

        this.inputElement.current.focus();
    }

    componentWillUnmount(){
        console.log('Person.componentWillUnmount();');

       
    }

    render() {
        console.log('Person.render();');
        
        return (
            <div className='Person'>
                <AuthContext.Consumer> 
                    {auth => {
                        return  auth ? <p>Authenticated</p> : <p>NOT Authenticated</p>
                    }}
                </AuthContext.Consumer>

                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type='text' 
                    onChange={this.props.change} 
                    defaultValue={this.props.name}/>
            </div>    
        )
    }
    
}

Person.propTypes = {
    cklick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default Person;