import React from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import deleteIcon from '../../../assets/delete_ic.png';
import './dashboard.css';
import {deleteUserRequest} from '../../../store/actions/school'

 function DeleteModal(props) {
  console.log('modalllll', props)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if(Object.keys(props.deleteRecord)) {
      props.deleteUserRequest({id: props.deleteRecord.id});
    }
  };

  return (
    <div>
        <img className="h-over" src={deleteIcon} sizes="25" onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete User"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure? want to delete selected record.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default  connect(null, {deleteUserRequest})(DeleteModal)