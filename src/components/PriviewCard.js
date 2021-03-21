
import avatar from '../images/profilePic.jpg';

const PriviewCard = ({title, email, phone, addr1, addr2, postcode, country, profilePic}) => {

    return (
        <div className="card" >
            <div>
                <h4>HCARD PREVIEW</h4>
            </div>
            <div className='card-top wrap'>
                <div className="card-image" >
                    <img className="resize" src={profilePic ==="" ? avatar: profilePic} alt="avatar" ></img>
                </div>
                <div className="card-name">{title}</div>
            </div>
            <div className="card-bottom">
                <div className="card-padding"> 
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >EMAIL </label></div>
                        <div className="col-md-10">{email}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >PHONE </label></div>
                        <div className="col-md-10">{phone}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >ADDRESS </label></div>
                        <div className="col-md-10">{addr1}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className="col-md-2"><label >&nbsp;</label></div>
                        <div className="col-md-10">{addr2}</div>
                    </div>
                    <div className='row card-subheading'>
                        <div className = 'col-md-2'> <label >POSTCODE </label> </div>
                        <div className = 'col-md-3'> {postcode} </div>
                        <div className = 'col-md-2'> <label >COUNTRY </label> </div>
                        <div className = 'col-md-3'> {country}  </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriviewCard
