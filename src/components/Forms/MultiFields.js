"use client";
import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useState, useFormState } from "react";
const MultiFields = () => {
  console.log(useFormState, "react form state");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useFormState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form>
        <Input
          name="email"
          value={formData.email}
          type="email"
          required
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        <label>
          First name:{" "}
          {isEditing ? (
            <input
              style={{
                border: "1px solid",
                borderRadius: "5px",
                padding: "5px",
              }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <b>{firstName}</b>
          )}
        </label>
        <label>
          Last name:{" "}
          {isEditing ? (
            <input
              style={{
                border: "1px solid",
                borderRadius: "5px",
                padding: "5px",
              }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <b>{lastName}</b>
          )}
        </label>
        <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
        <p>
          {" "}
          <i>
            Hello, {firstName} {lastName}
          </i>
        </p>
      </form>
    </>
  );
};

export default MultiFields;
