import React from 'react'

import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://www.instagram.com/dhillonanimesh/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/animesh-dhillon-a3387221b/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://twitter.com/DhillonAnimesh" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
            <a href="https://github.com/aniasusual" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
        </div>
  )
}

export default SocialIcons
