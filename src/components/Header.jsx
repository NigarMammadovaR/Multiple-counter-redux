import { connect } from "react-redux";



const Header = (props) => {
  return (
    <div className="header1">
        <ul className="header">
            <li>Home</li>
            <li>About</li>
            <li>{props.productCount}</li>
           
        </ul>
    </div>
  )
}
function mapStateProps (state) {
    return{
   
      productCount: state.productCount,
      count: state.count,
  
      
    }
  }
export default connect (mapStateProps) (Header);