import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { Button } from '@material-ui/core';

import './index.css';

const units = ['kg', 'lt', 'un'];

const Form = () => {
  return (
    <form className='form-container' noValidate autoComplete='off'>
      <div className='form-row'>
        <TextField
          label='Lista'
          name='list'
          value={''}
          onChange={() => {}}
          margin='normal'
          required
        />
        <Button variant='contained' color='secondary'>
          Adicionar
        </Button>
      </div>
      <div className='form-row'>
        <TextField
          label='Produto'
          name='product'
          value={''}
          onChange={() => {}}
          margin='normal'
          required
        />
        <TextField
          label='Quantidade'
          name='quantity'
          value={''}
          onChange={() => {}}
          margin='normal'
          required
        />
        <TextField
          select
          label='Unidade'
          name='unity'
          value={''}
          onChange={() => {}}
          margin='normal'
          required
        >
          {units.map(item => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </TextField>
        <TextField
          label='Preço'
          name='price'
          value={''}
          onChange={() => {}}
          margin='normal'
          InputProps={{
            startAdornment: <InputAdornment position='start'>R$</InputAdornment>
          }}
        />
      </div>
    </form>
  );
};

export default Form;
