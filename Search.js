import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Autocomplete, Button, CircularProgress } from '@mui/material';

// project-imports
import MainCards from 'user/dashboard/MainCards';
import data from 'data/movies';
// assets
import { Book, Profile } from 'iconsax-react';
// material-ui
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Grid,
  Stack,
  Chip,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

// project-imports
// import MainCard from 'components/MainCard';

// ==============================|| TAB PANEL ||============================== //

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| TABS - ICON ||============================== //

export default function Search() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChanges = (event, newValue) => {
    setSelectedValues(newValue);
  };
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);
      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Grid item xs={12} spacing={3}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center'
          // height: '100vh'
        }}
      >
        <MainCards sx={{ width: '75%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Stack direction="row" justifyContent="space-evenly" alignContent="center">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="By Criteria" icon={<Profile />} iconPosition="start" {...a11yProps(0)} />
                <Tab label="By Profile ID" icon={<Book />} iconPosition="start" {...a11yProps(1)} />
                <Tab label="Saved Search" icon={<Book />} iconPosition="start" {...a11yProps(2)} />
              </Tabs>
            </Stack>
          </Box>

          <TabPanel value={value} index={0}>
            <Grid item spacing={2}>
              <Typography variant="h5" component="h2" style={{ padding: '10px' }}>
                Search profiles using the below criteria
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Basic Details" />
              </Stack>
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Age
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <TextField sx={{ width: 150 }} id="outlined-basic-default" placeholder="Age" />
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      To
                    </Typography>
                    <TextField sx={{ width: 150 }} id="outlined-basic-default" placeholder="Age" />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Height
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 150 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Height"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      To
                    </Typography>
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 150 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Height"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Profile Created By
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Created By"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Marital Status
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Marital Status"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Mother Tongue
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Mother Tongue"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Physical Status
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Physical Status"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Religious Details" />
              </Stack>
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Religion
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Religion"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Caste
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Caste"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Subcaste
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Subcaste"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Dosha(m)
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Dosha(m)"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Professional Details" />
              </Stack>
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Occupation
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder=" Occupation"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Annual Income
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 150 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Annual Income"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      To
                    </Typography>
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 150 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Asynchronous"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Employment Type
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Employment Type"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Education
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 340 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Education"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Location Details" />
              </Stack>
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Nearby Profiles
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="Matches near your location"
                          control={<Checkbox defaultChecked />}
                          label="Matches near your location"
                          labelPlacement="Matches near your location"
                          // sx={{ ml: 1 }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Country
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 150 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Country"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Citizenship
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 150 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Citizenship"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Lifestyle" />
              </Stack>
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Mutual Hobbies
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="Matches who have similar hobbies as you"
                          control={<Checkbox defaultChecked />}
                          label="Matches who have similar hobbies as you"
                          labelPlacement="Matches who have similar hobbies as you"
                          // sx={{ ml: 1 }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Eating Habits
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      multiple
                      limitTags={2}
                      id="multiple-limit-tags"
                      options={data}
                      disableCloseOnSelect
                      value={selectedValues}
                      onChange={handleChanges}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.label}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder={selectedValues.length > 0 ? '' : 'Eating Habits'} />}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          p: 1,
                          width: '450px'
                        },
                        '& .MuiAutocomplete-tag': {
                          bgcolor: 'primary.lighter',
                          border: '1px solid',
                          borderRadius: 1,
                          height: 32,
                          pl: 1.5,
                          pr: 1.5,
                          lineHeight: '32px',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            paddingLeft: 0,
                            paddingRight: 0
                          },
                          '& .MuiSvgIcon-root': {
                            color: 'primary.main',
                            ml: 1,
                            mr: -0.75,
                            '&:hover': {
                              color: 'primary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Smoking Habits
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      multiple
                      limitTags={2}
                      id="multiple-limit-tags"
                      options={data}
                      disableCloseOnSelect
                      value={selectedValues}
                      onChange={handleChanges}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.label}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder={selectedValues.length > 0 ? '' : 'Smoking Habits'} />}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          p: 1,
                          width: '450px'
                        },
                        '& .MuiAutocomplete-tag': {
                          bgcolor: 'primary.lighter',
                          border: '1px solid',
                          borderRadius: 1,
                          height: 32,
                          pl: 1.5,
                          pr: 1.5,
                          lineHeight: '32px',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            paddingLeft: 0,
                            paddingRight: 0
                          },
                          '& .MuiSvgIcon-root': {
                            color: 'primary.main',
                            ml: 1,
                            mr: -0.75,
                            '&:hover': {
                              color: 'primary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Drinking Habits
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      multiple
                      limitTags={2}
                      id="multiple-limit-tags"
                      options={data}
                      disableCloseOnSelect
                      value={selectedValues}
                      onChange={handleChanges}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.label}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder={selectedValues.length > 0 ? '' : 'Drinking Habits'} />}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          p: 1,
                          width: '450px'
                        },
                        '& .MuiAutocomplete-tag': {
                          bgcolor: 'primary.lighter',
                          border: '1px solid',
                          borderRadius: 1,
                          height: 32,
                          pl: 1.5,
                          pr: 1.5,
                          lineHeight: '32px',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            paddingLeft: 0,
                            paddingRight: 0
                          },
                          '& .MuiSvgIcon-root': {
                            color: 'primary.main',
                            ml: 1,
                            mr: -0.75,
                            '&:hover': {
                              color: 'primary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Family Details" />
              </Stack>
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Family Status
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      multiple
                      limitTags={2}
                      id="multiple-limit-tags"
                      options={data}
                      disableCloseOnSelect
                      value={selectedValues}
                      onChange={handleChanges}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.label}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder={selectedValues.length > 0 ? '' : 'Family Status'} />}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          p: 1,
                          width: '450px'
                        },
                        '& .MuiAutocomplete-tag': {
                          bgcolor: 'primary.lighter',
                          border: '1px solid',
                          borderRadius: 1,
                          height: 32,
                          pl: 1.5,
                          pr: 1.5,
                          lineHeight: '32px',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            paddingLeft: 0,
                            paddingRight: 0
                          },
                          '& .MuiSvgIcon-root': {
                            color: 'primary.main',
                            ml: 1,
                            mr: -0.75,
                            '&:hover': {
                              color: 'primary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Family Value
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      multiple
                      limitTags={2}
                      id="multiple-limit-tags"
                      options={data}
                      disableCloseOnSelect
                      value={selectedValues}
                      onChange={handleChanges}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.label}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder={selectedValues.length > 0 ? '' : 'Family Value'} />}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          p: 1,
                          width: '450px'
                        },
                        '& .MuiAutocomplete-tag': {
                          bgcolor: 'primary.lighter',
                          border: '1px solid',
                          borderRadius: 1,
                          height: 32,
                          pl: 1.5,
                          pr: 1.5,
                          lineHeight: '32px',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            paddingLeft: 0,
                            paddingRight: 0
                          },
                          '& .MuiSvgIcon-root': {
                            color: 'primary.main',
                            ml: 1,
                            mr: -0.75,
                            '&:hover': {
                              color: 'primary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Family Type
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      multiple
                      limitTags={2}
                      id="multiple-limit-tags"
                      options={data}
                      disableCloseOnSelect
                      value={selectedValues}
                      onChange={handleChanges}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.label}
                        </li>
                      )}
                      renderInput={(params) => <TextField {...params} placeholder={selectedValues.length > 0 ? '' : 'Family Type'} />}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          p: 1,
                          width: '450px'
                        },
                        '& .MuiAutocomplete-tag': {
                          bgcolor: 'primary.lighter',
                          border: '1px solid',
                          borderRadius: 1,
                          height: 32,
                          pl: 1.5,
                          pr: 1.5,
                          lineHeight: '32px',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            paddingLeft: 0,
                            paddingRight: 0
                          },
                          '& .MuiSvgIcon-root': {
                            color: 'primary.main',
                            ml: 1,
                            mr: -0.75,
                            '&:hover': {
                              color: 'primary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Recently active profiles" />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5">Profile Created</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Profiles based on created date</Typography>
            </Grid>
            <Grid container spacing={2} style={{ padding: '10px' }}>
              <Grid item>
                <Button variant="outlined">All</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Today</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Last 3 days</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">One week</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">One month</Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack justifyContent="initial" style={{ padding: '20px' }}>
                <Chip label="Profile Type" />
              </Stack>
            </Grid>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Profiles with Photo
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="Matches who have added photos"
                          control={<Checkbox defaultChecked />}
                          label="Matches who have added photos"
                          labelPlacement="Matches who have added photos"
                          // sx={{ ml: 1 }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12} spacing={3} style={{ padding: '10px' }}>
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="body1" style={{ padding: '10px' }}>
                      Dont show profiles
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Autocomplete
                      multiple
                      limitTags={2}
                      id="multiple-limit-tags"
                      options={data}
                      disableCloseOnSelect
                      value={selectedValues}
                      onChange={handleChanges}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox style={{ marginRight: 8 }} checked={selected} />
                          {option.label}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField {...params} placeholder={selectedValues.length > 0 ? '' : "Don't show profiles"} />
                      )}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          p: 1,
                          width: '450px'
                        },
                        '& .MuiAutocomplete-tag': {
                          bgcolor: 'primary.lighter',
                          border: '1px solid',
                          borderRadius: 1,
                          height: 32,
                          pl: 1.5,
                          pr: 1.5,
                          lineHeight: '32px',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            paddingLeft: 0,
                            paddingRight: 0
                          },
                          '& .MuiSvgIcon-root': {
                            color: 'primary.main',
                            ml: 1,
                            mr: -0.75,
                            '&:hover': {
                              color: 'primary.dark'
                            }
                          }
                        }
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12}>
                <Grid item xs={12} md={7}>
                  <Stack direction="row" justifyContent="flex-end" alignContent="center">
                    <Button variant="outlined">Clear All</Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Stack direction="row" justifyContent="flex-end" alignContent="center">
                    <Button variant="outlined">Save & Search</Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Stack direction="row" justifyContent="flex-end" alignContent="center">
                    <Button variant="shadow" color="info">
                      Search
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Stack direction="row" justifyContent="space-between" alignContent="center">
              <Grid container xs={12}>
                <Grid item xs={12} md={5}>
                  <Stack direction="row" justifyContent="flex-end" alignContent="center">
                    <Autocomplete
                      id="asynchronous-demo"
                      sx={{ width: 150 }}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Asynchronous"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </>
                            )
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack direction="row" justifyContent="flex-start" alignContent="center">
                    <Typography variant="caption">hai</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </TabPanel>
          <TabPanel value={value} index={2}></TabPanel>
        </MainCards>
      </Box>
    </Grid>
  );
}
