import React from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from './SearchBar'


class Signup extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            bio: "",
            avatar: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        // debugger
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                this.state
            )
        })
        .then(res => res.json())
            .then(data => {
                localStorage.setItem('first_name', data.user.first_name)
                localStorage.setItem('last_name', data.user.last_name)
                localStorage.setItem('username', data.user.username)
                localStorage.setItem('bio', data.user.bio)
                localStorage.setItem('avatar', data.user.avatar)
                localStorage.setItem('token', data.jwt)
                this.props.history.push('/target')
                // return <Redirect to='/target' />   
            })
    }

    render(){
        return (
            <div>
                Register User
                <form className="form-input" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="first name" name='first_name' onChange={this.handleChange}></input><br/>
                    <input type="text" placeholder="last name" name='last_name' onChange={this.handleChange}></input><br/>
                    <input type="text" placeholder="username or email" name='username' onChange={this.handleChange}></input><br/>
                    <input type="password" placeholder="password" name='password' onChange={this.handleChange}></input><br/>
                    <input type="text" placeholder="bio" name='bio' onChange={this.handleChange}></input><br/>
                    <input type="text" placeholder="link to image" name='avatar' onChange={this.handleChange}></input><br/>
                    <button>Submit</button>
                </form>
            </div>
          );

    }


}

export default Signup;







