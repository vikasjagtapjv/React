import React from "react";
import { contactList, getDateInFormat, IcontactDetails } from "./Constant";
import "./ContactList.css";
const ContactList = () => {
  return (
    <div className="contact-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start Date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact: IcontactDetails) => (
            <tr className="contact-details">
              <td>
                <div className="contact-Name">
                  <img src={contact.image} alt="" />
                  <span>{contact.contactName}</span>
                </div>
              </td>
              <td>
                <span>{contact.position}</span>
              </td>
              <td>
                <span>{contact.officeAddress}</span>
              </td>
              <td>
                <span>{contact.age}</span>
              </td>
              <td>
                <span>{getDateInFormat(contact.startDate, "yyyy/mm/dd")}</span>
              </td>
              <td>
                <span>{contact.salary}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
