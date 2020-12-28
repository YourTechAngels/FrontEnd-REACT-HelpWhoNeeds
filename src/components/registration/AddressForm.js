import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const useStyles = {
  textFld: { width: '85%', height: 40, paddingLeft: 8 } , 
  button: {
    border: '4px',
    color: "default",
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: '10px',
  },
};


  export default function AddressForm(props) {

    const initialInputState = { postcode:"", address1:"", address2:"", city:"" , country:""} 
    
    const [addressData, setAddressData] = useState({initialInputState})

    const { postcode, address1, address2, city, country } = addressData
    

    const handleChange= (e) => {
      e.preventDefault();
      setAddressData({...addressData,[e.target.name]: e.target.value});
      console.log(addressData)
    }

    return (
     
   <React.Fragment>
     
           
      <Grid container spacing={3} >
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="postcode"
            name="postcode"
            label="Post code"
            variant="outlined"
            onChange = { handleChange }
            value= {postcode || ''}
            style = {useStyles.textFld}
            autoComplete=" postal-code"
            InputProps={{endAdornment: <Button variant = "contained" 
            onClick={() => { console.log('Find Address button clicked') }}>Find Address</Button>}}
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            onChange = { handleChange }
            value= {address1 || ''}
            label="Address line 1"
            variant="outlined"
            style = {useStyles.textFld}
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            variant="outlined"
            onChange = { handleChange }
            value= {address2 || ''}
            style = {useStyles.textFld}
            autoComplete="address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange = { handleChange }
            value= {city || ''}
            variant="outlined"
            style = {useStyles.textFld}
            autoComplete="address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          required
           id="country" 
           name="country"  
           variant="outlined" 
           onChange = { handleChange }
           value= {country || ''}
           style = {useStyles.textFld}
           label="Country" />
        </Grid>
        </Grid>
       
    </React.Fragment>   
  
)}