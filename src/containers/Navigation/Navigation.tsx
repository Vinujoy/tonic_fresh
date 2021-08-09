// @ts-nocheck
import React from 'react';
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useForm } from "react-hook-form";
import firebase from '../../firebase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CancelIcon from '@material-ui/icons/Cancel';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import {
  contact_head,
  mail,
  phone,
  head_office,
  issue_question,
  please_choose_location,
  use_my_location,
  otp_login
} from '../../constants/common';

const useStyles = makeStyles({
  paper: {
    borderRadius: '20px',
  },
  media: {
    height: 200,
  },
});
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navigation() {
  const classes = useStyles();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalAddressOpen, setmodalAddressOpen] = useState(false);
  const [modalLocationOpen, setmodalLocationOpen] = useState(false);
  const [modalLoginOpen, setmodalLoginOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [recaptchaClose, setrecaptchaClose] = useState(false);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  const handleClickOpen = () => {
    setmodalOpen(true);
  };
  const handleClose = () => {
    setmodalOpen(false);
  };
  const handleAddressOpen = () => {
    setmodalOpen(false);
    setmodalAddressOpen(true);
  }
  const handleAddressClose = () => {
    setmodalAddressOpen(false);
  }
  const handleLocationOpen = () => {
    setmodalLocationOpen(true);
    console.log("location", modalLocationOpen);
  }
  const handleLocationClose = () => {
    setmodalLocationOpen(false);
  }
  const handleLoginOpen = () => {
    setOtpOpen(false);
    setmodalLoginOpen(true);
    console.log("location", modalLocationOpen);
  }
  const handleLoginClose = () => {
    setmodalLoginOpen(false);
  }

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          onSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSubmit = (data) => {
    console.log("helllo ", data.mobileNumber);
    setOtpOpen(true);
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

    let number = "+91" + data.mobileNumber;
    console.log("flag of otp", number);

    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      setrecaptchaClose(true)
      console.log("Otp Sent");
    }).catch(function (error) {
      console.log(error);
    });
  };

  const onVerifyCodeSubmit = (data) => {
    console.log("inside onverifySubmit", data);
    const verificationId = data ? data.otp : '0000';
    console.log("inside onverifySubmit", verificationId);    
    let optConfirm = window.confirmationResult;
    optConfirm.confirm(verificationId)
      .then(function (result) {
        var user = result.user;
        console.log("Result" + user.phoneNumber);
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center w-14">
                  <Link to="/">
                    <img
                      className="block lg:block h-5/6 w-auto "
                      src={Logo}
                      alt="tonicFresh"
                    />
                    <img
                      className="hidden lg:hidden h-8 w-auto"
                      src={Logo}
                      alt="tonicFresh"
                    />
                  </Link>

                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link to="/about" className=" text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-normal">
                    ABOUT US
                  </Link>
                  <Link onClick={handleClickOpen} className=" text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-normal">
                    CONTACT US
                  </Link>
                  <Dialog
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                    maxWidth="sm"

                  >
                    <div className="p-10">
                      <p>{issue_question}</p>
                      <div className="grid grid-cols-2 pt-8 ">
                        <div className="col-span-1 text-center" >
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Link to="/profile" onClick={handleClose}>
                              YES
                            </Link>
                          </button>
                        </div>
                        <div className="col-span-1 text-center" >
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Link onClick={handleAddressOpen} >
                              NO
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>

                  </Dialog>
                  <Dialog
                    open={modalAddressOpen}
                    onClose={handleAddressClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    borderRadius={16}
                    className={classes.paper}
                    fullWidth
                    maxWidth="sm"
                  >
                    <div className="p-3 ">
                      <div className="pb-4 border-b-2 font-bold">{contact_head}</div>
                      <div className="grid grid-cols-2 pt-8 ">
                        <div className="col-span-1 text-center p-3" >
                          <div className="text-left " >
                            <span> <MailOutlineIcon className="block h-6 w-6  mr-2 text-green-700 " aria-hidden="true" /></span>
                            <span>demotomicfresh@gmail.com</span>
                          </div>
                          <div className="text-left pt-3">
                            <span> <PhoneIcon className="block h-6 w-6  mr-2  text-green-700 " aria-hidden="true" /></span>
                            <span>+91 2583691470</span>
                          </div>
                        </div>
                        <div className="col-span-1 p-3" >
                          <div className="text-green-700 font-semibold uppercase">
                            {head_office}
                          </div>
                          <div className="text-left pt-4">
                            <span>497 Evergreen Rd, Roseville, <br /> CA 95673 Belt <br /> Cochin, Kerala <br /> India</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                  <Link to="/orders" className=" text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-normal">
                    MY ORDERS
                  </Link>

                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end ">
                <div className="max-w-lg w-full lg:max-w-xs rounded-3xl ">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-full rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter product name"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <button onClick={handleLocationOpen} className="flex-shrink-0 bg-white p-1 mx-3 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
                  <RoomOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                  <span>Cochin</span>
                  <KeyboardArrowDownIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Dialog
                  open={modalLocationOpen}
                  onClose={handleLocationClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  fullWidth
                  maxWidth="sm"

                >
                  <div className="p-4 " >
                    <div className="grid grid-cols-12 border-b-2 ">
                      <div className=" pb-6 col-span-11 text-start">
                        <RoomOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                        <span className="uppercase font-semibold">{please_choose_location}</span>
                      </div>
                      <div className="pb-6 col-span-1 text-end">
                        <CancelIcon className="h-6 w-6 text-red-800" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 pt-8 ">
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-1 text-center p-2" >
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cochin
                        </button>
                      </div>
                      <div className="col-span-3 text-center p-2">
                        <div class="  relative flex ">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input class="w-full rounded-l-full l p-2" type="text" placeholder="" />
                          <button class="bg-primary hover:bg-green-600 rounded-r-full text-white p-2 px-2 w-1/2">
                            <NearMeOutlinedIcon className="h-5 w-5 text-white mr-2" aria-hidden="true" />
                            <span class=" rounded-ful text-base text-white ">{use_my_location}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </Dialog>
                <button className="flex-shrink-0 bg-white p-1 mx-3  text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
                  <span className="sr-only">View cart</span>
                  <ShoppingCartOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button className="flex-shrink-0 bg-white p-1  mx-3  text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
                  <span className="sr-only">View favourites</span>
                  <FavoriteBorderOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {isLoggedIn ?
                  <div>
                    <Link className="flex-shrink-0 bg-white p-1  mx-3  text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
                      <span className="sr-only">user profile</span>
                      <PersonOutlinedIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  </div> :
                  <div>
                    <button onClick={handleLoginOpen} class="bg-primary hover:bg-green-600 outline-none  text-white font-bold py-2 px-4 border border-blue-700  rounded-full ">
                      Login
                    </button>
                    <Dialog
                      open={modalLoginOpen}
                      onClose={handleLoginClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      borderRadius={16}
                      className={classes.paper}
                      fullWidth
                      maxWidth="sm"
                    >
                      <div className="py-6 pl-2">
                        <div className="grid grid-cols-12 border-b-2 ">
                          <div className=" pb-6 col-span-11 text-start">
                            <span className="pb-4  font-semibold uppercase">{otp_login}</span>
                          </div>
                          <div className="pb-6 col-span-1 text-end">
                            <CancelIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                          </div>
                        </div>
                        <div>
                          <form onSubmit={handleSubmit(onSubmit)} class="">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-center py-4">
                              Please enter your registered mobile number below
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm w-1/2 mx-auto">
                              <input
                                {...register("mobileNumber", { required: true, maxLength: 20 })}
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="mobile number"
                              />
                              {errors.mobileNumber?.type === 'required' &&
                                <p className="mt-2 text-sm text-red-600 mx-auto " id="email-error">
                                  Enter valid mobile number
                                </p>}
                            </div>
                            {!otpOpen && <div>
                              <div className="text-center mt-4 ">
                                <button type="submit" class="uppercase bg-primary hover:bg-green-600 outline-none  text-white font-semibold py-2 px-4 border border-blue-700  rounded w-1/3 ">
                                  Send otp
                                </button>
                              </div>
                            </div>}
                          </form>

                          {otpOpen && <form onSubmit={handleSubmit2(onVerifyCodeSubmit)} class="">
                            <div className="mt-1 relative rounded-md shadow-sm w-1/2 mx-auto">
                              <input
                                {...register2("otp", { required: true })}
                                type="text"
                                name="otp"
                                id="otp"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="OTP"
                              />
                            </div>
                            <div className="text-center mt-4 ">
                              <button type="submit"  class="uppercase bg-primary hover:bg-green-600 outline-none  text-white font-semibold py-2 px-4 border border-blue-700  rounded w-1/3 ">
                                Login
                              </button>
                            </div>
                          </form>}
                          {/* <div id="recaptcha" className="w-1/2"></div> */}
                          {!recaptchaClose && <div className="py-4">
                            <div id="recaptcha" className="mx-auto w-1/2"></div>
                          </div>}

                          <div className="text-center pt-3">
                              <button onClick={handleLoginOpen} class="text-xs  text-gray-400 font-semibold  px-4 ">
                                Resend OTP
                              </button>
                            </div>
                            <div className="text-center pt-3">
                              <button onClick={handleLoginOpen} class="text-xs text-gray-400 font-semibold  px-4   ">
                                Register
                              </button>
                            </div> 

                        </div>
                      </div>
                    </Dialog>
                  </div>
                }

              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <a
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendar
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">View notifications</span>
                  <NotificationsIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navigation;