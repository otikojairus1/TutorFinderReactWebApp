import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link ,
    useNavigate} from "react-router-dom";

export default function DoctorList() {

    const [accountType, setAccountType] = React.useState('');
    const [id, setId] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [fullnames, setFullnames] = React.useState('');
    const [createdAt, setCreatedAt] = React.useState('');
    const navigate = useNavigate();

    React.useEffect(()=>{
    axios.get('https://tutorfinder-api.herokuapp.com/api/tutors')
    .then((response)=>{



        response.data.Data.map((each)=>{
             setAccountType(each.accountType);
            setId(each.id);
             setEmail(each.emailId);
             setCreatedAt(each.created_at);

  // console.log(accountType, id, email);
        })
  
    // setAccountType(response.data.Data.accountType);
    // setId(response.data.Data.id);
    // setEmail(response.data.Data.emailId);

   // console.log(response.data.Data);


})
.catch((err)=>{console.log(err)})
    });

    const navigateHandler = ()=>{
        navigate('/view/doctor', {id:id,email:email,joined:createdAt, fullnames:fullnames, location2:location })
    }
  return (
    //   <Link to='/view/doctor'>
    <List onClick={navigateHandler} sx={{ width: '100%', maxWidth: '75%', cursor:'pointer', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary={email}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Joined on {"  "}
              </Typography>
              {/* {"  "+createdAt} */}
              {new Date(createdAt).toDateString()}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     
    </List>
    // </Link>
  );
}
