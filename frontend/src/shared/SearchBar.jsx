// import React, { useRef } from 'react';
import './search-bar.css';
// import { Col, Form, FormGroup } from 'reactstrap';

// const SearchBar = ({ onSearch }) => {
//   const locationRef = useRef('');
//   const fromDateRef = useRef('');
//   const toDateRef = useRef('');

//   const searchHandler = () => {
//     const location = locationRef.current.value;
//     const fromDate = fromDateRef.current.value;
//     const toDate = toDateRef.current.value;
//     onSearch(location, fromDate, toDate);
//   };

//   return (
//     <Col lg="12">
//       <div className="search__bar">
//         <Form className="d-flex align-items-center gap-4">
//           <FormGroup className="d-flex gap-3 form__group form__group-fast">
//             <span>
//               <i className="ri-map-pin-line"></i>
//             </span>
//             <div>
//               <h6>Location</h6>
//               <input type="text" placeholder="Where are you going?" ref={locationRef} />
//             </div>
//           </FormGroup>
//           <FormGroup className="d-flex gap-3 form__group form__group-fast">
//             <span>
//               <i className="ri-map-pin-time-line"></i>
//             </span>
//             <div>
//               <h6>From</h6>
//               <input type="date" placeholder="fromDate k/m" ref={fromDateRef} />
//             </div>
//           </FormGroup>
//           <FormGroup className="d-flex gap-3 form__group form__group-last">
//             <span>
//               <i className="ri-map-pin-time-line"></i>
//             </span>
//             <div>
//               <h6>To</h6>
//               <input type="date" placeholder="0" ref={toDateRef} />
//             </div>
//           </FormGroup>

//           <span className="search__icon" type="button" onClick={searchHandler}>
//             <i className="ri-search-line"></i>
//           </span>
//         </Form>
//       </div>
//     </Col>
//   );
// };

// export default SearchBar;



import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = ({ onSearch }) => {
  const locationRef = useRef('');
  const fromDateRef = useRef('');
  const toDateRef = useRef('');

  const searchHandler = () => {
    const location = locationRef.current.value;
    const fromDate = fromDateRef.current.value;
    const toDate = toDateRef.current.value;
    onSearch(location, fromDate, toDate);
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>From</h6>
              <input type="date" placeholder="fromDate k/m" ref={fromDateRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-last">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>To</h6>
              <input type="date" placeholder="0" ref={toDateRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type="button" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;