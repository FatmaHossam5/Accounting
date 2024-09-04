import React from 'react'
import user from '../../../assets/images/user2-160x160.jpg'

export default function Header() {
  return (
    <>

      <header>
        <div className="px-card  ">
          <div className="upper-header ps-3 pe-3 pt-2 pb-2  p-lg-3 d-flex align-items-center">
            <div className="left-side-links w-50 d-flex">
              <div className="collaps-btn p-2 d-lg-none"><i className="fas fa-bars" /></div>

            </div>
            <div className="header-middle-part d-lg-none">
              <span className="logo text-center  p-0">PMS</span>
            </div>
            <div className="right-side-links w-40 d-flex justify-content-end ms-auto">
              <div className="notifications me-2 p-2 light-shadow">
             <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate(4px, -3px)'}}>
  <path fillRule="evenodd" clipRule="evenodd" d="M10.0013 14.8724C14.7007 14.8724 16.8747 14.2695 17.0846 11.8498C17.0846 9.43168 15.5689 9.58717 15.5689 6.62027C15.5689 4.3028 13.3723 1.66602 10.0013 1.66602C6.63028 1.66602 4.43368 4.3028 4.43368 6.62027C4.43368 9.58717 2.91797 9.43168 2.91797 11.8498C3.12876 14.2787 5.30278 14.8724 10.0013 14.8724Z" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M11.9914 17.3809C10.8546 18.6431 9.08125 18.6581 7.93359 17.3809" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

                <span className="badge text-bg-danger notification-number ">2</span>
              </div>
              <label className="theme-mode d-none d-lg-flex align-items-center justify-content-between ms-2 light-shadow " htmlFor="theme-mode">
                <span className="light-mode  p-2">

                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#FF0000" xmlns="http://www.w3.org/2000/svg"style={{transform: 'translate(8px, -2px)'}}>
                    <path d="M8 12C7.20887 12 6.43552 11.7654 5.77772 11.3259C5.11992 10.8864 4.60723 10.2616 4.30448 9.53073C4.00173 8.79983 3.92252 7.99556 4.07686 7.21964C4.2312 6.44371 4.61216 5.73098 5.17157 5.17157C5.73098 4.61216 6.44371 4.2312 7.21964 4.07686C7.99556 3.92252 8.79983 4.00173 9.53073 4.30448C10.2616 4.60723 10.8864 5.11992 11.3259 5.77772C11.7654 6.43552 12 7.20887 12 8C11.9987 9.06046 11.5768 10.0771 10.827 10.827C10.0771 11.5768 9.06046 11.9987 8 12ZM8 5C7.40666 5 6.82664 5.17595 6.33329 5.50559C5.83994 5.83524 5.45542 6.30377 5.22836 6.85195C5.0013 7.40013 4.94189 8.00333 5.05764 8.58527C5.1734 9.16721 5.45912 9.70176 5.87868 10.1213C6.29824 10.5409 6.83279 10.8266 7.41473 10.9424C7.99667 11.0581 8.59987 10.9987 9.14805 10.7716C9.69623 10.5446 10.1648 10.1601 10.4944 9.66671C10.8241 9.17336 11 8.59334 11 8C10.9991 7.20463 10.6827 6.44211 10.1203 5.8797C9.55789 5.31729 8.79537 5.00093 8 5ZM8.5 2.5V0.5C8.5 0.367392 8.44732 0.240215 8.35355 0.146447C8.25979 0.0526784 8.13261 0 8 0C7.86739 0 7.74021 0.0526784 7.64645 0.146447C7.55268 0.240215 7.5 0.367392 7.5 0.5V2.5C7.5 2.63261 7.55268 2.75979 7.64645 2.85355C7.74021 2.94732 7.86739 3 8 3C8.13261 3 8.25979 2.94732 8.35355 2.85355C8.44732 2.75979 8.5 2.63261 8.5 2.5ZM12.2425 4.4645L13.6565 3.05C13.7054 3.00417 13.7445 2.94899 13.7717 2.88773C13.7988 2.82647 13.8133 2.76038 13.8144 2.69339C13.8155 2.6264 13.8031 2.55988 13.778 2.49777C13.7529 2.43566 13.7155 2.37924 13.6682 2.33185C13.6208 2.28446 13.5644 2.24706 13.5023 2.2219C13.4402 2.19673 13.3737 2.18429 13.3067 2.18534C13.2397 2.18638 13.1736 2.20087 13.1124 2.22795C13.0511 2.25504 12.9959 2.29416 12.95 2.343L11.536 3.7575C11.4882 3.80362 11.4502 3.8588 11.4239 3.9198C11.3977 3.9808 11.384 4.04641 11.3834 4.1128C11.3828 4.17919 11.3954 4.24503 11.4206 4.30648C11.4457 4.36793 11.4829 4.42375 11.5298 4.4707C11.5767 4.51764 11.6326 4.55477 11.694 4.57991C11.7555 4.60505 11.8213 4.6177 11.8877 4.61713C11.9541 4.61655 12.0197 4.60276 12.0807 4.57655C12.1417 4.55035 12.1964 4.51226 12.2425 4.4645ZM16 8C16 7.86739 15.9473 7.74021 15.8536 7.64645C15.7598 7.55268 15.6326 7.5 15.5 7.5H13.5C13.3674 7.5 13.2402 7.55268 13.1464 7.64645C13.0527 7.74021 13 7.86739 13 8C13 8.13261 13.0527 8.25979 13.1464 8.35355C13.2402 8.44732 13.3674 8.5 13.5 8.5H15.5C15.6326 8.5 15.7598 8.44732 15.8536 8.35355C15.9473 8.25979 16 8.13261 16 8ZM13.657 13.6565C13.7507 13.5627 13.8034 13.4356 13.8034 13.303C13.8034 13.1704 13.7507 13.0433 13.657 12.9495L12.2425 11.5355C12.1482 11.4444 12.0219 11.394 11.8908 11.3952C11.7597 11.3963 11.6343 11.4489 11.5416 11.5416C11.4489 11.6343 11.3963 11.7597 11.3952 11.8908C11.394 12.0219 11.4444 12.1482 11.5355 12.2425L12.9495 13.6565C13.0433 13.7502 13.1704 13.8029 13.303 13.8029C13.4356 13.8029 13.5632 13.7502 13.657 13.6565ZM8.5 15.5V13.5C8.5 13.3674 8.44732 13.2402 8.35355 13.1464C8.25979 13.0527 8.13261 13 8 13C7.86739 13 7.74021 13.0527 7.64645 13.1464C7.55268 13.2402 7.5 13.3674 7.5 13.5V15.5C7.5 15.6326 7.55268 15.7598 7.64645 15.8536C7.74021 15.9473 7.86739 16 8 16C8.13261 16 8.25979 15.9473 8.35355 15.8536C8.44732 15.7598 8.5 15.6326 8.5 15.5ZM3.05 13.6565L4.4645 12.2425C4.51226 12.1964 4.55035 12.1412 4.57655 12.0802C4.60276 12.0192 4.61655 11.9536 4.61713 11.8872C4.6177 11.8208 4.60505 11.755 4.57991 11.6935C4.55477 11.6321 4.51764 11.5762 4.4707 11.5293C4.42375 11.4824 4.36793 11.4452 4.30648 11.4201C4.24503 11.3949 4.17919 11.3823 4.1128 11.3829C4.04641 11.3835 3.9808 11.3972 3.9198 11.4234C3.8588 11.4497 3.80362 11.4877 3.7575 11.5355L2.343 12.95C2.24925 13.0438 2.1966 13.171 2.19665 13.3037C2.1967 13.4363 2.24943 13.5635 2.34325 13.6573C2.43707 13.751 2.56429 13.8036 2.69693 13.8036C2.82956 13.8036 2.95675 13.7508 3.0505 13.657L3.05 13.6565ZM3 8C3 7.86739 2.94732 7.74021 2.85355 7.64645C2.75979 7.55268 2.63261 7.5 2.5 7.5H0.5C0.367392 7.5 0.240215 7.55268 0.146447 7.64645C0.0526784 7.74021 0 7.86739 0 8C0 8.13261 0.0526784 8.25979 0.146447 8.35355C0.240215 8.44732 0.367392 8.5 0.5 8.5H2.5C2.63261 8.5 2.75979 8.44732 2.85355 8.35355C2.94732 8.25979 3 8.13261 3 8ZM4.4645 4.4645C4.55824 4.37074 4.61089 4.24358 4.61089 4.111C4.61089 3.97842 4.55824 3.85126 4.4645 3.7575L3.05 2.343C3.00355 2.29654 2.94839 2.25969 2.8877 2.23455C2.827 2.20941 2.76195 2.19647 2.69625 2.19647C2.63055 2.19647 2.5655 2.20941 2.5048 2.23455C2.44411 2.25969 2.38896 2.29654 2.3425 2.343C2.29604 2.38946 2.25919 2.44461 2.23405 2.5053C2.20891 2.566 2.19597 2.63105 2.19597 2.69675C2.19597 2.76245 2.20891 2.8275 2.23405 2.8882C2.25919 2.94889 2.29604 3.00404 2.3425 3.0505L3.757 4.4645C3.85076 4.55824 3.97792 4.61089 4.1105 4.61089C4.24308 4.61089 4.37074 4.55824 4.4645 4.4645Z" fill="white" />
                  </svg>


                </span>
                <span className="dark-mode p-2">

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6125 9.087C16.5502 9.05324 16.4795 9.03785 16.4087 9.04263C16.338 9.04741 16.27 9.07216 16.2128 9.114C15.3181 9.77126 14.2367 10.1252 13.1265 10.1242C12.1543 10.1257 11.2007 9.85672 10.3726 9.34741C9.54436 8.8381 8.87411 8.10851 8.43672 7.24019C7.99933 6.37186 7.81202 5.39901 7.89574 4.43035C7.97945 3.4617 8.33089 2.5354 8.91077 1.755C8.95308 1.69803 8.97836 1.63023 8.98367 1.55947C8.98898 1.48871 8.97411 1.41789 8.94077 1.35525C8.90884 1.29137 8.85862 1.23844 8.79652 1.20319C8.73442 1.16793 8.66324 1.15194 8.59202 1.15725C7.07212 1.22782 5.60535 1.73786 4.36956 2.62551C3.13378 3.51316 2.18208 4.74029 1.62987 6.15808C1.07766 7.57588 0.94867 9.12344 1.25853 10.6131C1.5684 12.1027 2.3038 13.4705 3.37558 14.5505C4.44735 15.6305 5.80945 16.3763 7.29669 16.6975C8.78393 17.0188 10.3324 16.9016 11.7544 16.3602C13.1764 15.8189 14.4107 14.8766 15.3078 13.6476C16.2049 12.4187 16.7261 10.9558 16.8083 9.4365C16.812 9.36569 16.7956 9.29528 16.761 9.23342C16.7263 9.17156 16.6749 9.12079 16.6125 9.087ZM8.96252 16.1242C7.1693 16.1257 5.4417 15.4498 4.12556 14.2319C2.80942 13.0139 2.00188 11.3438 1.86459 9.55581C1.7273 7.76786 2.2704 5.99402 3.38517 4.58941C4.49994 3.18479 6.1041 2.25307 7.87652 1.98075C7.38381 2.86548 7.12563 3.86156 7.12652 4.87425C7.12831 6.465 7.76102 7.99008 8.88586 9.11491C10.0107 10.2397 11.5358 10.8725 13.1265 10.8742C14.1224 10.8753 15.1025 10.6256 15.9765 10.1482C15.7068 11.8147 14.8532 13.3309 13.5682 14.4257C12.2832 15.5206 10.6507 16.1226 8.96252 16.1242Z" fill="#C7C7C7" />
                  </svg>


                </span>
                <input id="theme-mode" className="d-none" type="checkbox" />
                <span className="slide" />
              </label>
              <div className="user d-none d-lg-flex ms-4 ">
                <div className="user-image me-2"><img src={user} alt="user photo" /></div>
              </div>
            </div>
          </div>
          <div className="mobile-search w-90 pb-2 m-auto">
            <div className="header-search d-lg-none d-flex w-100">
              <input className="px-form-input ps-5" type="search" placeholder="search" />
              <i className="fa-kit fa-search" />
            </div>
          </div>
        </div>
        {/* start mobile sidebar */}
        {/* <div className="collaps-side-links ">
    <div className="mobile-side-head p-2">
      <div className="close-mobile-side-btn d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-xmark" />
      </div>
      <div className="user d-flex ms-2 align-items-center">
        <div className="user-image me-2"><img src="assets/images/user2-160x160.jpg" alt="user photo" /></div>
        <div className="user-name ">yasser ahmed</div>
      </div>
    </div>
    <div className="mobile-side-links p-3">
      <ul className="mt-3">
        <li className>
          <a href="https://adminlte.io/docs/3.1/" className="side-link">
            <div className="d-flex pt-2 pb-2 align-items-center ">
              <div className="icon pe-3 "><img src="assets/images/icons/gray-icons/Notification.svg" alt /></div>
              <span>notifications</span>
            </div>
          </a>
        </li>
        <li className>
          <a href="#" className="side-link">
            <div className="d-flex pt-2 pb-2 align-items-center ">
              <div className="icon pe-3 "><img src="assets/images/icons/gray-icons/Edit Square.svg" alt />
              </div>
              <span>forms</span>
            </div>
          </a>
        </li>
        <li className>
          <a href="#" className="side-link">
            <div className="d-flex pt-2 pb-2 align-items-center ">
              <div className="icon pe-3 "><img src="assets/images/icons/gray-icons/Upload.svg" alt />
              </div>
              <span>exports</span>
            </div>
          </a>
        </li>
        <li className>
          <a href="#" className="side-link">
            <div className="d-flex pt-2 pb-2 align-items-center ">
              <div className="icon pe-3 "><img src="assets/images/icons/gray-icons/Bookmark.svg" alt />
              </div>
              <span>back up &amp; restore</span>
            </div>
          </a>
        </li>
        <li className>
          <a href="pages/gallery.html" className="side-link">
            <div className="d-flex pt-2 pb-2 align-items-center ">
              <div className="icon pe-3 "><img className="blue-icon" src="assets/images/icons/gray-icons/Folder.svg" alt="icon" />
              </div>
              <span>
                reports
              </span>
            </div>
          </a>
        </li>
        <li className>
          <a href="pages/gallery.html" className="side-link">
            <div className="d-flex pt-2 pb-2 align-items-center ">
              <i className="me-3 fa-solid fa-gear" />
              <span>
                settings
              </span>
            </div>
          </a>
        </li>
        <li className>
          <a href="pages/gallery.html" className="side-link">
            <div className="d-flex pt-2 pb-2 align-items-center ">
              <i className="me-3 fa-solid fa-mobile-screen-button" />
              <span>
                about the app
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="logout p-3">
      <i className="me-3 fa-solid fa-arrow-right-from-bracket" /> log out
    </div>
    <div className="mobile-side-footer d-flex align-items-center flex-column">
      <div>powerd by pixi agency</div>
      <span>v.1</span>
    </div>
  </div>  */}

      </header>

    </>
  )
}
