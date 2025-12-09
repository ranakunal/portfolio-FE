import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/contact", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSubmitted(true);
  };
  return (
    <>
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thanks! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name</label>
            <input
              style={{ width: "100%", padding: "8px" }}
              onChange={(e) => setForm({ ...form, name: e.target.name })}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email</label>
            <input
              style={{ width: "100%", padding: "8px" }}
              onChange={(e) => setForm({ ...form, name: e.target.name })}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Message</label>
            <textarea
              style={{ width: "100%", padding: "8px" }}
              onChange={(e) => setForm({ ...form, name: e.target.name })}
            />
          </div>

          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
}
