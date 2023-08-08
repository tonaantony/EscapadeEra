import { useEffect, useState } from 'react';
import "./showCompanions.css"
function ShowCompanions(prop) { // need postedjob id and a functioon to close this popup
  console.log(prop.comp_list);
  const [comp_list, setComp_list] = useState([]);
  
  useEffect((function () {
   setComp_list(prop.comp_list)
  }), []);
  const isPopupOpen = true
  
  return (

    <div className={`popup-container ${isPopupOpen ? 'active' : ''}`}>
      <div className="popup-content">
        <h1>Companions</h1>
        <table>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Profile Phto</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {comp_list.map((person, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={person.photo} height={"80px"} width={"80px"}></img></td>
                <td>{person.fullName}</td>
                <td>{person.email}</td>
                <td>{person.address}</td>
              </tr>
            ))}

          </tbody>

        </table>
        <button className="btn btn-outline-danger mt-3" onClick={() => prop.handlePopUp_comp(false, [])}>CLOSE</button>
      </div>
    </div>
  )
}

export { ShowCompanions };