import React from "react";
import "./style.css";
import girlSvg from "../assets/icons/girl-photo.svg";
import logo from "../assets/icons/logo.svg";
import lineSvg from "../assets/icons/line.svg";
import ham from "../assets/icons/hamburger.svg";
import headAvatar from "../assets/icons/head-avatar.svg";

const EmailVerify = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="container h-full w-full relative">
      <div
        className={`notification-modal absolute ${
          modal === true ? "" : "hidden"
        }`}
      >
        <div className="notification-modal-body">
          <h2 className="text-[#0FBD3B] text-3xl">
            Verification Successful!!!
          </h2>
          <img src={headAvatar} alt="" />
          <p>
            Congratulations! The verification process was successful. Now, you
            are expected to fill the KYC form to help us know more about you.
          </p>
          <button className="btn m-4">Proceed</button>
        </div>
      </div>
      <div
        className={`lg:grid h-full w-full grid-cols-2 ipad-full ${
          modal === true ? "blur-fx" : ""
        }`}
      >
        <div className="">
          <div className="logo flex justify-between px-8 lg:hidden mt-2 w-full ipad-ham">
            <img src={logo} alt="logo" className="w-20 logo-img" />
            <img src={ham} alt="" className="hambuger w-9 " />
          </div>
          <div className="w-606px p-12 pl-20 bg-accent1">
            <div className="logo mt-2 mb-28">
              <img src={logo} alt="logo" />
            </div>
            <div className="girl-img">
              <img className="w-96" src={girlSvg} alt="" />
            </div>
            <div className="typography">
              <p className="text-lg font-normal leading-8 text-center mt-6 txt-color">
                When you verify email address, your email marketing is more
                effective, fraud prevention is improved and the ability to
                protect your sender reputation increases.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-full lg:mx-16 lg:mt-32 vm">
          <div className="verify-container">
            <div className="typography mb-6">
              <h2 className="text-center font-bold text-3xl responsive">
                Email Address Verification
              </h2>
              <div className="img-box mb-12">
                <img src={lineSvg} className="img" alt="curve-line" />
              </div>
              <p className="lg:font-normal typo">
                We sent a 4-digit code to{" "}
                <strong className="text-email">nebo*****@gmail.com</strong>{" "}
              </p>
              <p className="font-normal typo">
                Code expires in <strong>10 minutes</strong>
              </p>
            </div>
            <form className="form-container">
              <p className="verify-p">Verification Code</p>
              <div className="input-box flex lg:w-full">
                <input type="text" className="form-control " />
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
              </div>

              <p className="font-normal typo">
                Didn’t get a code?{" "}
                <button className="resend">Resend Code</button>
              </p>
              <div className="form-btn w-full my-8 rounded-lg">
                <button className="btn w-full">Verify</button>
              </div>
            </form>
          </div>
          <footer className="footer lg:mt-24">
            <p className="text-center">
              Already have an account?{" "}
              <strong className="resend">Login In</strong>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
