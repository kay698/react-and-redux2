import React, {Component} from 'react';

class AddNinja extends Component {
    state = {
        name : null,
        age : null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state)
        // console.log(this.state )
    }
    render () {
        return (
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" onChange = {this.handleChange}/>
                        <label htmlFor="age">age</label>
                        <input type="text" id="age" onChange = {this.handleChange}/>
                        <button>Submit</button>
                    </form>
                </div>
        );
    }
}
export default AddNinja;