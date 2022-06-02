import { SpinnerStyles } from "./SpinnerStyles";

const Spinner = (): JSX.Element => {
  return (
    <SpinnerStyles>
      <div className="waveform">
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
      </div>
      <span>LOADING...</span>
    </SpinnerStyles>
  );
};

export default Spinner;
