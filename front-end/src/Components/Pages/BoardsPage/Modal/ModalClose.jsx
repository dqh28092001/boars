import React from 'react';
import './ModalClose.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBox, FaLink } from 'react-icons/fa';
import { Link } from "react-router-dom";



const ModalClose = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlaye'>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modalContaineran'
            >

                <div className='modalRight'>
                    <p className='closeBtn' onClick={onClose}>
                        X
                    </p>
                    <div className='container-doing'>
                        <div className='closes'>
                            <h2 style={{ padding: "1pc" }}><FaBox />Bảng đã đóng</h2>
                            <div class="dropdown">
                                <button class="dropbtn">Tất cả các bảng</button>
                                <div class="dropdown-content">
                                    <Link to="#">Bảng cá nhân</Link>
                                    <Link to="#">Làm việc của tôi</Link>
                                </div>
                            </div>
                        </div>
                        
                            <div className="modal-close" >
                              <span>Chưa có bảng nào được đóng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ModalClose;
