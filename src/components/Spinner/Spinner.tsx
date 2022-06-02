import { SpinnerStyles } from "./SpinnerStyles";

export interface ISpinner {
  visible: boolean;
}

const Spinner = ({ visible }: ISpinner): JSX.Element => {
  const modalSpinnerDisplay = visible ? "visible" : "invisible";

  return (
    <SpinnerStyles>
      <div className={modalSpinnerDisplay}>
        <div className="waveform">
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
        </div>
        <span>LOADING...</span>
      </div>
    </SpinnerStyles>
  );
};

export default Spinner;
