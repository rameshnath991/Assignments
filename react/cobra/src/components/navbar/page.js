'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const NavBar=(props)=> {
  console.log(props)
  return (
    <Navbar position="static">
      <NavbarBrand>
        
        <p className="font-bold text-inherit">COBRA</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
        <Button as={Link} color="primary" href="#" variant="flat"> 
       <b> <i>LogIn</i></b>
        </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
           <b><i> Sign Up </i></b>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default NavBar