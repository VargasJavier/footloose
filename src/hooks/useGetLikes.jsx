export const useGetLikes = async (setUsers) => {
  const response = await fetch("http://localhost:9000/api");
  const data = await response.json();
  await setUsers(data);
};
