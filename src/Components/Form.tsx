import { useState, type FC } from 'react';
import OTextField from './TextField';

interface FormProps {
  className: string;
}

const Form: FC<FormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    contact: '',
    bio: '',
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const staticTextFieldClassname = 'w-full text-gray-800 bg-[#f1f5f9] focus:ring-gray-500';

  return (
    <div className={`max-w-xl mx-auto mt-20 p-6 shadow-md/50 rounded-lg ${className}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
        className="space-y-1"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Registration Form</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <OTextField
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              className={staticTextFieldClassname}
              required
            />
          </div>
          <div>
            <OTextField
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange('lastName')}
              className={staticTextFieldClassname}
              required
            />
          </div>
        </div>

        <div>
          <OTextField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange('email')}
            className={staticTextFieldClassname}
            required
          />
        </div>

        <div>
          <OTextField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange('password')}
            className={staticTextFieldClassname}
            required
          />
        </div>

        <div>
          <label htmlFor="dob" className="block text-sm text-gray-700 mb-1 ml-2">
            Date of Birth
          </label>
          <OTextField
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange('dob')}
            className={staticTextFieldClassname}
            required
          />
        </div>

        <div>
          <OTextField
            id="contact"
            name="contact"
            type="tel"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange('contact')}
            className={staticTextFieldClassname}
            required
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm text-gray-700 ml-2 mb-1">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Tell us about yourself"
            rows={2}
            className="w-full p-3 m-2 border rounded-lg outline-none text-gray-800 bg-[#f1f5f9] focus:ring-2 focus:ring-gray-500"
            value={formData.bio}
            onChange={handleChange('bio')}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 hover:cursor-pointer transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
