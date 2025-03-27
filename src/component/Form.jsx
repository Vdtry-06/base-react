import { useState } from "react";

export default function Form() {
    const [form, setForm] = useState({
        firstName: 'Trong',
        lastName: 'Vuong',
        email: 'tronga2k48pbc@gmail.com',
        address: {
            city: 'Ha Noi',
            street: 'Phao Dai Lang'
        },
        imageUrl: 'https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/481605728_991781115613365_8792342082551389704_n.jpg?stp=dst-jpg_p2048x2048_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=XwmbI5fiHsYQ7kNvgEixgky&_nc_oc=Admld06385WbGiwRZ0p-D3WBG5zI3Ta5ZYrkqk-Ou7NnJbBOuwJPBPv-MzAqyBahsmE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&oh=03_Q7cD1wGz2SvUsKlpeDDMQA9sBgjSQRLhbnFRsLLxQJyVe-usbg&oe=680BEFC0'
    });

    function handleFirstNameChange(e) {
        setForm({ ...form, firstName: e.target.value });
    }
    function handleLastNameChange(e) {
        setForm({ ...form, lastName: e.target.value });
    }
    function handleEmailChange(e) {
        setForm({ ...form, email: e.target.value });
    }
    function handleCityChange(e) {
        setForm({ ...form, address: { ...form.address, city: e.target.value } });
    }
    function handleStreetChange(e) {
        setForm({ ...form, address: { ...form.address, street: e.target.value } });
    }
    function handleImageUrlChange(e) {
        setForm({ ...form, imageUrl: e.target.value });
    }

    const containerStyle = {
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '15px'
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        boxSizing: 'border-box'
    };

    const imageStyle = {
        maxWidth: '100%',
        height: '100px',
        marginTop: '15px',
        borderRadius: '4px',
        width: '100px',
    };

    const infoStyle = {
        backgroundColor: '#4324',
        padding: '10px',
        borderRadius: '4px',
        marginTop: '20px'
    };

    return (
        <div style={containerStyle}>
            <form>
                <label style={labelStyle}>
                    First name:
                    <input
                        style={inputStyle}
                        value={form.firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>
                <label style={labelStyle}>
                    Last name:
                    <input
                        style={inputStyle}
                        value={form.lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input
                        style={inputStyle}
                        value={form.email}
                        onChange={handleEmailChange}
                        type="email"
                    />
                </label>
                <label style={labelStyle}>
                    City:
                    <input
                        style={inputStyle}
                        value={form.address.city}
                        onChange={handleCityChange}
                    />
                </label>
                <label style={labelStyle}>
                    Street:
                    <input
                        style={inputStyle}
                        value={form.address.street}
                        onChange={handleStreetChange}
                    />
                </label>
                <label style={labelStyle}>
                    Image URL:
                    <input
                        style={inputStyle}
                        value={form.imageUrl}
                        onChange={handleImageUrlChange}
                    />
                </label>
            </form>
            
            <div style={infoStyle}>
                <p>
                    <strong>{form.firstName} {form.lastName}</strong><br />
                    Email: {form.email}<br />
                    Address: {form.address.city}, {form.address.street}
                </p>
            </div>
            
            <img
                src={form.imageUrl} 
                alt="Profile" 
                style={imageStyle}
            />
        </div>
    );
}