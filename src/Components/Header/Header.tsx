import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import {Link} from 'react-router-dom'
import './index.css'

function Header (args: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Navbar>) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar expand={true} container='fluid' dark={true} {...args}>
                <Link
                    to='/'
                    relative="path"
                >
                    <img alt='Varhan logo' height={60} src='https://www.paimio.fi/uploads/2022/11/351ab27e-varha_logo_fi-1024x385.png' />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link
                                to='/directory'
                                relative="path"
                            >
                                Selaa arkistoa
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to='/directory/create/new'
                                relative="path"
                            >
                                Luo uusi arkistointi
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownMenu end>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header;
