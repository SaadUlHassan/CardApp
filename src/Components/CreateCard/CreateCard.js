import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import CardActions from "../../Redux/CardActions/CardActions";

const CreateCard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cardsData, setCardsData] = useState({
        firstName: '',
        lastName: '',
        membershipTier: 'Gold',
        description: null
    })

    const inputChangeHandler = (event) => {
        let input = event.target;
        setCardsData((cardsData) => {
          return {
            ...cardsData,
            [input.id]: input.value,
          };
        });
      };

    const addCardHandler = (e) => {
        e.preventDefault()
        if(cardsData) {
            dispatch(CardActions.addCard({
                id: Math.floor(Math.random() * Date.now()),
                ...cardsData
            }))
            navigate('/')
        }
    }

    const handleCancel = () => {
        setCardsData({
            firstName: '',
            lastName: '',
            membershipTier: 'Gold',
            description: null
        })
        navigate('/')
    }
    return (
        <div className="container ">
      <div className="d-flex align-items-center justify-content-center text-center h-100">
        <div className="card cardemp">
          <div className="card-header text-white">
            <h1 className="todoHeader">Add Card</h1>
          </div>
          <div className="card-body">
            <form className="addEmployeeForm" onSubmit={addCardHandler}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                  placeholder="Enter First Name"
                  value={cardsData.firstName}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter Last Name"
                  required
                  value={cardsData.lastName}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
              <label htmlFor="cards">Choose a card:</label>
                <select id="membershipTier" onChange={inputChangeHandler}>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Platinum">Platinum</option>
                </select>
              </div>
              <div className="form-group">
              <label>Description:</label>
                <textarea rows="4" cols="38" id='description' form="usrform" onChange={inputChangeHandler}/>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success btn-md"
                >
                   Create Card
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-md"
                  onClick={handleCancel}
                >
                   Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CreateCard