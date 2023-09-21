import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IRequestContactsListParams, requestContactsList, TRequestContactsListResponse} from "^api/contacts.ts";
import IContactsListResponse from "^types/IContactsListResponse.ts";
import {AxiosError} from "axios";
import {makeContactsQueryKey} from "^utils/queryKey.ts";

type TQueryError = AxiosError<void>;

const useRequestContactsList = (params: IRequestContactsListParams): UseQueryResult<IContactsListResponse, TQueryError> => {
  const queryKey = makeContactsQueryKey(params);

  return useQuery<TRequestContactsListResponse, TQueryError, IContactsListResponse>({
    queryKey,
    queryFn: (): Promise<TRequestContactsListResponse> => requestContactsList(params),
    select: (data: TRequestContactsListResponse): IContactsListResponse => data.data,
  })
}

export default useRequestContactsList;
