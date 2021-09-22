import React from 'react'
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
const mockStore = configureMockStore([thunk]);

function render({children}) {
  const store = mockStore({
    startup: { complete: false },
  });
    return <Provider store={store}>{children}</Provider>
}

export * from '@testing-library/react'
export default render;