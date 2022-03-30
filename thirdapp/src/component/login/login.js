import React,{Component} from 'react';
import Header from '../../Header';

const url = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'poonam@gmail.com',
            password:'12345678',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleCheckout = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) =>  res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk', data.token);
                this.props.history.push('/')
            }
        })
    }


    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <hr/>
                    <div className="panel panel-success">
                        <div className="panel-heading">
                        Login
                        </div>
                        <div className="panel-body">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="address">Password</label>
                                    <input id="password" name="password" className="form-control"
                                    value={this.state.password} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <button className="btn btn-info" onClick={this.handleCheckout}>Login</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login