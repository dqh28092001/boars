import LoadingScreen from '../../LoadingScreen';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../../Services/boardsService';
import Navbar from '../../Navbar';
import { Container, Wrapper, Title, Board, AddBoard } from './Styled';
import CreateBoard from '../../Modals/CreateBoardModal/CreateBoard';
import { useHistory } from 'react-router';

import { Link } from "react-router-dom";
import "./Boards.scss";
import "./Modal/Modal.scss";
import Modal from './Modal/Modal';
import ModalDoing from './Modal/ModalDoing';

import { FaTrello, FaSquarespace, FaHome, FaHeart, FaList, FaUser, FaAt, FaAtlas, FaUpload } from "react-icons/fa"
import ModalClose from './Modal/ModalClose';

const Boards = () => {

	// Toggle
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};

	// Modal
	const [openModala, setOpenModala] = useState(false);

	const [modalDoing, setModalDoing] = useState(false);

	const [modalClose, setModalClose] = useState(false);






	// --------------------END Toggle----------------------------------------------------

	const dispatch = useDispatch();
	const history = useHistory();
	const { pending, boardsData } = useSelector((state) => state.boards);
	const [openModal, setOpenModal] = useState(false);
	const [searchString, setSearchString] = useState('');
	const handleModalClose = () => {
		setOpenModal(false);
	};

	const handleClick = (e) => {
		history.push(`/board/${e.target.id}`);
	};

	useEffect(() => {
		getBoards(false, dispatch);
	}, [dispatch]);

	useEffect(() => {
		document.title = 'Boards | Trello Clone';
	}, []);


	return (
		<>
			{pending && <LoadingScreen />}
			<Container>
				<Navbar
					searchString={searchString}
					setSearchString={setSearchString}
				/>

				<Wrapper>
					<Title>Your Boards</Title>
					{!pending &&
						boardsData.length > 0 &&
						boardsData
							.filter((item) =>
								searchString
									? item.title
										.toLowerCase()
										.includes(
											searchString.toLowerCase()
										)
									: true
							)
							.map((item) => {
								return (
									<Board
										key={item._id}
										link={item.backgroundImageLink}
										isImage={item.isImage}
										id={item._id}
										onClick={(e) => handleClick(e)}
									>
										{item.title}
									</Board>
								);
							})}
					{!pending && (
						<AddBoard onClick={() => setOpenModal(true)}>
							Create new board
						</AddBoard>
					)}
					{openModal && <CreateBoard callback={handleModalClose} />}
				</Wrapper>

				<div className="boarda-header">
					<div className="boarda-total">
						{/* <div className='display'> */}
						<div className="left">
							<div className="nav-list">
								<Link to="/dashboard" className="nav-linka">
									<FaTrello />
									<span className="nav-linka-name">Bảng</span>
								</Link>

								{/* ------------------------------------Mẫu và trang chủ------------------------------------------------------- */}
								<Link to="/dashboard" className="nav-linka">
									<FaSquarespace />
									<span className="nav-linka-name">Mẫu</span>
								</Link>

								<Link to="/dashboard" className="nav-linka ">
									<FaHome />
									<span className="nav-linka-name">Trang Chủ</span>
								</Link>
								<hr />
								{/* --------------------------END---MẪU VÀ--Trang Chủ---------------------------------------- */}



								{/* -----------------------Bảng MODAL-CÁC khôgn gian làm vc------------------------------------------- */}

								<div className="nav-lin">
									<p className="doing-modal"> Các Không gian làm việc</p>

									<div>
										<button className='modalBtn' onClick={() => setOpenModala(true)}>+</button>
										<Modal open={openModala} onClose={() => setOpenModala(false)} />
									</div>

								</div>
								{/* -------------------------------End Modal Các khôgn gian làm vc---------------------------------------------------------------- */}


								{/* -----------------------------List côgn việc---------------------------------------------- */}
								<div className="accordion">
									{data.map((item, i) => (
										<div className="item">
											<div className="title" onClick={() => toggle(i)}>
												<span className="nav-logo">
													<div className="icon">
														<a href="">L</a>
													</div>
													<div className="text" style={{ display: "flex" }}>
														<span className="nav-logo-namea">
															Trello Không gian làm việc
														</span>
													</div>
												</span>
												<span className="change-sign" style={{ fontSize: "17px" }} >
													{selected === i ? "-" : "+"}
												</span>
											</div>
											<div
												className={selected === i ? "contenta show" : "contenta"}
											>
												<Link to="/dashboard" className="nav-linka">
													<FaTrello />
													<span className="nav-linka-name">Bảng</span>
												</Link>

												<Link to="/dashboard" className="nav-linka">
													<FaHeart />
													<span className="nav-linka-name">Điểm nổi bật</span>
												</Link>
												<Link to="/dashboard" className="nav-linka">
													<FaList />
													<span className="nav-linka-name">Hình</span>
												</Link>

												{/* ------------------------------------------------------------------------ */}

												<div className="nav-linka">
													<div className="nav-lin" style={{ display: "flex" }}>
														<Link to="/dashboard" style={{ width: "128px" }}>
															<FaUser />

															<span className="nav-linka-name" style={{ marginLeft: "12px" }}>Thành viên </span>
														</Link>
													</div>


													<div>
														<button
															onClick={() => setModalDoing(true)}
															className='modalDoingBtn'>
															+
														</button>
														<ModalDoing
															open={modalDoing}
															onClose={() => setModalDoing(false)} />
													</div>

												</div>

												<Link to="/dashboard" className="nav-linka">
													<FaAtlas />
													<span className="nav-linka-name">Cài đặt</span>
												</Link>
											</div>
										</div>
									))}
								</div>
								{/* -----------------------------List côgn việc---------------------------------------------- */}

							</div>
						</div>

						{/* ---------------------------------------Right-------------------------------------------- */}
						<div className="right">
							<span style={{ display: "flex" }}>
								<i
									class="fa-regular fa-clock"
									style={{ marginTop: "14px", marginRight: "8px", fontSize: "15px", }}
								></i>
								<p className="viewed" style={{ fontWeight: "700" }}>Đã xem gần đây</p>
							</span>

							<div className='total-project' style={{ display: "flex" }}>

								<div className='watch-total' style={{ marginRight: "1pc" }}>
									<Link to="/">
										<div className='watch-total-image'>
											<h1 style={{ marginTop: "8px" }}>Project đồ án ra trường</h1>
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXI0gh51DSoPcJwx2EM8HSsdQM_gZ3AXGFw&usqp=CAU" alt="" />
										</div>
										<div className='watch-total-icon'>
											<span><i class="fa-regular fa-star"></i></span>
										</div>
									</Link>
								</div>

								<div className='watch-total' style={{ marginRight: "1pc" }}>
									<Link to="/">
										<div className='watch-total-image'>
											<h1 style={{ marginTop: "8px" }}>Project đồ án ra trường</h1>
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXI0gh51DSoPcJwx2EM8HSsdQM_gZ3AXGFw&usqp=CAU" alt="" />
										</div>
										<div className='watch-total-icon'>
											<span><i class="fa-regular fa-star"></i></span>
										</div>
									</Link>
								</div>
							</div>

							{/* ----------------------------------------------------------Phan 2-------------------------------------------------------------------------------- */}
							<div className="job" style={{ marginTop: "2pc" }}>
								<span
									style={{
										color: "var(--ds-text-subtle,#5e6c84)",
										fontWeight: "bold",
										marginLeft: "11px",
									}}
								>
									CÁC KHÔNG GIAN LÀM VIỆC CỦA BẠN
								</span>
								<span
									className="nav-logo"
									style={{ display: "flex", }}
								>
									<div className="icon">
										<a href="">L</a>
									</div>
									<div
										className="text"
										style={{ display: "flex", marginRight: "11pc" }}
									>
										<span className="nav-logo-names">Làm việc của tôi</span>
									</div>

									<div className="table-select" style={{ display: "flex" }}>
										<Link to="/dashboard" className="nav-lists">
											<FaTrello />
											<span className="nav-linka-name">Bảng</span>
										</Link>
										<Link to="/dashboard" className="nav-lists">
											<FaList />
											<span className="nav-linka-name">Dạng xem</span>
										</Link>
										<Link to="/dashboard" className="nav-lists">
											<FaUser />
											<span className="nav-linka-name">Thành viên (5)</span>
										</Link>
										<Link to="/dashboard" className="nav-lists">
											<FaAtlas />
											<span className="nav-linka-name">Cài đặt</span>
										</Link>
										<Link
											to="/dashboard"
											className="nav-lists"
											style={{
												background: "var(--ds-background-discovery, #EDDBF4)",
											}}
										>
											<FaUpload />
											<span className="nav-linka-name">Nâng cấp</span>
										</Link>
									</div>
								</span>

								<div className='total-project' style={{ display: "flex" }}>

									<div className='watch-total' style={{ marginRight: "1pc" }}>
										<Link to="/">
											<div className='watch-total-image'>
												<h1 style={{ marginTop: "8px" }}>Project đồ án ra trường</h1>
												<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXI0gh51DSoPcJwx2EM8HSsdQM_gZ3AXGFw&usqp=CAU" alt="" />
											</div>
											<div className='watch-total-icon'>
												<span><i class="fa-regular fa-star"></i></span>
											</div>
										</Link>
									</div>

									<div className='watch-total' style={{ marginRight: "1pc" }}>

										<Link to="/" className="project-recently-4">
											<div
												className="table-text-project-4"
												style={{ textAlign: "center", fontSize: "12px", marginTop: "2pc" }}
											>
												<span className="text-project-4">Tạo bảng mới</span>
												<p>Số còn lại</p>
											</div>
											<i
												class="fa-brands fa-algolia"
												style={{ marginLeft: "11pc" }}
											></i>
											<div className="overlay-4"></div>
										</Link>
									</div>
								</div>
							</div>


							<div className="customer" style={{ marginTop: "2pc" }}>
								<div>
									<span
										style={{
											color: "var(--ds-text-subtle,#5e6c84)",
											fontWeight: "bold",
											marginLeft: "1pc",
										}}
									>
										CÁC KHÔNG GIAN LÀM VIỆC KHÁCH
										<i
											class="fa-solid fa-circle-info"
											style={{ marginLeft: "3px" }}
										></i>
									</span>
								</div>
								<div style={{ marginTop: "1pc", marginLeft: "1pc" }}>
									<i class="fa-regular fa-user"></i>
									<span style={{ fontWeight: "700", marginLeft: "3px" }}>
										Son Doan Cao's workspace
									</span>
								</div>

								{/* ------------------Project 5------------------------------------------------------------- */}
								<div className='total-project' style={{ display: "flex" }}>

									<div className='watch-total' style={{ marginRight: "1pc" }}>
										<Link to="/">
											<div className='watch-total-image'>
												<h1 style={{ marginTop: "8px" }}>Project đồ án ra trường</h1>
												<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXI0gh51DSoPcJwx2EM8HSsdQM_gZ3AXGFw&usqp=CAU" alt="" />
											</div>
											<div className='watch-total-icon'>
												<span><i class="fa-regular fa-star"></i></span>
											</div>
										</Link>
									</div>

									<div className='watch-total' style={{ marginRight: "1pc" }}>
										<Link to="/">
											<div className='watch-total-image'>
												<h1 style={{ marginTop: "8px" }}>Project đồ án ra trường</h1>
												<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXI0gh51DSoPcJwx2EM8HSsdQM_gZ3AXGFw&usqp=CAU" alt="" />
											</div>
											<div className='watch-total-icon'>
												<span><i class="fa-regular fa-star"></i></span>
											</div>
										</Link>
									</div>
								</div>
							</div>


							<div className="project-management" style={{ marginTop: "2pc" }}>
								<div>
									<span style={{ fontWeight: "700", marginLeft: "1pc" }}>
										<i
											class="fa-regular fa-user"
											style={{ marginRight: "3px" }}
										></i>
										Hoang's Tran workspace
									</span>
								</div>

								{/* ----------------------------------------------------------------------------- */}
								<div className='watch-total' style={{ marginRight: "1pc" }}>
									<Link to="/">
										<div className='watch-total-image'>
											<h1 style={{ marginTop: "8px" }}>Project đồ án ra trường</h1>
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXI0gh51DSoPcJwx2EM8HSsdQM_gZ3AXGFw&usqp=CAU" alt="" />
										</div>
										<div className='watch-total-icon'>
											<span><i class="fa-regular fa-star"></i></span>
										</div>
									</Link>
								</div>
							</div>


							<div>
								<button
									onClick={() => setModalClose(true)}
									className='modalCloseBtn'>
									Xem tất cả các bảng đã đóng
								</button>
								<ModalClose
									open={modalClose}
									onClose={() => setModalClose(false)} />
							</div>

						</div>
						{/* </div> */}
					</div>
				</div>
			</Container>
		</>
	);
};
//////////////Data list////////////////////////////
const data = [
	{
		id: 1,
	},
];
export default Boards;
