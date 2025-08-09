.lm-underline {
  position: relative;
  cursor: pointer;
}

.lm-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s ease;
}

/* .lm-ready .lm-underline::after {
  animation: underline-grow 0.5s forwards;
} */

.lm-underline:hover::after {
  transform: scaleX(1);
}