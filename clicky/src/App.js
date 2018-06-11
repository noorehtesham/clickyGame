import React from "react";
import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    
    friends,
    score: 0,
    topScore: 0,
    imageSelected: []
  };

  constructor(props) {
    super(props);
    this.shuffleFriends = this.shuffleFriends.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }



  shuffleFriends() {
    const shuffledFriends = this.shuffle(this.state.friends);
    this.setState({friends : shuffledFriends});
  }

  // handleScore - update the state of this object
  // handleScore(params) {}

  scoreHandle() {
    const score = this.incrementScore(this.state.friends);
    this.setState({score: score});
  }


  // handleClick(e) {
  //   e.preventDefault();
  //   // check if clicked is already true
  //   // update score based on this
  //   // similar to  parent shuffleFriends method
  //   // ex.
  //   // this.props.handleScore(params)
 
  //       this.shuffleFriends();
  //       this.scoreHandle();
  //       this.AlreadyClicked();
  //       if(this.props.ifAlreadyClicked) {
  //         this.props.resetscore();
  //         this.props.youLost();
  //         this.calculateTopScore();
          
  //     } else {
          
  //         this.props.incrementScore();
  //     }
  

    


  CheckImage = (key) => {
      console.log("Clicked");
      const image = this.state.imageSelected;
    
      if (image.indexOf(key) === -1) {
        this.incrementScore();
        this.setState({
          imageSelected: image.key,
          topscore: this.state.score + 1 > this.state.topscore ? this.state.score + 1 : this.state.topscore,
        })
        this.shuffleFriends();
      }
      else {
        resetScore();
        alert("You lost");
      }
      
    }



resetscore =() => {
    this.setState({
      score: 0,
      ImageSelected: []
    }
    );
 
}

incrementScore =() => {
    this.setState({score: this.state.score + 1 });
}


}

  render() {
    return (
      <Wrapper>
      <Navbar score={this.state.score} topscore={this.state.topScore}/>

      <h1 className="title">Friends List</h1>

        {this.state.friends.map(friend=> (
            <Card
              image={friend.image}
              points={friend.points}
              key={friend.id}
              shuffleFriends={this.shuffleFriends}
              // prop to call score handling function
              scoreHandle = {this.scoreHandle}
            />
            )) }
            </Wrapper>
        
    );
  
  }


     
  
  




} // Scope ends here for the component




export default App; 
