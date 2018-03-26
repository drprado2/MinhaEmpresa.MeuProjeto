import React from 'react';
import {notification} from 'antd';

export const showErrorMessage = errors => {

  if(!errors || errors.length == 0)
    return;

  const errorsList = errors.map((x, index) =>
    <li key={index}>{x.message}</li>
  )

  notification.error({
    message: 'Ocorreu algum problema!',
    description:
      <ul>
        {errorsList}
      </ul>,
    duration: 20,
    style: {
      backgroundColor: '#FFF0EF',
      border: '1px solid red',
      right: 0,
      transform: 'translate(calc(200px - 50vw), 0)',
      width: '400px'
    }
  });
}
