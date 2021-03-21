import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCard = ({onAdd}) => {

    const [profilePic, setProfilePic] = useState('');
    const [name, setName] = useState(() => '');
    const [surname, setSurname] = useState(() => '');
    const [email, setEmail] = useState(() => '');
    const [phone, setPhone] = useState(() => '0');
    const [house, setHouse] = useState(() => '');
    const [street, setStreet] = useState(() => '');
    const [suburb, setSuburb] = useState(() => '');
    const [state, setState] = useState(() => '');
    const [postcode, setPostcode] = useState(() => '');
    const [country, setCountry] = useState(() => '');
    
    let selected ={};

    const uploadImage = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setProfilePic(reader.result);
            }
        }
         reader.readAsDataURL(e.target.files[0]);
         selected= e.target.files[0];
       
    }

    const onSubmit= (e) => {
        e.preventDefault();
        let alertMsg = "";
        alertMsg= (!name ? 'Please enter Given Name' :
                        !surname ? 'Please enter surname' :
                        !email ? 'Please enter email' :
                        !phone ? 'Please enter phone':
                        !house ? 'Please enter house name or #' :
                        !street ? 'Please enter street' :
                        !suburb ? 'Please enter suburb' :
                        !state ? 'Please enter state' :
                        !postcode ? 'Please enter postcode' :
                        !country ? 'Please enter country' : '');

       
        if(alertMsg!==""){
            alert(alertMsg)
            return ;
        }

        //add the form values to the hCard
        onAdd({name, surname, email, phone, house, street, suburb, state,postcode, country,selected});

        //clear the form
       // clearForm();
    }

    const clearForm = () =>{
        setName("");
        setSurname("");
        setEmail("");
        setPhone("");
        setHouse("");
        setStreet("");
        setSuburb("");
        setState("");
        setPostcode("");
        setCountry("");
    }

    return (
        <form onSubmit={onSubmit}>
             <div className='row sub-heading'>
                <div> <label>PERSONAL DETAILS </label> </div>
             </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >GIVEN NAME </label> </div>
                <div className = 'col-md-6'> <label>SURNAME </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
            </div>
           
            <div className='row'>
                <div className = 'col-md-6'> <label >EMAIL </label> </div>
                <div className = 'col-md-6'> <label>PHONE </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>

            <div className='row sub-heading'>
                <div> <label>ADDRESS </label> </div>
             </div>
             <div className='row'>
                <div className = 'col-md-6'> <label >HOUSE NAME OR # </label> </div>
                <div className = 'col-md-6'> <label>STREET </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={house} onChange={(e) => setHouse(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >SUBURB </label> </div>
                <div className = 'col-md-6'> <label>STATE </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={suburb} onChange={(e) => setSuburb(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={state} onChange={(e) => setState(e.target.value)} />
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >POSTCODE </label> </div>
                <div className = 'col-md-6'> <label>COUNTRY </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control'
                    value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                     <input type="file" name="image-upload" id="input" accept="image/*" onChange={uploadImage} />
                     <div className="label">
                        <label htmlFor="input" className='btn btn-block'>
                            Upload Avatar
                        </label>
                    </div>
                </div>
                <div className = 'col-md-6'> <input type='submit' value='Create hCard' className='btn btn-block'/></div>
            </div>
        </form>
    )
}

AddCard.propTypes = {
    onAdd: PropTypes.func,
}


export default AddCard
