import styled from 'styled-components';
import React from 'react'

class Accordion extends React.Component {

    render() {
        const moreDetails = this.props.data;
        return (
            <AccordionContainer>
                <div {...{ className: 'wrapper' }}>
                    <ul {...{ className: 'accordion-list' }}>
                        {moreDetails.map((data, key) => {
                            return (
                                <li {...{ className: 'accordion-list__item', key }}>
                                    <AccordionItem {...data} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </AccordionContainer>
        )
    }
}

class AccordionItem extends React.Component {
    state = {
        opened: false
    }

    render() {
        const {
            props: {
                paragraph,
                title
            },
            state: {
                opened
            }
        } = this

        return (
            <div
                {...{
                    className: `accordion-item, ${opened && 'accordion-item--opened'}`,
                    onClick: () => { this.setState({ opened: !opened }) }
                }}
            >
                <div {...{ className: 'accordion-item__line' }}>
                    <h3 {...{ className: 'accordion-item__title' }}>
                        {title}
                    </h3>
                    <span {...{ className: 'accordion-item__icon' }} />
                </div>
                <div {...{ className: 'accordion-item__inner' }}>
                    <div {...{ className: 'accordion-item__content' }}>
                        <p {...{ className: 'accordion-item__paragraph' }}>
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const AccordionContainer = styled.div`
    .accordion-list {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  max-width: 30rem;
  border-radius: 0.4rem;
  overflow: hidden;
}
.accordion-list__item + .accordion-list__item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.accordion-item--opened .accordion-item__icon {
  transform: rotate(180deg);
}
.accordion-item--opened .accordion-item__inner {
  max-height: 100rem;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition-duration: 0.5s;
  transition-property: max-height;
}
.accordion-item--opened .accordion-item__content {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  transition-property: opacity, transform;
}
.accordion-item__line {
  display: block;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  z-index: 2;
  position: relative;
}
.accordion-item__title {
  font-size: 1.5rem;
  margin: 0;
  margin-right: 1rem;
  color: #121212;
}
.accordion-item__icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #1C1C1E;
  transition: transform 0.3s ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC);
  opacity: 0.6;
}
.accordion-item__inner {
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;
}
.accordion-item__content {
  opacity: 0;
  transform: translateY(-1rem);
  transition-timing-function: linear, ease;
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  transition-delay: 0.5s;
  padding: 1rem 0;
}
.accordion-item__paragraph {
  margin: 0;
  font-size: 1rem;
  color: #333;
  font-weight: 300;
  line-height: 1.3;
}
`

export default Accordion;