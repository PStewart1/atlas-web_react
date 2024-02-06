import React from 'react';

export default function WithLogging(WrappedComponent) {
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${name})`;
  return WithLogging;
}
