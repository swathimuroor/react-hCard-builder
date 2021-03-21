import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'

const AddCard = ({onAdd}) => {

    const { register, handleSubmit, watch, errors } = useForm();

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row sub-heading'>
                <div> <label>PERSONAL DETAILS </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >GIVEN NAME </label> </div>
                <div className = 'col-md-6'> <label>SURNAME </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' name='name' className = 'form-control'  ref={register({ required: true ,maxLength :20  })}
                    value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name && <span>Enter given name</span>}
                </div>
                <div className = 'col-md-6'>
                    <input type='text' name='surname' className = 'form-control' maxLength='20' ref={register({ required: true ,maxLength :20 })}
                    value={surname} onChange={(e) => setSurname(e.target.value)} />
                    {errors.surname && <span>Enter surname</span>}
                </div>
            </div>
            
            <div className='row'>
                <div className = 'col-md-6'> <label >EMAIL </label> </div>
                <div className = 'col-md-6'> <label>PHONE </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' name='email' className = 'form-control' ref={register({ required: true ,maxLength :35, pattern: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g })}
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <span>Enter valid email</span>}
                </div>
                <div className = 'col-md-6'>
                    <input type='text' name='phone' className = 'form-control' ref={register({ required: true ,maxLength :10, pattern: /^[0-9]+$/i  })}
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                        {errors.phone && <span>Enter valid phone</span>}
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
                    <input type='text' name='house' className = 'form-control' ref={register({ required: true ,maxLength :15  })}
                    value={house} onChange={(e) => setHouse(e.target.value)} />
                        {errors.house && <span>Enter house name or number</span>}
                </div>
                <div className = 'col-md-6'>
                    <input type='text' name='street' className = 'form-control' ref={register({ required: true ,maxLength :35  })}
                    value={street} onChange={(e) => setStreet(e.target.value)} />
                    {errors.street && <span>Enter street</span>}
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >SUBURB </label> </div>
                <div className = 'col-md-6'> <label>STATE </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' name='suburb' className = 'form-control' ref={register({ required: true ,maxLength :35  })}
                    value={suburb} onChange={(e) => setSuburb(e.target.value)} />
                    {errors.suburb && <span>Enter suburb</span>}
                </div>
                <div className = 'col-md-6'>
                    <input type='text' name='state' className = 'form-control' ref={register({ required: true ,maxLength :10  })}
                    value={state} onChange={(e) => setState(e.target.value)} />
                    {errors.state && <span>Enter state</span>}
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >POSTCODE </label> </div>
                <div className = 'col-md-6'> <label>COUNTRY </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' name='postcode' className = 'form-control' ref={register({ required: true ,minLength:4, maxLength :4 ,pattern: /^[(0-9)*]+$/gi })}
                    value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                        {errors.postcode && <span>Enter valid postcode</span>}
                </div>
                <div className = 'col-md-6'>
                    <input type='text' name='country' className = 'form-control' ref={register({ required: true ,maxLength :15  })}
                    value={country} onChange={(e) => setCountry(e.target.value)} />
                        {errors.country && <span>Enter country</span>}
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type="file" name="image-upload" id="input" accept="image/*" onChange={uploadImage} />
                    <label htmlFor="input" className='btn btn-block btn-background' >
                        Upload Avatar
                    </label>
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
