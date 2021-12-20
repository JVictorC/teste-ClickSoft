import React from 'react';
import { Drawer } from '@mui/material';
import styled from 'styled-components';
import { AiFillHome, AiOutlineHistory } from 'react-icons/ai';
import { useRouter } from 'next/router';
import useDataUser from 'src/hooks/useDataUser';

const DrawerStyled = styled.div`
  width: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .title {
    font-weight: 300;
    color: #372763;
    align-self: flex-start;
    padding: 10px;
  }

  li {
    cursor: pointer;
    width: 100%;
    transition: 1s;
    padding: 5px;
    border-bottom: 1px solid;
    margin: 25px 5px;

    .icon {
      margin: 0px 15px;
      color: #372763;
      font-size: 25px;
    }

    :hover {
      transform: scale(1.05);
      border-bottom: 2px solid #372763;
    }
  }
`;

interface DrawerProps {
  ShowModal: boolean;
  setShowModal: (open: boolean) => void;
}

export default function DrawerComponent(props: DrawerProps) {
  const router = useRouter();
  const {getUserData} = useDataUser();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      props.setShowModal(open);
    };

    const handleClickDirect = (action: 'home' | 'history') => {
      if(action ===  'history') {
        router.push('/history/users');
      } else {
        router.push('/');
        getUserData('')
      }
      props.setShowModal(false);
    }
 
    const list = () => (
    <DrawerStyled>
      <h1 className="title">HUBusca</h1>
      <ul>
        <li onClick={() => handleClickDirect('home')}>
          <AiFillHome className="icon" />
          Voltar Home
        </li>
        <li onClick={() => handleClickDirect('history')}>
          <AiOutlineHistory className="icon" />
          Histórico de Busca de Usuários
        </li>
      </ul>
    </DrawerStyled>
  );

  return (
    <div>
      <Drawer
        anchor={'left'}
        open={props.ShowModal}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
