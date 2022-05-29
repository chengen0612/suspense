import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  reset() {
    this.setState({ error: null });
  }

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (error && fallback) {
      return typeof fallback === "function"
        ? fallback({ error, reset: this.reset })
        : fallback;
    } else if (error) {
      return <div>{error.message}</div>;
    }

    return children;
  }
}
