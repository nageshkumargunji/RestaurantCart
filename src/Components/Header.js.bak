import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from '@mui/material/Badge';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { useSelector, useDispatch } from "react-redux";

import Table from "react-bootstrap/esm/Table";
// import { NavLink } from "react-router-dom"
// import MenuItem from '@mui/material/MenuItem';
import { DLT } from '../redux/actions/action';

//import MailIcon from '@mui/icons-material/Mail';
const Header = () => {
    const [price, setPrice] = useState(0);
    // console.log(price);
    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);
    const dispatch = useDispatch();


    const [anchorE1, setAnchorE1] = useState(null);
    const open = Boolean(anchorE1);
    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorE1(null);
    };
    const dlt = (id) => {
        dispatch(DLT(id));
    }
    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };
    useEffect(() => {
        total();
    }, [total])


    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-4" >Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>

                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>


                    </Badge>
                </Container>
                <Menu id="basic-group" anchorEl={anchorE1} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}
                >
                    {
                        getdata.length ?
                            <div className="card_details" style={{ width: "24rem", padding: "10" }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photos</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>{
                                        getdata.map((e) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt=""></img>
                                                            </NavLink>

                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price:₹ {e.price}</p>
                                                            <p>Quantity {e.qnty}</p>
                                                            <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                            <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                        <p className="text-center" >Total:₹{price} </p>

                                    </tbody>
                                </Table>
                            </div> :
                            <div class='cart_details d-flex justify-content-center align-items-center' style={{ width: "24em", padding: 10, postion: "relative" }}>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} />
                                <p style={{ fontSize: 22 }}>your cart is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                            </div>
                    }



                </Menu>
            </Navbar>

        </>
    );
}
export default Header;

