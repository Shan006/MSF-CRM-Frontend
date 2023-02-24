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
    const{backendUri,taskModal,setTaskModal}=useContext(AuthContext);
  return (
    <Modal isOpen={taskModal} onClose={setTaskModal(false)}>
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
        onClick={closeModal}
      >
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default TaskModal