const Signup = () => {
  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/auth/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        // TODO: Set input data
      },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          // TODO: Set error
        }
        if (data && data.token) {
          // TODO: Set cookie && redirect
        }
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="email">
        email
        <input name="email" type="email" />
      </label>

      <br />

      <label for="password">
        password
        <input name="password" type="password" />
      </label>

      <br />

      <input type="submit" value="Submit" />
      <p style={{ color: 'red' }}>{/* TODO: Show error message */}</p>
    </form>
  );
};

export default Signup;
