import React from 'react';
import './Modal.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const Modal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >

        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>

          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card card-registration my-4">
                  <div class="row g-0">
                    <div class="col-xl-6">
                      <div className='modal-font'>
                        <h2 >Hãy xây dựng một Không gian làm việc</h2>
                        <span >Tăng năng suất của bạn bằng cách giúp mọi người dễ dàng truy cập bảng ở một vị trí.</span>
                      </div>
                      <div class="card-body p-md-5 text-black">
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example9">Tăng Không gian làm việc</label>
                          <input type="text" id="form3Example9" class="form-control form-control-lg" placeholder='Công ty của Taco' />
                          <span className='text-cty'>Đây là tên của công ty, nhóm hoặc tổ chức của bạn.</span>

                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example90">Loại Không gian làm việc</label>
                          <input type="text" id="form3Example90" class="form-control form-control-lg" placeholder='Chọn...' />

                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example99">Mô tả Không gian làm việc Tùy chọn</label>
                          <input type="text" id="form3Example99" class="form-control form-control-lg" placeholder='Nhóm của chúng tôi tổ chức mọi thứ ở đây' />
                          <span className='text-cty'>Đưa các thành viên của bạn vào bảng với mô tả ngắn về Không gian làm việc của bạn.</span>

                        </div>

                        <button className='button-continue'>Tiếp Tục</button> 

                      </div>
                    </div>
                    <div class="col-xl-6 d-none d-xl-block">
                      <img src="https://a.trellocdn.com/prgb/assets/d1f066971350650d3346.svg"
                        alt="Sample photo" class="img-fluid"
                        style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>





  );
};

export default Modal;
