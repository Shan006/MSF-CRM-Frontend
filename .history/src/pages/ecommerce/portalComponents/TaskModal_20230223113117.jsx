import React from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@windmill/react-ui";
  import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

const TaskModal = () => {
    const{backendUri,openTaskModal,closeTaskModal}=useContext(AuthContext);
    const [emailForm, setEmailForm] = useState({
        to: "",
        subject: "",
        message: "",
      });
      // email form handler
      const EmailFormHandler = (e) => {
        setEmailForm({
          ...emailForm,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <>
    {
    openTaskModal?
    <>
    <Modal isOpen={openTaskModal} onClose={closeTaskModal}>
    <ModalHeader>Assign Tasks</ModalHeader>
    <ModalBody>
      <div className="flex flex-col ">
        <div className="flex flex-col w-full ">
          <p className="">To</p>
          <input
            type="email"
            name="to"
            value={emailForm.to}
            onChange={EmailFormHandler}
            className=""
          />
        </div>
        <div className="flex flex-col w-full ">
          <p className="">Subject</p>
          <textarea
            cols=""
            rows="3"
            name="subject"
            value={emailForm.subject}
            onChange={EmailFormHandler}
            className=""
          />
        </div>
        <div className="flex flex-col w-full ">
          <p className="">Message</p>
          <textarea
            cols=""
            rows="6"
            name="message"
            value={emailForm.message}
            onChange={EmailFormHandler}
            className=""
          />
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button
        className="w-full sm:w-auto bg-[#1d4189] items-center text-white"
        layout="outline"
        onClick={SendMail}
      >
        Send
      </Button>
      <Button
        className="w-full sm:w-auto"
        layout="outline"
        onClick={closeTaskModal}
      >
        Cancel
      </Button>
    </ModalFooter>
    
  </Modal>
  </>:''}
  </>
  )
}

export default TaskModal