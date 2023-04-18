import React from 'react';
import './ModalDoing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLink } from 'react-icons/fa';


const ModalDoing = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlaya'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainera'
      >

        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='container-doing'>
                        <h2 style={{padding:"1pc"}}> Mời vào Không gian làm việc</h2>

                        <div>
                            <input
                                className="modaldoing_input"
                                type="text"
                                placeholder="Địa chỉ email hoặc tên"
                            />
                        </div>

                        <div className="modal-footera">
                            <div className="modal-footer-icon">
                               <FaLink/>
                            </div>
                            <div className="modal-footer-text">
                                <span>Mời ai đó vào Không gian làm việc này bằng liên kết</span>
                                <a href="" style={{ textDecorationLine: "underline" }}>
                                    Tạo liên kết
                                </a>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>
  );
};

export default ModalDoing;
