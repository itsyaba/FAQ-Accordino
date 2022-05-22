import React, {useState} from 'react'
import Arrow from '../down-arrow.svg'
function Faq() {

  const data = require('../Questions.json')
  // console.log(data[1].answer);

  const [one , setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five , setFive] = useState(false)
  
  return (
    <div className="faq__page">
      <h1>faq</h1>
      {/* {data.map((item) => (
        <div className="faq__items">
          <h3
            style={colorChangeStyle}
            key={item.id}
            onClick={() => handelClick(item.id)}
          >
            {item.question}{" "}
            <span className="down-arrow">
              <img src={Arrow} alt="" />
            </span>
          </h3>
          <p style={dropdownStyle}>{item.answer}</p>
        </div>
      ))} */}
      <div className="faq__container">
        <div className="faq__items">
          <h3
            onClick={() => {
              setOne(!one);
            }}
          >
            {data[1].question}{" "}
            <span className="down-arrow">
              <img src={Arrow} alt="" />
            </span>
          </h3>
          {one && <p>{data[1].answer}</p>}
        </div>
        <div className="faq__items">
          <h3
            onClick={() => {
              setTwo(!two);
            }}
          >
            {data[2].question}{" "}
            <span className="down-arrow">
              <img src={Arrow} alt="" />
            </span>
          </h3>
          {two && <p>{data[2].answer}</p>}
        </div>
        <div className="faq__items">
          <h3
            onClick={() => {
              setThree(!three);
            }}
          >
            {data[3].question}{" "}
            <span className="down-arrow">
              <img src={Arrow} alt="" />
            </span>
          </h3>
          {three && <p>{data[3].answer}</p>}
        </div>
        <div className="faq__items">
          <h3
            onClick={() => {
              setFour(!four);
            }}
          >
            {data[4].question}{" "}
            <span className="down-arrow">
              <img src={Arrow} alt="" />
            </span>
          </h3>
          {four && <p>{data[4].answer}</p>}
        </div>
        <div className="faq__items">
          <h3
            onClick={() => {
              setFive(!five);
            }}
          >
            {data[0].question}{" "}
            <span className="down-arrow">
              <img src={Arrow} alt="" />
            </span>
          </h3>
          {five && <p>{data[0].answer}</p>}
        </div>
      </div>
    </div>
  );
}

export default Faq