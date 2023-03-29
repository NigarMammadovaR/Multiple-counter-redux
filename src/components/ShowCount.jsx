import { connect } from "react-redux";

const ShowCount = (props) => {
  return (
    <div>{props.count}</div>
  )
};

function mapStateProps (state) {
  return{
    productCount: state.productCount,
    count: state.count,
    
 
  }
}
export default connect (mapStateProps) (ShowCount);