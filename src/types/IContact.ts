import IBaseRecord from "./IBaseRecord.ts";

export default interface IContact extends IBaseRecord {
  first_name: string;
  last_name: string;
  email: string | null;
  phone_number: string | null;
  country_id: number | null;
}
