const BASE = `https://fitnesstrac-kr.herokuapp.com`;

// register
export async function registerPerson(username, password) {
  try {
    const response = await fetch(`${BASE}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    if (result.error) {
      throw result;
    }
    const token = result.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    return result;
  } catch (error) {
    throw error;
  }
}

// login
export async function loginPerson(username, password) {
  try {
    const response = await fetch(`${BASE}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    if (result.error) {
      throw result;
    }
    const token = result.token;
    const id = result.user.id;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("id", id);
      return result;
    }
  } catch (error) {
    throw error;
  }
}
