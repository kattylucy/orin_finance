const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const supabase = require("../supabaseClient");
const prisma = require("../prismaClient");

const saltRounds = 10;

router.post("/register", async (req, res) => {
  const { email, password, fullName } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  const user = data.user;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
      data: {
        id: user.id,
        email: email,
        password: hashedPassword,
        fullName: fullName,
      },
    });

    res.status(200).json({ user: { id, email, fullName } });
  } catch (dbError) {
    res.status(400).json({ error: dbError.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const { session, user } = data;

  if (!session) {
    return res.status(400).json({ error: "Authentication failed" });
  }

  res.status(200).json({
    accessToken: session.access_token,
    refreshToken: session.refresh_token,
    user: user,
  });
});

module.exports = router;
