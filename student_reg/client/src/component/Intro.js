import React from "react";

export default function Intro() {
  return (
    <div className="container mt-5">
      <h1 className="mt-5 text-center">
        Welcome to my MERN Stack Student Registration System!
      </h1>
      <br></br>
      <h6 className=" text-center ">
        This application allows you to manage your Student Data/Records
        efficiently using a MERN stack architecture.
      </h6>
      <br></br>
      <h4 className="text-left">
        Here's a breakdown of the technologies used:
      </h4>
      <br></br>
      <h5>
        <ul class="text-left">This system provides functionalities for:</ul>
        <li class="mb-2">Viewing all Students in your records.</li>
        <li class="mb-2">
          Adding new Students with details like Name, Subject, Address, Contact
          etc.
        </li>
        <li class="mb-2">
          Updating existing Student records to reflect any changes.
        </li>
        <li class="mb-2">
          Deleting students from your records when necessary.
        </li>
      </h5>
      <br></br>
      <ul class="text-left">
        <p style={{ textDecoration: "underline" }}>
          {" "}
          Additional features going to incorporated in the future, such as:
        </p>
        <li class="mb-2">
          User authentication and authorization for secure access control.
        </li>
        <li class="mb-2">
          Search and filter functionalities for efficient records management.
        </li>
        <li class="mb-2">
          Integration with other features for a more comprehensive Student
          management solution.
        </li>
      </ul>
    </div>
  );
}
