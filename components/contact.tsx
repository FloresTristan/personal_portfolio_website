"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <motion.section
      className="max-w-2xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
          value={form.name}
          onChange={handleChange}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
          value={form.email}
          onChange={handleChange}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />

        <motion.textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
        <Toaster position="top-right" />
    </motion.section>
  );
}
