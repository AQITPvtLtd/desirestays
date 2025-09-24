"use client";
import React, { useState } from 'react';
import { form } from '@/services/contact';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        location: "",
        message: "",
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("fullname", formData.fullname);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("message", formData.message);

        try {
            const response = await form(formDataToSend)
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    fullname: "",
                    phone: "",
                    email: "",
                    location: "",
                    message: "",
                })
                router.push("/")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            })
        }
        finally {
            setLoading(false)
        }
    };
    return (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-lg border-black border-2">
            <h1
                className="text-2xl sm:text-3xl font-bold text-center mb-8 tracking-wide"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Contact Us
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition"
                        placeholder="Your Name"
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handlechange}
                        required
                    />
                    <input
                        className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlechange}
                        required
                    />
                </div>

                {/* Email + Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition"
                        placeholder="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handlechange}
                        required
                    />
                    <input
                        className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition"
                        placeholder="Enter Your Location..."
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handlechange}
                        required
                    />
                </div>

                {/* Message */}
                <textarea
                    className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition resize-none"
                    placeholder="Message..."
                    rows="2"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handlechange}
                ></textarea>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    {loading ? (
                        <div
                            className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50"
                            style={{ backgroundColor: "rgba(75, 0, 130, 0.5)" }}
                        >
                            <ClipLoader width="60" height="60" color="#eb5f30" className="animate-spin" />
                        </div>
                    ) : (
                        <button
                            className="cursor-pointer font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2.5 rounded-2xl border-2 border-[#9b4a2d] transition duration-300 hover:scale-105 hover:bg-gray-300 hover:text-[#9b4a2d]"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>

    );
};

export default Form;
