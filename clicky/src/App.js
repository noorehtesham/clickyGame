import React from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard"

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
    // this.handleClick = this.handleClick.bind(this);
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
  

    calculateTopScore = () => {
   
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score
        })
        
      }
    }


  CheckImage = (key) => {
      console.log("Clicked");
      console.log(key, "this is the key");
      console.log(this.state.imageSelected, "image selected");
      let image = this.state.imageSelected;

    
      if (image.indexOf(key) === -1) {
        // let array =[];
        image.push(key);
        this.incrementScore();
        this.setState({
          imageSelected: image,
          topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore,
        })
        this.shuffleFriends();
      }
      else {
        this.resetScore();
        alert("You lost");
      }
      
    }



resetScore =() => {
    this.setState({
      score: 0,
      imageSelected: []
    }
    );
 
}

incrementScore =() => {
    this.setState({score: this.state.score + 1 });
}

componentDidMount () {

}



  render() {
    return (
      <Wrapper>
      <NavBar score={this.state.score} topscore={this.state.topScore}/>

      <Title>Friends List</Title>

        {this.state.friends.map(friend=> (
            <FriendCard
              image={friend.image}
              points={friend.points}
              key={friend.key}
              shuffleFriends={this.shuffleFriends}
              // prop to call score handling function
              scoreHandle = {this.scoreHandle}
              CheckImage = {()=>this.CheckImage(friend.key)}
            />
            )) }
            </Wrapper>
        
    );
  
  }


     
  
  




} // Scope ends here for the component




export default App; 
