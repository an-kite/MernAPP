import React from 'react'

export default function Card() {
  return (
    <div><div>
    <div
      className="card mt-3"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=900&t=st=1684299083~exp=1684299683~hmac=95890745c604435f496bf829dcdb4a8c4a42083f3473eb6a2c55883f316da32c" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title
        </p>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>
          
        </div>
      </div>
    </div>
  </div></div>
  )
}
