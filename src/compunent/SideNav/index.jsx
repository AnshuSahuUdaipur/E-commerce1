import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductItemContext from "../../contextAPI/ProductItemContext";
const SideNav = () => {
  const { sidebar } = useContext(ProductItemContext);
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64  dark:bg-gray-800 p-4 overflow-y-auto  transition-all duration-300 ease-in-out  ${
        sidebar ? "bg-white text-black" : "bg-zinc-700 text-white"
      } shadow-md`}
    >
      <ul className={`space-y-2 mt-[67px]`}>
        <Link to="/">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className={`w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                  sidebar ? "text-black" : "text-white"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className={`ml-3 ${sidebar ? "text-black" : "text-white"}`}>
                Dashbord
              </span>
            </a>
          </li>
        </Link>

        <li>
          <button
            type="button"
            className={`flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 defaultChecked`}
            aria-controls="dropdown-ecommerce"
            data-collapse-toggle="dropdown-ecommerce"
          >
            <svg
              className={`flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white ${
                sidebar ? "text-black" : "text-white"
              } `}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span
              className={`flex-1 ml-3 text-left whitespace-nowrap ${
                sidebar ? "text-black" : "text-white"
              }`}
            >
              Products
            </span>
            <svg
              className={`w-6 h-6 ${sidebar ? "text-black" : "text-white"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <ul id="dropdown-ecommerce" className={`hidden py-2 space-y-2 `}>
            <li>
              <Link
                to="/productitem-list"
                className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${
                  sidebar ? "text-black" : "text-white"
                } dark:text-white dark:hover:bg-gray-700 pl-11`}
              >
                List
              </Link>
            </li>
            <li>
              <Link
                to="/product-Grid"
                className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${
                  sidebar ? "text-black" : "text-white"
                } dark:text-white dark:hover:bg-gray-700 pl-11`}
              >
                Grid
              </Link>
            </li>
            <li>
              <Link
                to="/product-datials"
                className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${
                  sidebar ? "text-black" : "text-white"
                } dark:text-white dark:hover:bg-gray-700 pl-11`}
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                to="/product-edit"
                className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${
                  sidebar ? "text-black" : "text-white"
                } dark:text-white dark:hover:bg-gray-700 pl-11`}
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="/product-form"
                className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${
                  sidebar ? "text-black" : "text-white"
                } dark:text-white dark:hover:bg-gray-700 pl-11`}
              >
                Create
              </Link>
            </li>
          </ul>
        </li>

        {/* Remove duplicated entry for E-commerce */}
        <li>
  <button
    type="button"
    className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700`}
    aria-controls="dropdown-another"
    data-collapse-toggle="dropdown-another"
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 ${sidebar ? 'text-black' : 'text-white'} dark:text-gray-400 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 text-left whitespace-nowrap">Category</span>
    <svg className={`w-6 h-6 ${sidebar ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
  <ul id="dropdown-another" className="hidden py-2 space-y-2">
    <li>
      <Link
        to="category-List"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        List
      </Link>
    </li>
    <li>
      <Link
        to="/category-edit"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Edit
      </Link>
    </li>
    <li>
      <Link
        to="/category-form"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Create
      </Link>
    </li>
  </ul>
</li>

<li>
  <button
    type="button"
    className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700`}
    aria-controls="dropdown-reports"
    data-collapse-toggle="dropdown-reports"
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 ${sidebar ? 'text-black' : 'text-white'} dark:text-gray-400 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H5zm1 14V4h10v12H6z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 text-left whitespace-nowrap">Invoice</span>
    <svg className={`w-6 h-6 ${sidebar ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
  <ul id="dropdown-reports" className="hidden py-2 space-y-2">
    <li>
      <Link
        to="/invoice/list"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        List
      </Link>
    </li>
    <li>
      <Link
        to="/create"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Create
      </Link>
    </li>
  </ul>
</li>

<li>
  <button
    type="button"
    className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700`}
    aria-controls="dropdown-settings"
    data-collapse-toggle="dropdown-settings"
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 ${sidebar ? 'text-black' : 'text-white'} dark:text-gray-400 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 text-left whitespace-nowrap">Attribute</span>
    <svg className={`w-6 h-6 ${sidebar ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
  <ul id="dropdown-settings" className="hidden py-2 space-y-2">
    <li>
      <Link
        to="/attribute-list"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        List
      </Link>
    </li>
    <li>
      <Link
        to="/attribute-edit"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Edit
      </Link>
    </li>
    <li>
      <Link
        to="/attribute-create"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Create
      </Link>
    </li>
  </ul>
</li>


<li>
  <button
    type="button"
    className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700`}
    aria-controls="dropdown-profile"
    data-collapse-toggle="dropdown-profile"
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 ${sidebar ? 'text-gray-500' : 'text-gray-400'} dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 text-left whitespace-nowrap">Order</span>
    <svg
      className={`w-6 h-6 ${sidebar ? 'text-gray-500' : 'text-gray-400'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
  <ul id="dropdown-profile" className="hidden py-2 space-y-2">
    <li>
      <Link
        to="/order-list"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        List
      </Link>
    </li>
    <li>
      <Link
        to="/order-details"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Details
      </Link>
    </li>
    <li>
      <Link
        to="/order-cart"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Cart
      </Link>
    </li>
    <li>
      <Link
        to="/order-checkout"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        CheckOut
      </Link>
    </li>
  </ul>
</li>

<li>
  <button
    type="button"
    className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700`}
    aria-controls="dropdown-notifications"
    data-collapse-toggle="dropdown-notifications"
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 ${sidebar ? 'text-gray-500' : 'text-gray-400'} dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 text-left whitespace-nowrap">Notifications</span>
    <svg
      className={`w-6 h-6 ${sidebar ? 'text-gray-500' : 'text-gray-400'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
  <ul id="dropdown-notifications" className="hidden py-2 space-y-2">
    <li>
      <Link
        to="/notifications-all"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        All Notifications
      </Link>
    </li>
    <li>
      <Link
        to="/notifications-messages"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Messages
      </Link>
    </li>
    <li>
      <Link
        to="/notifications-alerts"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Alerts
      </Link>
    </li>
  </ul>
</li>

<li>
  <button
    type="button"
    className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'bg-white text-black' : 'bg-zinc-700 text-white'} dark:text-white dark:hover:bg-gray-700`}
    aria-controls="dropdown-settings"
    data-collapse-toggle="dropdown-settings"
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 ${sidebar ? 'text-gray-500' : 'text-gray-400'} dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 text-left whitespace-nowrap">Settings</span>
    <svg
      className={`w-6 h-6 ${sidebar ? 'text-gray-500' : 'text-gray-400'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
  <ul id="dropdown-settings" className="hidden py-2 space-y-2">
    <li>
      <Link
        to="/settings-general"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        General
      </Link>
    </li>
    <li>
      <Link
        to="/settings-account"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Account
      </Link>
    </li>
    <li>
      <Link
        to="/settings-privacy"
        className={`flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 ${sidebar ? 'text-black' : 'text-white'} dark:text-white dark:hover:bg-gray-700 pl-11`}
      >
        Privacy
      </Link>
    </li>
  </ul>
</li>

<li>
  <a
    href="#"
    className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${sidebar ? 'text-black' : 'text-white'} dark:text-white`}
  >
    <svg
      className={`w-6 h-6 transition duration-75 ${sidebar ? 'text-gray-500' : 'text-gray-400'} group-hover:text-gray-900 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
    </svg>
    <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
      Pro
    </span>
  </a>
</li>

<li>
  <a
    href="#"
    className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${sidebar ? 'text-black' : 'text-white'} dark:text-white`}
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 ${sidebar ? 'text-gray-500' : 'text-gray-400'} group-hover:text-gray-900 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
      3
    </span>
  </a>
</li>

<li>
  <a
    href="#"
    className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${sidebar ? 'text-black' : 'text-white'} dark:text-white`}
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 ${sidebar ? 'text-gray-500' : 'text-gray-400'} group-hover:text-gray-900 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
  </a>
</li>

<li>
  <a
    href="#"
    className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${sidebar ? 'text-black' : 'text-white'} dark:text-white`}
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 ${sidebar ? 'text-gray-500' : 'text-gray-400'} group-hover:text-gray-900 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
  </a>
</li>
        <li>
  <a
    href="#"
    className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${sidebar ? 'text-black' : 'text-white'} dark:text-white`}
  >
    <svg
      className={`flex-shrink-0 w-6 h-6 transition duration-75 ${sidebar ? 'text-gray-500' : 'text-gray-400'} group-hover:text-gray-900 dark:group-hover:text-white`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
  </a>
</li>

      </ul>
    </aside>
  );
};

export default SideNav;
