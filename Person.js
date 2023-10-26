import React, { Component } from "react";
import Man from "./Man";

// PROPS :

// class Person extends Component {
//     constructor(props) {
//         super(props);
//         this.props = props;
    
//     }
//   render() {
//     return(
//         <div>
//             <h1>
//                 <i>Dear {this.props.name},{this.props.age} years Welcome To React</i>
//             </h1>
//          </div>

//     );
//   }
// }

// STATE :

class Person extends Component {
  constructor(props) {
      super(props);
      this.props = props;
      this.state = {
        name : "Sumit",
        age : "26" 
      };
    }

    nameChangeHandler() {
      console.log(this.state);
      this.setState({name : "Sushant", age: 28 }, () => {
          console.log(this.state);
        });
      }
      render() {
        return(
          <div>
            <h1>
              <i>
                Dear {this.state.name},{this.state.age} years Welcome To React
                </i>
                <br></br>
               <button> onClick={() => this.nameChangeHandler()}Click Me </button> 
          </h1>
       </div>

  );
}
}

export default Person;
