import { connect } from "react-redux";



const Counter = (props) => {

  return (
    <div>
        <h2>Counter</h2>
        <p onClick={() => console.log(props)}>Counter</p>
        <button onClick={() => {
            props.dispatch ({type: "DECREMENT"})
        }}>-</button>
        <button onClick={() => {
            props.dispatch ({type: "INCREMENT"})
        }}>+</button>
    </div>
  );
};


function mapStateProps (state){
    return{
      productCount: state.productCount,
      count: state.count,
 
    
       
    }
}
export default connect (mapStateProps) (Counter);