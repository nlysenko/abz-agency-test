/**
 *
 * Resources
 *
 */

import React from 'react'

import './style.css'

const LinksArr = [
  [
    { name: 'News', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Partners', url: '#' },
    { name: 'Shop', url: '#' },
  ],

  [
    { name: 'Overview', url: '#' },
    { name: 'Design', url: '#' },
    { name: 'Code', url: '#' },
    { name: 'Collaborate', url: '#' },
  ],
  [
    { name: 'Tutorials', url: '#' },
    { name: 'Resources', url: '#' },
    { name: 'Guides', url: '#' },
    { name: 'Examples', url: '#' },
  ],
  [
    { name: 'FAQ', url: '#' },
    { name: 'Terms', url: '#' },
    { name: 'Conditions', url: '#' },
    { name: 'Help', url: '#' },
  ],
]

const Resources = () => {
  return (
    <div className="resources">
      {LinksArr.map((arr, i) => (
        <ul className="resources__list" key={i}>
          {arr.map((link, i) => (
            <li className="resources__item" key={i}>
              <a className="resources__link" src={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default Resources
