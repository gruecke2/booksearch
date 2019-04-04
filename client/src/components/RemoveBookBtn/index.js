import React from "react";
import Button from "../Button";
import "./style.css";


class RemoveBookBtn extends React.Component {

    // deleteFromDB = () => {
    //     console.log(this.props.id);
    
    //     axios.delete(`/books/${this.props.id}`)
    //     .then(
    //         // console.log("deleted")
    //         this.props.deleteCB()
    //     )
    //     .catch(err => console.log(err))
    //   }

    render(){
        return (
            <Button className="deleteBtn" onClick={()=>this.props.delete(this.props.id)}>
                Delete Book   
            </Button>
        )
    }
    
  }

  export default RemoveBookBtn;