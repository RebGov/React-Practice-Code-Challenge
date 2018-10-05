import React from 'react'

class SushiWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value: ""
    }
  }
  handleChange =(event) =>{
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit = (event)=> {
    alert('Added $' + this.state.value + ' to allowance')
    event.preventDefault()

    this.props.addToSushiWallet(this.state.value)
  }

  render() {
  // console.log("SushiWallet: ", this.props.addToSushiWallet, this.props.addMoney)
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} type="number" placeholder="Add $$"/>
        <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default SushiWallet;
