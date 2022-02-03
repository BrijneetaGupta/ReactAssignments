// import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <div className='employee-card'>
      <div className='card-img'>
        <img src= {employee.profileImg} alt='Employee Profile' />
      </div>
      <div className='employee-details'>
        <h2>{employee.name}</h2>
        <div className='inner-content'>
          <span>Location</span>
          <p>{employee.location}</p>
        </div>
        <div className='inner-content'>
          <span>Blood Group</span>
          <p>{employee.bloodGroup}</p>
        </div>
        <div className='inner-content'>
          <span>Age</span>
          <p>{employee.age}</p>
        </div>
      </div>
    </div>
  </div>
)
};



export default App;
