import React from 'react';
import { HeaderStyled } from './styledHeader';

export default function Header() {
  return (
    <HeaderStyled>
      <form className="search-form">
        <label htmlFor="search-input">
          <p>Pesquisar Usuario Pelo Nome:</p>
          <input
            type="text"
            id="search-input"
            placeholder="Pesquisar usúario"
          />
        </label>
          <button type="submit" className='search-button'>Pesquisar</button>
      </form>
    </HeaderStyled>
  );
}
