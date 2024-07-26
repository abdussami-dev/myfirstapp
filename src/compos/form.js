import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        fname: '',
        mobile: '',
        email: '',
        message: ''
    });

    const onChangeData =(e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormData = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://localhost:8000/send', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              });
              const result = await response.json();
              alert("Hurray");

        } catch (error) {
            alert('Error sending email');
        }
    }

  return (
    <div className="container vh-100">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-lg-6">
          <form className="border shadow-lg p-4" onSubmit={handleFormData}>
            <div className="input-group mb-3">
              <input 
                type="text"
                name="fname"
                value={formData.fname}
                onChange={onChangeData}
                className="form-control"
                placeholder="Name*"
                // onBlur={(this.placeholder = "Name*")}
                // onFocus={(this.placeholder = "")}
              />
            </div>
            <div className="input-group mb-3">
              <input 
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={onChangeData}
                className="form-control"
                placeholder="Mobile*"
              />
            </div>
            <div className="input-group mb-3">
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={onChangeData}
                className="form-control"
                placeholder="Email*"
              />
            </div>
            <div className="input-group mb-3">
              <textarea
                name="message"
                className="form-control"
                value={formData.message}
                onChange={onChangeData}
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
