import { Form, InputGroup, Button } from 'react-bootstrap';

const InputComponent = () => {
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
      <Form >
        <InputGroup className="mb-3">
          <InputGroup.Text>
          <i>Key</i>
          </InputGroup.Text>
          <Form.Control aria-label="Amount (to the nearest dollar)" className='btn-inputgroup-bg' />

          <InputGroup.Text >
            <Button variant="outline-success" className="rounded-circle btn-flat">
             @
            </Button>
          </InputGroup.Text>

        </InputGroup>
      </Form>
    </>
  );
}
export default InputComponent