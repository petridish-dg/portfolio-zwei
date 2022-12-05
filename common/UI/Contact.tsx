import React from 'react'
import MiddleDash from '../components/MiddleDash'
import Link from 'next/link'
import s from '/styles/UI/Contact.module.scss'
import {motion as m} from 'framer-motion'

const Contact = () => {
  return (
    <div className={s.contactContainer}>
        <button>
        <p className="h1-style">
          START A PROJECT <span className="mono">↴</span>
        </p>
      </button>
      <MiddleDash textOne="GET IN TOUCH">
        <p> mail@peterdg.com </p>
      </MiddleDash>
      <m.div className={s.socialLinks}>
        <Link href={"/"}>LINKEDIN ↗ </Link>
        <Link href={"/"}>INSTAGRAM ↗ </Link>
      </m.div>
    </div>
  )
}

export default Contact