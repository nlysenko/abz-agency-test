/**
 *
 * Contacts
 *
 */

import React from 'react'

import MailIcon from 'assets/svg/mail.svg'
import PhoneIcon from 'assets/svg/phone.svg'
import CellphoneIcon from 'assets/svg/cellphone.svg'

import './style.css'

const Contacts = () => {
  return (
    <ul className="contacts">
      <li className="contacts__item">
        <i className="contacts__icon">
          <MailIcon />
        </i>

        <span className="contacts__info">work.of.future@gmail.com</span>
      </li>

      <li className="contacts__item">
        <i className="contacts__icon">
          <PhoneIcon />
        </i>

        <span className="contacts__info">+38 (050) 789 24 98</span>
      </li>

      <li className="contacts__item">
        <i className="contacts__icon">
          <CellphoneIcon />
        </i>

        <span className="contacts__info">+38 (095) 556 08 45</span>
      </li>
    </ul>
  )
}

export default Contacts
