import React, {useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames'

const Dropdown = (props) => {
    const { heading, toggle, isOpen, items, selectedValue, setValue } = props;

    return (
        <DropdownContainer>
            <div>
                <label className="label">{heading}</label>
            </div>
             <div className={classNames('dropdown', {'is-active': isOpen})}>{/* is-active" */}
                <div className="dropdown-trigger">
                    <button onClick={toggle} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{selectedValue.label}</span>
                        <span className="icon is-small">
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {items.map(item => (
                            <a href="#" onClick={(e) => setValue(e, item)} className="dropdown-item">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </DropdownContainer>
    )
}

const DropdownContainer = styled.div`
    margin-right: 3rem;
    .label {
        margin-bottom: 0.5em;
    }
    .dropdown-menu {
        min-width: 9rem;
        .dropdown-item {
            border-color: #1C1C1E;
            border-radius: 0;
            font-size: 18px;
            font-family: 'Poppins Medium';
        }
    }
    .button {
        border-color: #1C1C1E;
        border-radius: 0;
        font-size: 18px;
        font-family: 'Poppins Medium';
        border-radius: 0;
        width: 9rem;
        height: 53px;
        justify-content: space-between;
    }
    a.dropdown-item, button.dropdown-item {
        padding-right: 0
    }
`

export default Dropdown;