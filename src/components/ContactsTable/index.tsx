import {ReactElement, useCallback, useMemo, useState} from "react";
import useRequestContactsList from "^hooks/useRequestContactsList.ts";
import IContact from "^types/IContact.ts";
import SearchForm from "^components/SearchForm";
import Pagination from "^components/Pagination";
import {IRequestContactsListParams} from "^api/contacts.ts";
import ContactsTableLayout from '../ContactsTableLayout';

interface IContactsTableProps {
  requestParams: Omit<IRequestContactsListParams, 'query' | 'page'>;
}

const ContactsTable = ({ requestParams }: IContactsTableProps): ReactElement => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const { isFetching, data } = useRequestContactsList({
    query,
    page,
    ...requestParams,
  });

  const handleSetQuery = useCallback(
    (query: string): void => {
      setPage(1)
      setQuery(query);
    },
    [],
  )

  const contacts = useMemo(
    (): IContact[] => {
      if (!data) {
        return [];
      }

      return Object.values(data.contacts);
    },
      [data],
  );

  return (
    <div>
      <SearchForm
        value={query}
        onChange={handleSetQuery}
        isDisabled={isFetching}
      />

      <ContactsTableLayout
        contacts={contacts}
        isLoading={isFetching}
      />

      <Pagination
        total={data?.total}
        current={page}
        onChange={setPage}
      />
    </div>
  )
}

export default ContactsTable;
