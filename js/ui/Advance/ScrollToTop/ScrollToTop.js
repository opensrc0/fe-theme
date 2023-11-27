import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (window && window.scrollTo) {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.defaultProps = {
  children: '',
};

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default withRouter(ScrollToTop);
