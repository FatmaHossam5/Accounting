import React from 'react'

export default function Footer() {
  return (
    <>
      
<footer className="px-footer d-flex justify-content-between mb-3 mb-lg-0 mt-3 p-lg-5 pt-lg-2 pb-lg-2 pb-lg-0  px-card">
  <div className="left-side-foot d-none d-lg-flex align-items-center">
    <div className="copyright pe-3">
      <p className>bowerd by <a href="#">pixi agency</a></p>
    </div>
    <p className="version  ps-3"><a href="#">version 1</a></p>
  </div>
  <div className="right-side-foot d-none d-lg-flex">
    <ul className="d-flex foot-links ">
      <li><a href="#" className="ms-3 ">change log</a></li>
      <li><a href="#" className="ms-3 ">privacy</a></li>
      <li><a href="#" className="ms-3 ">terms</a></li>
    </ul>
  </div>
  <div className="mobile-footer-nav w-100 d-flex align-items-center d-lg-none">
    <ul className="d-flex justify-content-between w-100">
      <li className="w-20 d-flex justify-content-center active-foot-link"><a href="#"><i className="fa-kit fa-home---icon" /></a></li>
      <li className="w-20 d-flex justify-content-center"><a href="#"><i className="fa-kit fa-organizations" /></a></li>
      <li className="w-20 d-flex justify-content-center"><a href="#"><i className="fa-kit fa-coupons" /></a></li>
      <li className="w-20 d-flex justify-content-center"><a href="#"><i className="fa-kit-duotone fa-invoices" /></a></li>
    </ul>
  </div>
</footer>

    </>
  )
}
