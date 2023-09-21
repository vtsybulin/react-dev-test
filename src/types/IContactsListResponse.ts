import IContact from "^types/IContact.ts";

export default interface IContactsListResponse {
  total: number;
  contacts: IContact[];
}
