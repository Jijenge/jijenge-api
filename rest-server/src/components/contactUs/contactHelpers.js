export const saveMessage = `
    INSERT INTO
      contactUs (fullName, email, message)
    VALUES
      ($1, $2, $3)
`;