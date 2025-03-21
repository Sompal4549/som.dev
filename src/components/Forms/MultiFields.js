"use client";
import React from "react";
import { useState } from "react";

const MultiFields = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  return (
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
            style={{ border: "1px solid", borderRadius: "5px", padding: "5px" }}
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
            style={{ border: "1px solid", borderRadius: "5px", padding: "5px" }}
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
  );
};

export default MultiFields;
