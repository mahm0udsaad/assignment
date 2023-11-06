import React from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { AiOutlineEye } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import GroupImage from './assets/Group.png';

function MaterialUIForm({ close }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-full">
    <Container>
    <div className="flex py-8 items-start gap-2 px-5">
    <img
    loading="lazy"
    src={GroupImage}
    className="aspect-[1.25] w-[35px] my-3 overflow-hidden max-w-full self-start"
    />
    <div className="text-neutral-700 text-2xl font-semibold mt-1">
    Buy Domain
    <p className="text-gray-400 text-lg">
    This information is required in order to reach you in case of problems with your registration
    </p>
    </div>
    </div>
    <form className='px-8 pb-4' onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6">First Name</Typography>
        <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter First Name"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6">Last Name</Typography>
        <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter Last Name"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">Company Name</Typography>
        <Controller
            name="companyName"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter Company Name"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">Address Line 1</Typography>
        <Controller
            name="addressLine1"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter Address Line 1"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6">City</Typography>
        <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter City"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6">State</Typography>
        <Controller
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter State"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6">Zip Code</Typography>
        <Controller
            name="zipCode"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter Zip Code"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6">Phone Number</Typography>
        <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                label="Enter Phone Number"
                fullWidth
                sx={ { borderRadius: 28 } } 
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6">Country</Typography>
        <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
            <TextField
                sx={ { borderRadius: 28 } } 
                label="Enter Country"
                fullWidth
                {...field}
            />
            )}
        />
        </Grid>
        <Grid item xs={12}>
        <Button sx={ { borderRadius: 28 } }  type="submit" variant="contained" color="success" size="medium">
            Buy Now
        </Button>
        </Grid>
    </Grid>
    </form>
    </Container>
    <section className="bg-slate-50 flex w-[354px] max-w-full grow flex-col -mr-5 mt-10 pl-6 pr-7 py-9 rounded-xl self-center max-md:px-5">
      <h2 className="text-neutral-700 text-lg font-medium capitalize whitespace-nowrap self-start">
        Domain Details
      </h2>
      <hr className="bg-neutral-200 w-full h-px mt-8 self-start" />
      <div className="flex w-full items-start justify-between gap-5 mt-9 self-start">
        <div className="text-neutral-700 text-lg font-medium lowercase">Tridmark.net</div>
        <div className="text-green-400 text-lg font-medium self-stretch whitespace-nowrap">
          15.40 USD
        </div>
      </div>
     <div className="mt-4 flex items-center">
     <BsCheck2Circle className='mx-4 text-green-600' />
     <p className="text-black text-base font-medium">
        Privacy protection is on
        <br />
      </p>
     </div>
      <div className="mt-4 flex items-center">
      <BsCheck2Circle className='mx-4 text-green-600' />
      <p className="text-black text-start font-medium ">
        Auto-renew is on
      </p>
      </div>
      <p className="text-neutral-600 text-sm mt-6 self-start">
        This domain will be auto-renewed around August 1 every year. You will automatically be
        billed when the renewal occurs.
      </p>
    </section>
    </div>
  );
}

export default MaterialUIForm;
