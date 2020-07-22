import React from 'react';

import './custom-button.styles.scss';

const CustonButton = ({ children, isGoogleSignIn, inverted, ...othetProps}) => (
    <button className={`${inverted ? 'inverted' : ''} custom-button`} {...othetProps}>
        {children}
    </button>
);

export default CustonButton;

