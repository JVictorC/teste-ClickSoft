import React, { useState } from 'react';
import useDataUser from '../../hooks/useDataUser';
import Loading from '../Loading';
import { HeaderStyled } from './styledHeader';

export default function Header() {
  const [DataForm, setDataForm] = useState<string>('');
  const { isLoading ,getUserData } = useDataUser();

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault()
    getUserData(DataForm);
  }

  return (
    <HeaderStyled>
      <form className="search-form" onSubmit={handleSubmitForm}>
        <label htmlFor="search-input">
          <p>Pesquisar Usuario Pelo Nome:</p>
          <input
            type="text"
            id="search-input"
            placeholder="Pesquisar usúario"
            onChange={({ target }) => setDataForm(target.value)}
          />
        </label>
        <button type="submit" className="search-button">
          {isLoading ? Loading() : 'Pesquisar'}
        </button>
      </form>
    </HeaderStyled>
  );
}
