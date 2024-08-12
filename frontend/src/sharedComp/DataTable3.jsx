import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForms, createForm } from '../redux/slices/formSlice';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export default function DataTable3({ open, setOpen, setOpenSnackBar }) {
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({});
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { forms, isSuccess, status, error } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(fetchForms());
  }, [dispatch]);

  useEffect(() => {
    console.log('Status:', status);
    console.log('Forms:', forms);
    console.log('Error:', error);

    if (status === 'loading') {
      setLoading(true);
    } else if (status === 'succeeded') {
      if (forms && Array.isArray(forms)) {
        const newRows = forms.map((item, i) => ({ ...item, id: i + 1 }));
        setRows(newRows);
      } else {
        setRows([]);
      }
      setLoading(false);
    } else if (status === 'failed') {
      setLoading(false);
      // You can handle the error here, e.g., display an error message
    }
  }, [forms, status, error]);

  useEffect(() => {
    if (isSuccess) {
      handleClose();
      setOpenSnackBar(true); // Assuming this shows a success message
    }
  }, [isSuccess, setOpenSnackBar]);

  const handleClose = () => {
    setOpen(false);
    setFormData({});
    setEdit(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      membershipType: formData.membershipType,
      address: formData.address,
      termsAccepted: formData.termsAccepted,
    };

    if (edit) {
      // Handle update logic if necessary
    } else {
      await dispatch(createForm(data));
    }
  };

  const handleEditClick = (data) => {
    setEdit(true);
    setFormData(data);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      // Handle delete logic if necessary
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 130 },
    { field: 'membershipType', headerName: 'Membership Type', width: 180 },
    { field: 'address', headerName: 'Address', width: 250 },
    {
      field: 'termsAccepted',
      headerName: 'Terms Accepted',
      width: 150,
      renderCell: (params) => (
        <div>{params.row.termsAccepted ? 'Yes' : 'No'}</div>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div className='flex gap-3 items-center h-full'>
          <div
            className='p-2 bg-gray-200 rounded-full shadow-2xl cursor-pointer hover:shadow-inner hover:scale-[1.1] transition hover:bg-blue-600 hover:text-white'
            onClick={() => handleEditClick(params.row)}
          >
            <CiEdit className='text-xl' />
          </div>
          <div
            className='p-2 bg-gray-200 rounded-full shadow-xl cursor-pointer hover:shadow-inner hover:scale-[1.1] hover:bg-red-600 hover:text-slate-200 transition'
            onClick={() => handleDelete(params.row.id)}
          >
            <MdDelete className='text-xl' />
          </div>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div>
        <p>Error loading data: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={10}
        rowsPerPageOptions={[5, 10, 15]}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {edit ? 'Edit Form' : 'Add Form'}
          </Typography>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-4 my-4'>
                <div>
                  <input
                    type="text"
                    placeholder='Name'
                    className='p-2 py-1 outline-none border border-gray-400 rounded'
                    name='name'
                    onChange={handleChange}
                    value={formData.name || ''}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder='Email'
                    className='p-2 py-1 outline-none border border-gray-400 rounded'
                    name='email'
                    onChange={handleChange}
                    value={formData.email || ''}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder='Phone'
                    className='p-2 py-1 outline-none border border-gray-400 rounded'
                    name='phone'
                    onChange={handleChange}
                    value={formData.phone || ''}
                  />
                </div>
                <div>
                  <select
                    name='gender'
                    className='p-2 py-1 outline-none border border-gray-400 rounded'
                    onChange={handleChange}
                    value={formData.gender || ''}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <select
                    name='membershipType'
                    className='p-2 py-1 outline-none border border-gray-400 rounded'
                    onChange={handleChange}
                    value={formData.membershipType || ''}
                  >
                    <option value="">Select Membership Type</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="vip">VIP</option>
                  </select>
                </div>
                <div className='col-span-2'>
                  <textarea
                    name='address'
                    placeholder='Address'
                    className='p-2 py-1 outline-none border border-gray-400 rounded w-full'
                    rows={3}
                    onChange={handleChange}
                    value={formData.address || ''}
                  />
                </div>
                <div className='col-span-2'>
                  <label>
                    <input
                      type="checkbox"
                      name='termsAccepted'
                      checked={formData.termsAccepted || false}
                      onChange={handleChange}
                    />
                    I accept the terms and conditions
                  </label>
                </div>
              </div>
              <button type='submit' className='bg-blue-600 text-white p-2 rounded py-1 active:bg-blue-800'>
                Submit
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
