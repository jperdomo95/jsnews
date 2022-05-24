import { useState } from 'react'
import {
  DropdownContainer,
  DropdownText,
  DropdownList,
  DropdownListItem,
  DropdownBackdrop,
  DropdownImage,
  DropdownListItemText,
  DropdownCaret
} from './styled'
import { dropdownItems } from './dropdownItems'

const Dropdown = () => {
  const [open, setOpen] = useState(false)
  const handleClick = (item: any) => {
    if (item) {
      setSelectedItem(item)
    }
    setOpen(!open)
  }

  const [selectedItem, setSelectedItem] = useState({
    label: 'Select your news',
    image: ''
  }
  )
  return (
    <>
    <DropdownContainer onClick={() => handleClick('')}>
      <DropdownText>
        {selectedItem.image && (
          <DropdownImage src={selectedItem.image} alt={selectedItem.label} />
        )}
        {selectedItem.label}
      </DropdownText>
      <DropdownCaret>
        <svg width="9" height="10" viewBox="0 0 16 16"><path fill="var(--teflon)" d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path></svg>
      </DropdownCaret>
      {open && (
        <DropdownList>
          {dropdownItems.map((item, i) => (
            <DropdownListItem key={i} onClick={() => handleClick(item)}>
              <DropdownImage src={item.image} alt={item.label} />
              <DropdownListItemText>{item.label}</DropdownListItemText>
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
    {open && <DropdownBackdrop onClick={() => handleClick('')} />}
    </>
  )
}

export default Dropdown