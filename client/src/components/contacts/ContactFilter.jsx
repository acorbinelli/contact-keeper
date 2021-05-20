import React, { useContext, useRef, useEffect } from "react"
import ContactContext from "../../context/contact/contactContext"

function ContactFilter() {
  const contactContext = useContext(ContactContext)
  const text = useRef("")

  const { filterContacts, clearFilter, filtered } = contactContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ""
    }
  })

  const onChange = (e) => {
    if (text.current.value !== "") {
      contactContext.filterContacts(e.target.value)
    } else {
      contactContext.clearFilter()
    }
  }
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  )
}

export default ContactFilter
