import { NextPlan } from "@mui/icons-material";
import React from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function CustomersTableItem(props) {
  let Navigate = useNavigate();

  const Next = () => {
    Navigate("/ecommerce/customers/updateCustomer", {
      state: {
        id: props.id,
        firstName: props.fname,
        lastName: props.lname,
        mobilePhone: props.mobile,
        email: props.email,
        source: props.source,
      },
    });
  };
  return (
    <tr className="overflow-x-auto">
      <td>
        <div className="ss-f ss-f--start ss-f--no-wrap flex">
          <span
            className="ss-checkbox ss-checkbox--label leadsCheckBoxFilter ss-mr--24 mx-2"
            width="50"
          >
            <input
              className="chklistitem"
              name="chklead"
              data-id="12329"
              id="customid-12329"
              type="checkbox"
              value="0"
            />
            <label for="customid-12329"></label>
          </span>

          <ul className="ss-buttons ss-f ss-f--center ss-f--no-wrap flex">
            <li className="js_tdInlineActions ss-mr--10">
              <button
                type="button"
                className="ss-white--text ss-button-svg ss-button-svg--28 ss-pa--0"
                tooltip="Add Notes"
                tooltip-flow="top"
                onclick="listingnotePopup(12329)"
                data-toggle="modal"
                id="notesPopupSideBar"
                data-target="#addNotesPopupSideBar"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="28"
                    height="28"
                    rx="6"
                    fill="#E59B5B"
                    fillOpacity="0.12"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 7.5C6.89543 7.5 6 8.39543 6 9.5V18.5C6 19.6046 6.89543 20.5 8 20.5H16.1818L22 16.7368V9.5C22 8.39543 21.1046 7.5 20 7.5H8ZM20.5 16.0667L16.4628 18.8121L17.4156 15.9905C17.5978 15.4507 18.1935 15.172 18.7247 15.378L20.5 16.0667ZM8.96387 10.3929H9.71387H16.1424H16.8924V11.8929H16.1424H9.71387H8.96387V10.3929ZM9.71387 13.9643H8.96387V15.4643H9.71387H13.9996H14.7496V13.9643H13.9996H9.71387Z"
                    fill="#E59B5B"
                  ></path>
                </svg>
              </button>
            </li>
            <li className="js_tdInlineActions ss-mr--10">
              <button
                type="button"
                className="ss-white--text ss-button-svg ss-button-svg--28 ss-pa--0"
                tooltip="Add Task"
                tooltip-flow="top"
                data-toggle="modal"
                // onClick="getCalendarPopupTrigger('tasks-popup', 12329);"
              >
                <svg
                  width="28"
                  height="28"
                  className="ss--background--task"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 9C7 7.89543 7.89543 7 9 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H9C7.89543 21 7 20.1046 7 19V9ZM13.4935 10.6358L10.6363 13.1358L10.1083 13.5979L9.61211 13.1017L8.18354 11.6732L9.2442 10.6125L10.1766 11.5449L12.5057 9.50698L13.4935 10.6358ZM10.6363 18.1358L13.4935 15.6358L12.5057 14.507L10.1766 16.5449L9.2442 15.6125L8.18354 16.6732L9.61211 18.1017L10.1083 18.5979L10.6363 18.1358ZM14.6786 11.4643H15.4286H18.4286H19.1786V12.9643H18.4286H15.4286H14.6786V11.4643ZM15.4286 16.4643H14.6786V17.9643H15.4286H18.4286H19.1786V16.4643H18.4286H15.4286Z"
                    fill="#9F4DC6"
                  ></path>
                </svg>
              </button>
            </li>
            <li className="js_tdInlineActions ss-mr--10">
              <button
                type="button"
                className="ss-white--text ss-button-svg ss-button-svg--28 ss-pa--0"
                tooltip="Add Event"
                tooltip-flow="top"
                data-toggle="modal"
                onclick="getCalendarPopupTrigger('addEventPopup', 12329);"
              >
                <svg
                  width="28"
                  height="28"
                  className="ss--background--event"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 7.99973V5.64258H8V7.99973C6.89543 7.99973 6 8.89516 6 9.99973V18.9997C6 20.1043 6.89543 20.9997 8 20.9997H20C21.1046 20.9997 22 20.1043 22 18.9997V9.99973C22 8.89516 21.1046 7.99973 20 7.99973V5.64258H18V7.99973H10ZM19.7147 11.8926H8.28613V10.3926H19.7147V11.8926ZM9 18.3212H11.8571V16.8212H9V18.3212Z"
                    fill="#DF4D5E"
                  ></path>
                </svg>
              </button>
            </li>
            <li className="js_tdInlineActions ss-mr--10">
              <button
                type="button"
                className="ss-white--text ss-button-svg ss-button-svg--28 ss-pa--0"
                tooltip="Send Email"
                tooltip-flow="top"
                onclick='emaillistpopup(12329, "Rosa Alvarenga Ruiz", "alvarengaelizabeth@gmail.com", );'
                data-toggle="modal"
                data-target="#newEmailPopUp"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="28"
                    height="28"
                    rx="6"
                    fill="#FF7043"
                    fill-opacity="0.12"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 8H6V10.0201L14 15.111L22 10.0201V8ZM22 11.7981L14.4027 16.6327L14 16.889L13.5973 16.6327L6 11.7981V20H22V11.7981Z"
                    fill="#FF7043"
                  ></path>
                </svg>
              </button>
            </li>
            <li className="js_tdInlineActions ss-mr--10">
              <button
                type="button"
                className="ss-white--text ss-button-svg ss-button-svg--28 ss-pa--0 btnCallThisNumber"
                tooltip="Call"
                tooltip-flow="top"
                // onclick="callthisNumber( '7035688788' , 12329);"
              >
                <svg
                  width="28"
                  height="28"
                  className="ss--background--call"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M8.04515 6.21996C8.04515 6.21996 6.05303 7.52824 6.21777 9.75943C6.38251 11.9906 7.35705 14.94 10.2883 17.8622C13.2196 20.7845 16.16 21.7681 18.3912 21.9328C20.6223 22.0976 21.9306 20.1054 21.9306 20.1054L17.5407 16.4635L15.0038 17.5368L12.8088 15.3418L10.6138 13.1468L11.6871 10.6099L8.04515 6.21996Z"
                      fill="#64C354"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_868_24481">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <li className="js_tdInlineActions ss-mr--10">
              <button
                type="button"
                className="ss-white--text ss-button-svg ss-button-svg--28 ss-pa--0"
                tooltip="Send SMS"
                tooltip-flow="top"
                data-toggle="modal"
                // onclick="smschatbox(12329,  'Rosa Alvarenga Ruiz' , '7035688788');"
                data-target="#smspopup"
              >
                <svg
                  width="28"
                  height="28"
                  className="ss--background--sms"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 7.5H22V21L17.5 18H6V7.5ZM16.8571 11.8929H9V10.3929H16.8571V11.8929ZM9 15.4643H13.2857V13.9643H9V15.4643Z"
                    fill="#2E66F6"
                  ></path>
                </svg>
              </button>
            </li>
            <li className="favoriteLeadBlock js_tdInlineActions hide ss-mr--10">
              <button
                type="button"
                className="ss-white--text ss-button-svg ss-button-svg--25 ss-pa--0"
                onclick="addToFavorite( 'leadFavorite12329', 12329 )"
                tooltip="Add  to Favorites"
                tooltip-flow="top"
                data-id="12329"
                id="leadFavorite12329"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  {" "}
                  <path
                    fill="#ffecb3"
                    d="M24,4l6.5,13.1L45,19.2L34.5,29.5L37,43.9l-13-6.8l-13,6.8l2.5-14.4L3,19.2l14.5-2.1L24,4z"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <span className="cursor-pointer">
                <GrDocumentUpdate className="mt-1.5 ml-1" onClick={Next} />
              </span>
            </li>
          </ul>
        </div>
      </td>
      <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-slate-800 ml-1">{props.lname}</div>
        </div>
      </td>
      <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-800 font-medium">
        <div className="text-left">{props.fname}</div>
      </td>
      {/* <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-800 font-medium">
        <div className="text-left">{props.purpose}</div>
      </td> */}
      <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-800 font-medium">
        {/* <div className="text-left">{props.status}</div> */}
        <div className="text-left">New Lead</div>
      </td>
      <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium text-slate-800">
        <div className="text-left">{props.mobile}</div>
      </td>
      <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium text-slate-800">
        <div className="text-left">{props.email}</div>
      </td>
      {/* <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium">{props.address}</div>
      </td> */}
      <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium text-slate-800">
        <div className="text-left">{props.source}</div>
      </td>
    </tr>
  );
}

export default CustomersTableItem;
