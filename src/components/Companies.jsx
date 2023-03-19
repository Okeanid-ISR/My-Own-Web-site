import React from "react"
import "../styles/companies.css"
import Marquee from "react-fast-marquee"
import styled from 'styled-components';

const MyComponent = styled.div`
  background-size: cover;
  background-position: top;
  color: white;
  height: 100px;
  width: 100px;
`;

const Companies = () => {
    return (
        <div className="companies-main">
            <div className="container-fluid">
                <div className="companies-block justify-content-around flex-wrap flex-row">
                    <h2 className="mb-5 companies-block__title">Companies <span className="text-decoration-underline">I did not</span> work with yet</h2>
                    <Marquee loop={0} speed={60}>
                        <MyComponent className="companies-block__google companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__apple companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__microsoft companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__amazon companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__facebook companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__intel companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__oracle companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__ibm companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__yx companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__sf companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__ad companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__hp companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__nvidia companies-block_general">
                        </MyComponent>
                        <MyComponent className="companies-block__twitter companies-block_general">
                        </MyComponent>
                    </Marquee>
                </div>
            </div>
        </div>

    )
}

export default Companies;