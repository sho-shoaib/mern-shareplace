export const getPosts = async () => {
  const res = await fetch("http://localhost:5000/api/places/");
  const data = await res.json();
  return data;
};

export const getUsers = async () => {
  const res = await fetch("http://localhost:5000/api/users/");
  const data = await res.json();
  return data;
};

export const getUserById = async (id) => {
  const res = await fetch(`http://localhost:5000/api/users/${id}`);
  const data = await res.json();
  return data;
};

export const getPostById = async (id) => {
  const res = await fetch(`http://localhost:5000/api/places/${id}`);
  const data = await res.json();
  return data;
};

export const getPostByUserId = async (id) => {
  const res = await fetch(
    `http://localhost:5000/api/places/user/by-creator?creatorId=${id}`
  );
  const data = res.json();
  return data;
};
