import styled from "styled-components";

export const SpinnerStyles = styled.div`
  width: 100%;
  height: 100vh;
  color: #fdfffc;
  background: #786871;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    margin-top: 30px;
    font-size: 26px;
    font-weight: 600;
  }
  .waveform {
    --uib-size: 140px;
    --uib-speed: 1s;
    --uib-color: #fdfffc;
    --uib-line-weight: 25px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: var(--uib-size);
    height: calc(var(--uib-size) * 0.9);
  }

  .waveform__bar {
    width: var(--uib-line-weight);
    height: 100%;
    background-color: var(--uib-color);
  }

  .waveform__bar:nth-child(1) {
    animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45)
      infinite;
  }

  .waveform__bar:nth-child(2) {
    animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3)
      infinite;
  }

  .waveform__bar:nth-child(3) {
    animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15)
      infinite;
  }

  .waveform__bar:nth-child(4) {
    animation: grow var(--uib-speed) ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(0.3);
    }

    50% {
      transform: scaleY(1);
    }
  }
`;
