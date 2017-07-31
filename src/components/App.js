import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PieChart, Pie } from 'recharts';
import '../styles/App.css';

const style = {
  xxx: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yyy: {
    position: 'fixed',
  },
  button: {
    border: '1px solid #999',
    borderRadius: 10,
    width: 60,
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    background: '#ccc',
    margin: 5,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export const PureApp = ({count, data, dispatch}) => {
  const color = data[0].value === 1 ? '#0f9' : '#f00';
  return (
    <div className="App">
      <div style={style.xxx}>
        <PieChart width={200} height={200}>
          <Pie
            dataKey="value"
            data={data}
            startAngle={90}
            endAngle={450}
            cx={95}
            cy={95}
            innerRadius={40}
            outerRadius={80}
            fill={color}
            animationEasing="ease-in"
          />
        </PieChart>
        <div style={style.yyy}>{count}件</div>
      </div>
      <div style={style.wrapper}>
        <div style={style.button} onClick={
          () => {
            dispatch({ type: 'INIT' });
            setTimeout(() => dispatch({ type: 'INC' }), 5);
          }
        }>+</div>
        <div style={style.button} onClick={
          () => {
            dispatch({ type: 'INIT' });
            setTimeout(() => dispatch({ type: 'DEC' }), 5);
          }
        }>-</div>
      </div>
    </div>
  )
};

PureApp.propTypes = {
  count: PropTypes.number,
  data: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  count: state.main.count,
  data: state.main.data,
});

export default connect(mapStateToProps)(PureApp);
