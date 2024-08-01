
import PropTypes from 'prop-types'

const SelecLimit = props => {
  return (
    <select onChange={(e)=>props.onChangeLimit(e.target.value)} className="select">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  );
}

SelecLimit.propTypes = {
  onChangeLimit:PropTypes.func
};

export default SelecLimit