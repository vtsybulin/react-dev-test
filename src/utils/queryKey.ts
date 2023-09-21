import {IRequestContactsListParams} from "^api/contacts.ts";
import QueryKey from "^enums/QueryKey.ts";

export const makeContactsQueryKey = (params: IRequestContactsListParams): [QueryKey, ...unknown[]] => [QueryKey.Contacts, params];
