import React,{Component} from 'react';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Profile extends Component{

    constructor(){
        super()

        this.state={
            user:''
        }
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your Email Id is {this.state.user.email}</h2>
                        <h2>Your Phone Number is {this.state.user.phone}</h2>
                        <h2>Your Role is {this.state.user.role}</h2>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile