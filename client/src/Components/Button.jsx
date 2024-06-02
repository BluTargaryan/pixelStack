import React from 'react';

const Button = ({ variant, disabled, children, onClick, type }) => {
    let className = 'tw-px-4 tw-py-2 tw-rounded-full tw-transition-all tw-duration-200 tw-shadow-md ';

    switch (variant) {
        case 'dark':
            className += 'tw-bg-dark tw-text-white hover:tw-bg-opacity-90 hover:tw-shadow-lg'
            break;

        case 'light':
            className += 'tw-bg-white tw-border-[1px] tw-border-dark tw-text-dark hover:tw-bg-opacity-90 hover:tw-shadow-lg';
            break;
    }

    if (disabled) {
        className += 'tw-opacity-50 tw-cursor-not-allowed';
    }

    return (
        <button
            onClick={onClick}
            className={className}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;