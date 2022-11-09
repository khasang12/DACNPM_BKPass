import "../assets/styles/navbar.css";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBell,
  faBriefcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function NavigationBar() {
    return (
      <div className="navbar w-100 text-center md:text-left bg-white-100 text-[#030391] font-medium font-[Inter var] border-b-2 t-2">
      {['xxl'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="flex-col flex-grow-1 pe-3">
                    <Nav.Link href="./">
                        <FontAwesomeIcon icon={faHome} className="mr-2"/>
                        Trang chủ
                    </Nav.Link>
                    <Nav.Link>
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>
                        <NavDropdown
                        title = "Đơn hàng"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                        <NavDropdown.Item href="/buy-history">
                            Đơn mua</NavDropdown.Item>
                            <NavDropdown.Divider/>
                        <NavDropdown.Item href="/sell-history">
                            Đơn bán</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                    
                    <Nav.Link href="#">Thông báo</Nav.Link>
                    <Nav.Link href="#">Đăng nhập</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      ))}
      </div>
    );
  }
