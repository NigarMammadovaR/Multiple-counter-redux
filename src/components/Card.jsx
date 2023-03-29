import { connect } from "react-redux";
import image from "../styles/images/offwhite.webp";

const styles = {
    border: '1px solid black',
    width: "150px",
    height: "300px"
}
const Card = (props) => {
  
  return (
    <div style={styles} className="card">
      <img src={image} alt="" />
        <button onClick={() => {
            props.dispatch ({type: "ADD_TO_CARD"})
        }}>Add to card</button>
    </div>
  )
}
function mapStateProps (state) {
  return{
    
    productCount: state.productCount,
    count: state.count,
    
  }
}
export default connect (mapStateProps) (Card);