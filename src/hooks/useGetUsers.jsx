export const useLogin = async (e, user, navigate, setError, addUser) => {
  e.preventDefault();
  const requestInit = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  };
  const response = await fetch("http://localhost:9000/api/auth", requestInit);
  const data = await response.json();
  if (data.success) {
    setError(false);
    addUser(data.user);
    navigate("/");
  } else setError(true);
};
