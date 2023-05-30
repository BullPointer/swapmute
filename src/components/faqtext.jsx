import PropTypes from 'prop-types';

function Faqtext({handleClick, toggle, data, index}) {
    return(
      <>
      {/* <!-- start of FAQ section --> */}
      <div key={index} onClick={() => handleClick(index)}
          className={`contentbx ${toggle(index)}`}>
            <div className="label">{data.label}</div>
            <div className="content">
              <p>{data.content}</p>
            </div>
          </div>
      {/* <!-- end of FAQ section --> */}
      </>
    )
}
Faqtext.propTypes = {
  keys: PropTypes.any,
  handleClick: PropTypes.any, 
  toggle: PropTypes.any, 
  data: PropTypes.any,
  index: PropTypes.any,
}
export default Faqtext;