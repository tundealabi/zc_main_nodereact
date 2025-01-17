import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from '../styles/Dropdown.module.css'
const Dropdown = ({ children, title, opened }) => {
  const [isOpen, setIsOpen] = useState(opened)

  return (
    <div
      className={`${styles.container}${!isOpen ? ` ${styles.isClosed}` : ''}`}
    >
      <div className={styles.header}>
        <button
          className={styles.dropDownButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/shapekeyboardarrowdown2.svg" alt="Dropdown button" />
        </button>
        <p>{title}</p>
        <img className={styles.addButton} src="/addicon.svg" alt="Add button" />
      </div>
      <ul className={styles.content}>
        {children &&
          children.map((child, index) => {
            return (
              <li key={index} className={styles.item}>
                {child}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

Dropdown.defaultProps = {
  opened: true,
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
}

export default Dropdown
