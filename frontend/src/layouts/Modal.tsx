import { Outlet } from "react-router-dom";

const Modal = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <Outlet />
            </div>
          </div>
        </div>
    );
}

export default Modal;