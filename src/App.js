import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  } 
  //testId = state.lists.id;
  deleteCard = (id, listId) => {
    console.log(`I am going to delete ${id} from ${listId}`);
    console.dir(`state : ${this.state.lists[listId - 1].cardIds.find( (letter) => letter === id) }`);

    const updatedLists = [...this.state.lists];
    for (let i=0; i<updatedLists.length; i++) {
      if (updatedLists[i].id === listId) {
        updatedLists[i].cardIds = updatedLists[i].cardIds.filter((cardId) => cardId !== id)
        break;
      }
    }

    this.setState({
      lists: updatedLists
      //lists: [ ...this.state.lists, this.state.lists[listId-1] = { ...this.state.lists[listId - 1], cardIds: this.state.lists[listId - 1].cardIds.filter((cardId) => cardId !== id) } ],   
      //lists: [...this.state.lists = this.state.lists[listId - 1].cardIds.filter((cardId) => cardId !== id)]
    })
    // this.state.lists[listId].cardIds.filter((removeId) => {
    //   return (removeId === id)
    // })
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              deleteCard = {this.deleteCard}
              listId={list.id}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;


