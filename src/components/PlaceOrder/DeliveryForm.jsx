import React, { useState } from 'react';
import swal from 'sweetalert2';
import { useDelivery } from '../../context/DeliveryProvider';
<<<<<<< HEAD
import useAuth from '../../hooks/useAuth';
=======
import useAuth from '../../hooks/useFetch';
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
import TextField from '../Form/TextField';

const DeliveryForm = () => {
    const { user } = useAuth() || {}; // Add a fallback in case useAuth returns undefined
    const [change, setChange] = useState({
<<<<<<< HEAD
        name: user?.displayName || '', // Use optional chaining and provide a fallback
        phone: '',
        email: user?.email || '', // Use optional chaining and provide a fallback
=======
        country: '',
        roadNo: '',
        flatno: '',
        name: user?.displayName || '' // Use optional chaining and provide a fallback
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
    });
    const { setInput, setDisabled } = useDelivery();

    // Handle Change
    const handleChange = (e) => {
        const { value, name } = e.target;
        setChange((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
<<<<<<< HEAD
            name: change.name,
            phone: change.phone,
            email: change.email,
        });

        // Correct SweetAlert2 usage
        swal.fire({
            title: "Information Updated!",
            text: "Your contact details updated successfully!",
            icon: "success",
            confirmButtonText: "OK"
        });

=======
            country: change.country,
            roadNo: change.roadNo,
            flatno: change.flatno,
            name: change.name
        });
        swal("Information Updated!", "Your shipping details updated successfully!", "success");
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
        setDisabled(false);
    };

    return (
        <div className="flex flex-col mt-20">
            <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">Enter Your Contact Details</h1>
            <form className="my-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                    <TextField
                        type="text"
<<<<<<< HEAD
                        placeholder="Full Name"
=======
                        placeholder="Country and District"
                        name="country"
                        value={change.country}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Road Name and Road No"
                        name="roadNo"
                        value={change.roadNo}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Flat, suite or floor"
                        name="flatno"
                        value={change.flatno}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Delivery to"
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
                        name="name"
                        value={change.name}
                        onChange={handleChange}
                        required
                    />
<<<<<<< HEAD
                    <TextField
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={change.phone}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={change.email}
                        onChange={handleChange}
                        required
                    />
=======
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
                    <button className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500">Save & Continue</button>
                </div>
            </form>
        </div>
    );
};

export default DeliveryForm;