import { Form, InputGroup, Button } from 'react-bootstrap';
import keyboard from '../../node_modules/bootstrap-icons/icons/keyboard-fill.svg'
import arrow from '../../node_modules/bootstrap-icons/icons/arrow-right-circle.svg'
import {useForm} from 'react-hook-form'



const InputComponent = () => {
  const handleSubmit = (event) =>{ 
    console.log("Succeed!");
  }

  return (
    <>
    <style type="text/css">
        {`
    

    .btn-flat {
      background-color: purple;
      color: white;
    }
    .btn-inputgroup-bg {
      background-color: #EFEFEF;
    }
    `}
      </style>
      <Form style={{marginLeft : "30%", marginRight : "20%" , border: 'solid', padding:'40px' ,borderRadius: '2%' , marginTop:'14em', position:'absolute', zIndex:'10'
          , backgroundColor: 'white'}} onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>
          <img src={keyboard} alt='keyBoard' width={'30px'} height={'30px'}/>
          </InputGroup.Text>
          <Form.Control aria-label="Amount (to the nearest dollar)" className='btn-inputgroup-bg' placeholder='What is your name?'  />

          <InputGroup.Text >
            <Button variant="outline-success" className="rounded-circle btn-flat" type="submit" >
            <img src={arrow} alt='arrow' width={'25px'} height={'30px'}/>
            </Button>
          </InputGroup.Text>

        </InputGroup>
      </Form>
    </>
  );
}
export default InputComponent