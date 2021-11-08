const getRecipientEmail = (id, userLoggedIn) =>
  id["users"]?.filter(
    (userToFilter) => userToFilter !== userLoggedIn?.email
  )[0];

export default getRecipientEmail;
