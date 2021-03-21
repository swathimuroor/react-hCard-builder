import './App.css';
import { useState } from 'react' ;
import Header from './components/Header';
import avatar from './images/profilePic.jpg';

function App() {
  const [cardname, setCardName] = useState('');
  const [cardEmail, setCardEmail] = useState('');
  const [cardPhone, setCardPhone] = useState('');
  const [cardHouse, setCardHouse] = useState('');
  const [cardSuburb, setCardSuburb] = useState('');
  const [cardPost, setCardPost] = useState('');
  const [cardCountry, setCardCountry] =useState('');
  const [cardProfilePic, setCardProfilePic] =useState(avatar);
  
  const addhCard = (card) =>{
    setCardName(card.name+ ' ' + card.surname);
    setCardEmail(card.email);
    setCardPhone(card.phone);
    setCardHouse(card.house+ '  '+ card.street);
    setCardSuburb(card.suburb+ ', '+ card.state);
    setCardPost(card.postcode);
    setCardCountry(card.country);
  }
  const [name, setName] = useState(() => '');
  const [surname, setSurname] = useState(() => '');
  const [email, setEmail] = useState(() => '');
  const [phone, setPhone] = useState(() => '');
  const [house, setHouse] = useState(() => '');
  const [street, setStreet] = useState(() => '');
  const [suburb, setSuburb] = useState(() => '');
  const [state, setState] = useState(() => '');
  const [postcode, setPostcode] = useState(() => '');
  const [country, setCountry] = useState(() => '');

  const uploadImage = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () =>{
        if(reader.readyState === 2){
          setCardProfilePic(reader.result);
        }
    }
     reader.readAsDataURL(e.target.files[0]);
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
     addhCard({name, surname, email, phone, house, street, suburb, state,postcode, country});

    //clear form
    //clearForm();
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
      <div className="container-flex">
        <div className='container'>
          <Header />
          {/* <AddCard onAdd={addhCard} /> */}
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
                    <input type='text' className = 'form-control' maxLength='20'
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='20'
                    value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
            </div>
           
            <div className='row'>
                <div className = 'col-md-6'> <label >EMAIL </label> </div>
                <div className = 'col-md-6'> <label>PHONE </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='35'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='10'
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
                    <input type='text' className = 'form-control' maxLength='15'
                    value={house} onChange={(e) => setHouse(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='35'
                    value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >SUBURB </label> </div>
                <div className = 'col-md-6'> <label>STATE </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='35'
                    value={suburb} onChange={(e) => setSuburb(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='10'
                    value={state} onChange={(e) => setState(e.target.value)} />
                </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'> <label >POSTCODE </label> </div>
                <div className = 'col-md-6'> <label>COUNTRY </label> </div>
            </div>
            <div className='row'>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='4'
                    value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                </div>
                <div className = 'col-md-6'>
                    <input type='text' className = 'form-control' maxLength='15'
                    value={country} onChange={(e) => setCountry(e.target.value)} />
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

        </div>
        <div className='container container-background align-items' >
           {/* <PriviewCard  title={cardname} email={cardEmail} phone={cardPhone} addr1={cardHouse} 
                        addr2={cardSuburb} postcode={cardPost} country={cardCountry} profilePic={cardProfilePic} />  */}
            <div className="card" >
              <div>
                  <h4>HCARD PREVIEW</h4>
              </div>
              <div className='card-top wrap'>
                  <div className="card-image" >
                      <img src={cardProfilePic} alt="avatar" ></img>
                  </div>
                  <div className="card-name">{cardname}</div>
              </div>
            <div className="card-bottom">
                <div className="card-padding"> 
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >EMAIL </label></div>
                        <div className="col-md-10">{cardEmail}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >PHONE </label></div>
                        <div className="col-md-10">{cardPhone}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >ADDRESS </label></div>
                        <div className="col-md-10">{cardHouse}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >&nbsp;</label></div>
                        <div className="col-md-10">{cardSuburb}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className = 'col-md-2'> <label >POSTCODE </label> </div>
                        <div className = 'col-md-3'> {cardPost} </div>
                        <div className = 'col-md-2'> <label >COUNTRY </label> </div>
                        <div className = 'col-md-3'> {cardCountry}  </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
  );
}

export default App;
