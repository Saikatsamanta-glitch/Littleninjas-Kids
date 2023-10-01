"use client"
import { Button } from './ui/button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-[#FBEDC9] ">
      <Container fluid>
        <Link href="/" className='flex items-center no-underline'>
                <img src="/brand.png" alt="brand" className='h-[80px] ' />
                <span className='h3  text-secondary mt-2'>LittleNinjas </span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" md:m-auto my-2 my-lg-0 flex items-center h4 md:w-[700px] sm:gap-y-4   gap-x-7 nav_container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link disabled href='/about' >About</Link>
            
            <NavDropdown disabled title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Link href="/dashboard" >
              Dashboard
            </Link>
            <Link href="/events" >
              Events <span className='animate-ping'>🔥</span>
            </Link>
            <Link href="/blog"> Blog </Link>
          </Nav>
          <div className='flex items-center gap-3 me-5'>
          <Button size="lg" variant="outline" className='text-2xl font-normal h-11 hover:bg-[#FFDF8C] '>Login</Button>
          <a target="_blank" href="https://discord.gg/92bgxH4EU8" className="text-decoration-none"> <Button  size="lg" className='text-decoration-none bg-[#FFDF8C] text-2xl font-normal border-2 border-black/75  outline-2 text-[#545454] flex gap-3 hover:text-white'> <img src="/discord.png" className='h-[85%]' alt="" /> Discord</Button></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;