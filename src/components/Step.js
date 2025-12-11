import React from "react";

function Step({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) {
  return (
    <div>
      {/* ---- Step 1 ---- */}
      {step === 1 && (
        <>
          <h2>Step 1: User Information</h2>
          <div>
            <label>First Name: </label>
            <input
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Last Name: </label>
            <input
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* ---- Step 2 ---- */}
      {step === 2 && (
        <>
          <h2>Step 2: Car Details</h2>
          <div>
            <label>Car Model: </label>
            <input
              id="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Car Price: </label>
            <input
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* ---- Step 3 ---- */}
      {step === 3 && (
        <>
          <h2>Step 3: Payment Info</h2>
          <div>
            <label>Card Info: </label>
            <input
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Expiry Date: </label>
            <input
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      {/* ---- Navigation Buttons ---- */}
      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button onClick={prevStep}>Previous</button>
        )}

        {step < 3 && (
          <button onClick={nextStep}>Next</button>
        )}

        {step === 3 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Step;
