const appInitialState = {
  data: [{ name: 'green', value: 1 }, { name: 'red', value: 0 }],
  count: 0,
};

export default (state = appInitialState, action) => {
  switch (action.type) {
    case 'INIT':
      return { data: [{ name: '0', value: 0 }, { name: 'a', value: 0 }], count: state.count };
    case 'INC':{
      const data = {
        data: [{ name: '0', value: 0 }, { name: 'a', value: state.count + 1 }],
        count: state.count + 1,
      };
      if (data.count > 0) data.data[0].value = 0;
      return { ...state, ...data };
    }
    case 'DEC': {
      const data = {
        data: [{ name: '0', value: 0 }, { name: 'a', value: (state.count > 0 && state.count - 1) || 0 }],
        count: (state.count > 0 && state.count - 1) || 0,
      };
      if (data.count === 0) data.data[0].value = 1;
      return { ...state, ...data };
    }
    default:
      return state;
  }
};
