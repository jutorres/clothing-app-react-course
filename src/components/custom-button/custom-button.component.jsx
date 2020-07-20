import React from 'react';

import './custom-button.styles.scss';

const CustonButton = ({ children, isGoogleSignIn, ...othetProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...othetProps}>
        {children}
    </button>
);

export default CustonButton;

