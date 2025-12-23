import { useReducer } from "react";
import { formReducer, initialState } from "../reducer/FormReducer";

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, values, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const isStepOneValid = values.name && values.email;
  const isStepTwoValid = values.username && values.password;

  if (isSubmitted) {
    return (
      <div className="container">
        <h2>Registration Successful</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>Step {step} of 3</h3>
      {step === 1 && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          <button
            disabled={!isStepOneValid}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button
            disabled={!isStepTwoValid}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <h4>Review Details</h4>
          <p>
            <strong>Name: </strong>
            {values.name}
          </p>
          <p>
            <strong>Email: </strong>
            {values.email}
          </p>
          <p>
            <strong>Username: </strong>
            {values.username}
          </p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
export default RegistrationForm;
