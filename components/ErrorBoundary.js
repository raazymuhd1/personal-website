import React, { Component } from 'react'

export class ErrorBoundary extends Component {
     constructor(props) {
         super(props)
         this.state = { hasError: false }
     }

     getDerivedStateFromError(error) {
         return { hasError: true }
     }

     componentDidCatch(error, errorInfo) {
         logErrorToMyService(error, errorInfo)
     }

  render() {
      const { children } = this.props
    if(this.state.hasError) {
        return (
            <h2> there is a problem with your app </h2>
        )
    }

    return (
        { children }
    )
  }
}

export default ErrorBoundary