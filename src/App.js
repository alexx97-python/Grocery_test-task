import React from 'react';
import FormView from './components/FormView/FromView';
import ListView from './components/ListView/ListView';
import Loader from './components/Loader/Loader';
import './App.css'

class App extends React.Component {

  state = {
    entries: [],
    searchStatus: 'all',
    loading: true
  }

  setItem = event => {
    event.preventDefault();
    let groceryItem = document.querySelector('#grocery-input').value;
    let groceryPriority = document.querySelector('#grocery-priority').value;
    let entries;
    if (this.state.entries.length){
      entries = [...this.state.entries];
    } else {
      entries = [];
    }
    
    entries.push(
        {
            title: groceryItem,
            priority: groceryPriority,
            status: 'RanOut'
        }
    );
    localStorage.setItem('entries', JSON.stringify(entries));
    this.setState({
      ...this.state,
      'entries': JSON.parse(localStorage.getItem('entries'))
    })
  }

  onStatusChange = event => {
    event.preventDefault();

    this.setState({
      ...this.state,
      searchStatus: event.target.value
    })
  }

  completeItem = (event) => {
    event.preventDefault();
    let entries = [...this.state.entries];
    entries[event.target.id].status = 'Have';
    localStorage.setItem('entries', JSON.stringify(entries));
    this.setState({
      ...this.state,
      'entries': JSON.parse(localStorage.getItem('entries'))
    })
  }

  deleteItem = (event) => {
    event.preventDefault();
    let entries = [...this.state.entries];
    entries.splice(event.target.id, 1)
    localStorage.setItem('entries', JSON.stringify(entries));
    this.setState({
      ...this.state,
      'entries': JSON.parse(localStorage.getItem('entries'))
    })
  }

  componentDidMount(){
    let entries = JSON.parse(localStorage.getItem('entries'));
    if (entries){
      this.setState({
      ...this.state,
      entries,
      loading: false
      })
    } else {
      this.setState({
        ...this.state,
        loading: false
      })
    }
  }


  render(){
    if (this.state.loading){
      return(
        <Loader />
      )
    }
    return (
    <div className="App">
      <h1 className="header">My Grocery List</h1>
      <FormView 
      setItem={this.setItem}
      onStatusChange={this.onStatusChange}
      />
      <ListView
      completeItem = {this.completeItem}
      deleteItem = {this.deleteItem}
      loading = {this.state.loading}
      entries = {this.state.entries}
      searchStatus = {this.state.searchStatus}/>
    </div>
  );
  }
}

export default App;
