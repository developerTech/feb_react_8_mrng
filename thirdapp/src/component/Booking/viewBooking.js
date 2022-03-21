import React,{Component} from 'react';

class ViewBooking extends Component{
    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <h1>View Booking</h1>
        )
    }
}

export default ViewBooking