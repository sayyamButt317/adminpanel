const UserScheme = new mongoose.Scheme({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  role: { type: String, default: "user" },
});
