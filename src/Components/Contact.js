import React from "react";

const Contact = () =>{
    return (
        <div class="container py-4">

        <form id="contactForm">

            <div class="mb-3">
            <label class="form-label" for="name">Name</label>
            <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
            </div>

            <div class="mb-3">
            <label class="form-label" for="emailAddress">Email Address</label>
            <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required" />
            </div>

            <div class="mb-3">
            <label class="form-label" for="message">Message</label>
            <textarea class="form-control" id="message" type="text" placeholder="Message" data-sb-validations="required" maxLength="300"></textarea>
            {/* <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea> */}
            </div>

            <div class="d-grid">
            <button class="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>

        </form>

        </div>
    )
}
export default Contact;