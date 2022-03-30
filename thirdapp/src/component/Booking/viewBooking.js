import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './displayBooking';
import Header from '../../Header';


const url = "http://localhost:6700/orders";

class ViewBooking extends Component{
    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut' || sessionStorage.getItem('loginStatus') === ''){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2>Login First To Check Your Order</h2>
                    </center>
                </div>
            )
        }
       
        return(
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }
    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status":query[0].split('=')[1],
                    "date":query[2].split('=')[1],
                    "bank_name":query[3].split('=')[1],
                }
                var id = query[1].split('=')[1].split('_')[1];
                fetch(`${url}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        axios.get(`${url}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewBooking