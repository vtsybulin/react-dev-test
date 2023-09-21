import {AxiosResponse} from "axios";
import queryString from 'query-string';
import apiClient from "./client.ts";
import IContactsListResponse from "^types/IContactsListResponse.ts";

export type TRequestContactsListResponse = AxiosResponse<IContactsListResponse>;

export interface IRequestContactsListParams {
  companyId: number;
  query: string;
  page?: number;
  countryId?: number;
  noGroupDuplicates?: number;
}

export const requestContactsList = (params: IRequestContactsListParams): Promise<TRequestContactsListResponse> => (
  apiClient.get(`/contacts.json?${queryString.stringify(params)}`)
);
