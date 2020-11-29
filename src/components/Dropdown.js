import React from 'react';
import styled from 'styled-components';

const Dropdown = (props) => {
    return (
        <DropdownContainer>
             <div className="dropdown">{/* is-active" */}
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{props.default}</span>
                        <span className="icon is-small">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                            Dropdown item
            </a>
                        <a className="dropdown-item">
                            Other dropdown item
            </a>
                        <a href="#" className="dropdown-item is-active">
                            Active dropdown item
            </a>
                        <a href="#" className="dropdown-item">
                            Other dropdown item
            </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            With a divider
            </a>
                    </div>
                </div>
            </div>
        </DropdownContainer>
    )
}

const DropdownContainer = styled.div`
    margin-right: 3rem;
    .button {
        border-color: #1C1C1E;
        border-radius: 0;
        font-size: 18px;
        font-family: 'Poppins Medium';
        border-radius: 0
    }
    a.dropdown-item, button.dropdown-item {
        padding-right: 0
    }
`

export default Dropdown;