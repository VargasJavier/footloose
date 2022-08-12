export const useGetUsers = async (setUsers) => {
  const response = await fetch("http://localhost:9000/api");
  const data = await response.json();
  await setUsers(data);
};

export const useLogin = (e, users, userValue, setError, addUser, navigate) => {
  e.preventDefault();
  const userFind = users.find((user) => user.email === userValue.email);
  if (!userFind) {
    setError(true);
    return;
  }
  if (userValue.password === userFind.password) {
    // INGRESAR
    addUser(userFind);
    setError(false);
    console.log("INGRESO EXITOSO");
    navigate("/");
  } else {
    setError(true);
  }
};
