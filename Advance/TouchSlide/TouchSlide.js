import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TouchSlide extends Component {
  state={
    startX: 0,
    startY: 0,
    isTouchEventStarted: false,
    touchIdentifier: 0,
  }

  touchStart =(e) => {
    const touchobj = e.changedTouches[0];
    const { touchStartPauseAction } = this.props;
    const { isTouchEventStarted } = this.state;
    if (!isTouchEventStarted) {
      this.setState({
        startX: touchobj.pageX,
        startY: touchobj.pageY,
        isTouchEventStarted: true,
        touchIdentifier: touchobj.identifier,
      });
      touchStartPauseAction(touchobj.pageX, touchobj.pageY);
    }
  }

  touchEnd = (e) => {
    const { startX, startY, touchIdentifier } = this.state;
    const {
      thresholdSlide,
      touchEndLeftAction,
      touchEndRightAction,
      touchEndUpAction,
      touchEndDownAction,
      touchEndDefaultAction,
      thresholdNotCrossedAction,
    } = this.props;
    const touchobj = e.changedTouches[0];
    const divHeight = e.target.height || e.target.clientHeight;
    const divWidth = e.target.width || e.target.clientWidth;
    let direction = '';
    let distance = 0;
    let percentageDistance = 0;
    const distX = touchobj.pageX - startX;
    const distY = touchobj.pageY - startY;
    // if distance traveled horizontally is greater than vertically,
    // consider this a horizontal movement
    if (touchIdentifier === touchobj.identifier) {
      if (Math.abs(distX) > Math.abs(distY)) {
        direction = (distX < 0) ? 'left' : 'right';
        distance = Math.abs(distX);
        percentageDistance = (distance * 100) / divWidth;
      } else { // else consider this a vertical movement
        direction = (distY < 0) ? 'up' : 'down';
        distance = Math.abs(distY);
        percentageDistance = (distance * 100) / divHeight;
      }
      const isThresholdCrossed = percentageDistance >= thresholdSlide;
      if (isThresholdCrossed) {
        switch (direction) {
          case 'left':
            touchEndLeftAction();
            break;
          case 'right':
            touchEndRightAction();
            break;
          case 'up':
            touchEndUpAction();
            break;
          case 'down':
            touchEndDownAction();
            break;
          default:
            break;
        }
      } else if (percentageDistance > 0) {
        thresholdNotCrossedAction();
      }
      touchEndDefaultAction(direction, isThresholdCrossed);
      this.setState({
        isTouchEventStarted: false,
        touchIdentifier: 0,
      });
    }
  }

  touchMove = (e) => {
    const { touchMoveAction } = this.props;
    const { startX, startY, touchIdentifier } = this.state;
    const touchobj = e.changedTouches[0];
    const { pageX, pageY } = touchobj;
    let direction = '';
    const distX = pageX - startX;
    const distY = pageY - startY;
    if (touchIdentifier === touchobj.identifier) {
      if (Math.abs(distX) > Math.abs(distY)) {
        direction = (distX < 0) ? 'left' : 'right';
      } else { // else consider this a vertical movement
        direction = (distY < 0) ? 'up' : 'down';
      }
      touchMoveAction(pageX, pageY, direction, distX, distY);
    }
  }

  render() {
    const { children, enableTouchSlide } = this.props;
    return (
      <React.Fragment>
        {
          enableTouchSlide ? (
            <div
              onTouchStart={this.touchStart}
              onTouchEnd={this.touchEnd}
              onTouchMove={this.touchMove}
            >
              {children}
            </div>
          ) : (
            <div>
              {children}
            </div>
          )
        }
      </React.Fragment>

    );
  }
}

TouchSlide.propTypes = {
  children: PropTypes.object.isRequired,
  touchEndLeftAction: PropTypes.func,
  touchEndRightAction: PropTypes.func,
  touchEndUpAction: PropTypes.func,
  touchEndDownAction: PropTypes.func,
  touchEndDefaultAction: PropTypes.func,
  touchStartPauseAction: PropTypes.func,
  touchMoveAction: PropTypes.func,
  thresholdNotCrossedAction: PropTypes.func,
  enableTouchSlide: PropTypes.bool.isRequired,
  thresholdSlide: PropTypes.number,
};

TouchSlide.defaultProps = {
  touchEndLeftAction: () => {},
  touchEndRightAction: () => {},
  touchEndUpAction: () => {},
  touchEndDownAction: () => {},
  touchEndDefaultAction: () => {},
  touchMoveAction: () => {},
  thresholdNotCrossedAction: () => {},
  touchStartPauseAction: () => {},
  thresholdSlide: 50,

};

export default TouchSlide;
