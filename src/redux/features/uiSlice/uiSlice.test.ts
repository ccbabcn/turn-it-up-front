import uiReducer, {
  loadingOffActionCreator,
  loadingOnActionCreator,
  UiState,
} from "./uiSlice";

describe("Given  uiReducer", () => {
  describe("When its invoked and the ui actual status is loading 'false'", () => {
    test("Then it should set a new state with loading set to 'true'", () => {
      const uiActualState: UiState = {
        loading: false,
      };

      const uiExpectedState: UiState = {
        loading: true,
      };

      const loadingAction = loadingOnActionCreator(uiActualState);
      const loadingState = uiReducer(uiActualState, loadingAction);

      expect(loadingState).toEqual(uiExpectedState);
    });
  });

  describe("When it's invoked and the ui actual state is loading 'true'", () => {
    test("Then it should set a new state with loading set to 'false'", () => {
      const uiActualState: UiState = {
        loading: true,
      };

      const uiExpectedState: UiState = {
        loading: false,
      };

      const loadingAction = loadingOffActionCreator(uiActualState);
      const loadingState = uiReducer(uiActualState, loadingAction);

      expect(loadingState).toEqual(uiExpectedState);
    });
  });
});
