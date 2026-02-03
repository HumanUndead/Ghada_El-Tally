"use client";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Link from "next/link";
import MobileHeaderSearchModel from "@src/components/Headers/MobileHeaderSearchModel";
import LoginModal from "@src/components/Headers/LoginModal";

const MobileHeader = ({ headerShow, handleHeaderClose, loginShow, handleLoginClose, handleLoginShow }: any) => {
    const [open, setOpen] = useState<any | number>(1);
    const [show, setShow] = useState(false);

    const handleClick = (id: any) => {
        setOpen(open === id ? null : id);
    };

    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <Offcanvas className="header-offcanvas" show={headerShow} onHide={handleHeaderClose} placement="start">
                <Link href="#!" className="btn offcanvas-close text-reset" onClick={handleHeaderClose}>
                    <i className="las la-times"></i>
                </Link>
                <div className="offcanvas-body p-0">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item col-6 p-0" role="presentation">
                            <button className={`nav-link text-uppercase w-100 ${open === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Menu</button>
                        </li>
                        <li className="nav-item col-6 p-0" role="presentation">
                            <button className={`nav-link text-uppercase w-100 ${open === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>Categories</button>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className={`tab-pane fade ${open === 1 ? 'show active' : ""}`}>
                            <ul className="mobile-menu-list list-unstyled mb-0 p-4">
                                <li className="py-2 border-bottom">
                                    <Link href="/" className="text-dark fs-16 fw-medium" onClick={handleHeaderClose}>Home</Link>
                                </li>
                                <li className="py-2 border-bottom">
                                    <Link href="/shop" className="text-dark fs-16 fw-medium" onClick={handleHeaderClose}>Shop</Link>
                                </li>
                                <li className="py-2 border-bottom">
                                    <Link href="/contact-us" className="text-dark fs-16 fw-medium" onClick={handleHeaderClose}>Contact us</Link>
                                </li>
                                <li className="py-2 border-bottom">
                                    <Link href="/about-us" className="text-dark fs-16 fw-medium" onClick={handleHeaderClose}>About us</Link>
                                </li>
                                
                                <li className="py-2 border-bottom mt-3">
                                    <Link href="/wishlist" className="text-muted" onClick={handleHeaderClose}>
                                        <i className="iccl iccl-heart me-2"></i> Wishlist
                                    </Link>
                                </li>
                                <li className="py-2 border-bottom">
                                    <Link href="/login" className="text-muted" onClick={handleHeaderClose}>
                                        <i className="iccl iccl-user me-2"></i> Login / Register
                                    </Link>
                                </li>
                                <li className="py-2 border-bottom">
                                    <Link href="/profile" className="text-muted" onClick={handleHeaderClose}>
                                        <i className="iccl iccl-user me-2"></i> Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={`tab-pane fade ${open === 2 ? 'show active' : ""}`}>
                            <div className="p-4 text-center text-muted">
                                Categories content will be here.
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas>
            <MobileHeaderSearchModel show={show} handleClose={handleClose} />
            <LoginModal loginShow={loginShow} handleLoginClose={handleLoginClose} />
        </React.Fragment>
    );
}

export default MobileHeader;