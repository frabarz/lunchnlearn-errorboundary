import React, {Component} from "react";

/**
 * @typedef OwnState
 * @property {boolean} hasError
 */

/** @extends {Component<{}, OwnState>} */
class Boundary extends Component {
  state = {
    hasError: false,
    message: "",
    culprit: "",
    stack: ""
  };

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      message: error.message,
      culprit: culprit(error.stack),
      stack: lineClamp(error.stack, 5)
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
    // Inform about the error to an error reporting service
    heyGoogleAnalytics("error", error);
    supSentry(error, errorInfo);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    const state = this.state;

    if (state.hasError) {
      return (
        <div className="error-boundary">
          <p>We had a problem with a child:</p>
          <dl>
            <dt>Message:</dt>
            <dd>{state.message}</dd>
            <dt>Culprit:</dt>
            <dd>{state.culprit}</dd>
            <dt>Stack:</dt>
            <dd>{state.stack}</dd>
          </dl>
        </div>
      );
    }

    return this.props.children;
  }
}

const culprit = stack => stack.split("@")[0];
const lineClamp = (text, lines) =>
  text
    .split("\n")
    .slice(0, lines)
    .concat(text.split("\n").length > lines ? "..." : "")
    .join("\n");

const heyGoogleAnalytics = (a, b) => null;
const supSentry = (a, b) => null;

export default Boundary;
