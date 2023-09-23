import Offcanvas from 'react-bootstrap/Offcanvas';

function RegisterCanva({show, setShow}:any) {
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Offcanvas className="w-52" show={show} placement={'end'} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src="/brand.png" alt="" className='h-11' /> LittleNinjas </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RegisterCanva;