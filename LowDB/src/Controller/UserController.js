import { usersDB } from "../Model/UserModel.js";

export const registration = async (req, res) => {
  try {
    const { email } = req.body;
    const users = usersDB.data.data;

    // Check if the user already exists
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Add new user
    users.push(req.body);
    await usersDB.write(); // Ensure data is written back to the file

    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error !" });
  }
};

export const fetchUser = async (req, res) => {
  try {
    const users = usersDB.data.data;
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error !" });
  }
};
