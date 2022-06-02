import uiReducer, { loadingOnActionCreator, UiState } from "./uiSlice";

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
});
