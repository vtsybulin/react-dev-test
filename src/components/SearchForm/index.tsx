import {ChangeEvent, ReactElement, FormEvent, useCallback} from "react";
import {Form} from "react-bootstrap";
import debounce from 'lodash-es/debounce';

interface ISearchFormProps {
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
}

const QUERY_FIELD_NAME = 'query';
const DEBOUNCE_DELAY = 500;

const SearchForm = ({
  value,
  onChange,
  isDisabled,
}: ISearchFormProps): ReactElement => {
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      onChange(formData.get(QUERY_FIELD_NAME) as string);
    },
    [onChange],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onChange(e.target.value);
    },
    [onChange],
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search query</Form.Label>
        <Form.Control
          type="text"
          name={QUERY_FIELD_NAME}
          defaultValue={value}
          onChange={debounce(handleChange, DEBOUNCE_DELAY)}
          disabled={isDisabled}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchForm;
