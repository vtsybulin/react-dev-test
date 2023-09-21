import {IRequestContactsListParams} from "^api/contacts.ts";
import {COMPANY_ID} from "^configs/common.ts";

export const BASE_REQUEST_PARAMS: Pick<IRequestContactsListParams, 'companyId' | 'noGroupDuplicates'> = {
  companyId: COMPANY_ID,
  noGroupDuplicates: 1,
}
