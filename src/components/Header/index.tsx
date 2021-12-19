import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import useDataUser from '../../hooks/useDataUser';
import Loading from '../Loading';
import DrawerComponent from './components/Drawer';
import Drawer from './components/Drawer';
import { HeaderStyled } from './styledHeader';

export default function Header() {
  const [DataForm, setDataForm] = useState<string>('');
  const { isLoading, getUserData } = useDataUser();
  const [ShowModal, setShowModal] = useState<boolean>(false);

  const route = useRouter();

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    Router.push('/');
    setDataForm('');
    getUserData(DataForm);
  }
  return (
    <HeaderStyled>
      <DrawerComponent ShowModal={ShowModal} setShowModal={setShowModal} />

      <form className="search-form" onSubmit={handleSubmitForm}>
        <label htmlFor="search-input">
          <article className="menu-art">
            <AiOutlineMenu
              className="menu"
              onClick={() => setShowModal(true)}
            />
            <p>Pesquisar Usuário Pelo Nome</p>
          </article>
          <input
            value={DataForm}
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
