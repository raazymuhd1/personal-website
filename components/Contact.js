import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
      super(props)
      this.state = [
        { name: 'mohammed' },
        { name: 'izdihaar' },
        { name: 'abdul' },
      ]
    }
     
    // componentDidMount() {
    //     this.setState({count: this.state.count + 1});
    // }

  render() {
    const { ArrOf, H2 } = this.props;


    return (
      <div> 
        { H2 }
        { this.state.map(user => (
            <div key={user.name}>
                <h2> { user.name } </h2>
            </div>
        )) }
       </div>
    )
  }
}

Contact.propTypes = {
    name: PropTypes.oneOfType([
      PropTypes.string
    ]),
    H2: PropTypes.element.isRequired,
    ArrOf: PropTypes.arrayOf(PropTypes.number)
}
