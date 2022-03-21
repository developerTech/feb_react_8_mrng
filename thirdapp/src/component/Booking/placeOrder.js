import React,{Component} from 'react';

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Aakash',
            email:'aakash@gmail.com',
            cost:0,
            phone:'43443634',
            address:'Hno 12',
            menuItem:''
        }
    }

    render(){
        return(
            <h1>Place Order</h1>
        )
    }
}

export default PlaceOrder