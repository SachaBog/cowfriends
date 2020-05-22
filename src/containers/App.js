import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import { cows } from '../cows';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'



class App extends Component {
    constructor() {
        super();
        this.state = {
            cows: cows,
            searchfield: '',
        }
    } 

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { cows, searchfield } = this.state;
        const filteredCows = cows.filter(cow => {
            return cow.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className = 'f1'>COWFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList cows={filteredCows}/>
                </Scroll>
            </div>
        );
    }
}

export default App;