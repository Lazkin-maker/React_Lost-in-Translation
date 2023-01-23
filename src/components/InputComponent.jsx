// // import {useForm} from 'react-hook-form'



// const InputComponent = () => {


//   return (
//     <>
//     <style type="text/css">
//         {`


//     .btn-flat {
//       background-color: purple;
//       color: white;
//     }
//     .btn-inputgroup-bg {
//       background-color: #EFEFEF;
//     }
//     `}
//       </style>
//       <Form style={{marginLeft : "30%", marginRight : "20%" , border: 'solid', padding:'40px' ,borderRadius: '2%' , marginTop:'14em', position:'absolute', zIndex:'10'
//           , backgroundColor: 'white'}} onSubmit={handleSubmit}>
//         <InputGroup className="mb-3">
//           <InputGroup.Text>
//           <img src={keyboard} alt='keyBoard' width={'30px'} height={'30px'}/>
//           </InputGroup.Text>
//           <Form.Control aria-label="Amount (to the nearest dollar)" className='btn-inputgroup-bg' placeholder='What is your name?'  />

//           <InputGroup.Text >
//             <Button variant="outline-success" className="rounded-circle btn-flat" type="submit" >
//             <img src={arrow} alt='arrow' width={'25px'} height={'30px'}/>
//             </Button>
//           </InputGroup.Text>

//         </InputGroup>
//       </Form>
//     </>
//   );
// }
// export default InputComponent

import { Form, InputGroup, Container } from 'react-bootstrap';
import { useState } from 'react'



const InputComponent = ({ handleSubmit, ariaLabel, placeholder, inputBorder }) => {
  const [value, setValue] = useState(''); // Declare a state variable...

  return (
    <>
      <style type="text/css">
        {`
        .btn-flat {
           background-color: white;
           color: white;
         }
         .btn-inputgroup-bg {
           background-color: #EFEFEF;
         }
        .input-group-text {
          border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        }
    `}
      </style>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3" style={{ border: ' 2px solid', borderRadius: '2rem', borderColor: `${inputBorder}` }}>
            <InputGroup.Text>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-keyboard" viewBox="0 0 16 16">
                  <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z" />
                  <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z" />
                </svg>
              </i>
            </InputGroup.Text>
            <Form.Control
              aria-label={ariaLabel}
              placeholder={placeholder}
              className='btn-inputgroup-bg'
              value={value}
              onChange={e => setValue(e.target.value)}
              style={{ borderLeft: 'none', borderRight: 'none' }} />

            <InputGroup.Text >
              <button
                variant="outline-success"
                className="rounded-circle btn-flat"
                disabled={!value}
                type="submit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30" fill="#845EC2" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </button>
            </InputGroup.Text>

          </InputGroup>
        </Form>
      </Container>
    </>
  );
}

export default InputComponent