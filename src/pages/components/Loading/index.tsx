import React from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import { LoadingStyled } from './styledLoading';

export default function Loading() {
  return (
    <LoadingStyled>
      <AiOutlineLoading3Quarters className='loading' />
    </LoadingStyled>
  )
}
