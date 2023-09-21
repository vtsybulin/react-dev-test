import {ReactElement, useCallback} from "react";
import IContact from "^types/IContact.ts";
import {Button} from "react-bootstrap";

interface IContactRowProps {
  contact: IContact;
  onClick: (id: IContact['id']) => void;
}

const ContactRow = ({ contact, onClick }: IContactRowProps): ReactElement => {
  const handleClick = useCallback(
    (): void => onClick(contact.id),
    [contact.id, onClick],
  );

  return (
    <>
    <tr>
      <td>{contact.id}</td>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      <td>{contact.country_id}</td>
      <td><Button onClick={handleClick}>Details</Button></td>
    </tr>
    </>
  )
}

export default ContactRow;
