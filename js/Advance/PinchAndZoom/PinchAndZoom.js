import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Chip from '../../Chip/Chip';
import Position from '../../Position/PositionWeb';

const zoomInstructionAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 0; }
`;

const ZoomInstructionChip = styled(Chip)`
  color: black;
  animation: ${zoomInstructionAnimation} 10s forwards;
`;

const PinchAndZoom = ({ children }) => {
  const [isPinchZoomInProgress, setPinchZoomInProgress] = useState(false);
  const [zoomDirection, setZoomDirection] = useState('');
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomDistance, setZoomDistance] = useState(0);

  useEffect(() => {
    setZoomScale(1);
  }, [children]);

  const touchMoveAction = (e) => {
    let zoomDistanceUpdated = 0;
    let zoomScaleUpdated = zoomScale;
    const touchobj = e.changedTouches;
    if (isPinchZoomInProgress) {
      e.stopPropagation();
    }
    if (touchobj.length >= 2) {
      setPinchZoomInProgress(true);
      zoomDistanceUpdated = Math.abs(touchobj[0].clientX - touchobj[1].clientX);
      if (zoomDirection === 'zoom-in') {
        zoomScaleUpdated = zoomScale + 0.1;
      } else {
        zoomScaleUpdated = (zoomScale > 1) ? (zoomScale - 0.1) : 1;
      }
      setZoomScale(zoomScaleUpdated);
      setZoomDistance(zoomDistanceUpdated);
      setZoomDirection(zoomDistance < zoomDistanceUpdated ? 'zoom-in' : 'zoom-out');
    }
  };

  const touchStartAction = () => {
  };

  const touchEndAction = (e) => {
    if (isPinchZoomInProgress) {
      if (zoomScale === 1) {
        setPinchZoomInProgress(false);
      } else {
        e.stopPropagation();
      }
    }
  };

  const doubleClickAction = () => {
    setZoomScale((zoomScale > 1) ? 1 : 2);
  };

  return (
    <div
      onDoubleClick={doubleClickAction}
      style={{
        transform: `scale(${zoomScale})`,
        transition: 'transform 0.5s ease-out 0s',
      }}
      onTouchStart={touchStartAction}
      onTouchEnd={touchEndAction}
      onTouchMove={touchMoveAction}
    >
      <Position position="absolute" left="30%" top="50%" zIndex="1">
        <ZoomInstructionChip
          shape="capsular"
          kind="filled"
          color="gray21"
          size="xs"
        >
        Double tap to zoom
        </ZoomInstructionChip>
      </Position>
      {children}
    </div>
  );
};

PinchAndZoom.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default PinchAndZoom;
