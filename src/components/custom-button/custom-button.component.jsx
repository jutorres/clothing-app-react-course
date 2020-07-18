import React from 'react';

import './custom-button.styles.scss';

const CustonButton = ({ children, ...othetProps}) => (
    <button className='custom-button' {...othetProps}>
        {children}
    </button>
);

export default CustonButton;

