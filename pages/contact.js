import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import { UseForm, Controller } from "react-hook-form";

const contact = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = UseForm();
  const onSubmit = (data) => {
    // TODO: create a function that will make a post req..
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box xs={12} sm={6} md={6} lg={6} sx={{ pt: 15 }}>
        <Grid container sx={{ px: 3, mt: 5 }}>
          <Grid
            item
            direction="column"
            xs={12}
            sm={6}
            lg={6}
            className="contact"
          >
            <Grid
              item
              alignItems="center"
              justify="center"
              className="contactCard"
            >
              <Typography variant="h4" component="h4">
                We are always hear to serve you...
              </Typography>

              <Grid item>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First Name required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      id="filled-basic"
                      label="First Name"
                      value={value}
                      onChange={onChange}
                      variant="outlined"
                      className="formInput"
                      error={!!error}
                      helperText={error ? error.message : null}
                      style={{ width: "70%" }}
                      sx={{ mt: 2 }}
                    />
                  )}
                />
              </Grid>

              <Grid item>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last Name required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      id="lastName"
                      label="Last Name"
                      value={value}
                      onChange={onChange}
                      variant="outlined"
                      className="formInput"
                      error={!!error}
                      helperText={error ? error.message : null}
                      style={{ width: "70%" }}
                      sx={{ mt: 2 }}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      id="filled-basic"
                      label="Email"
                      name="Email"
                      value={value}
                      onChange={onChange}
                      variant="outlined"
                      error={!!error}
                      helperText={error ? error.message : null}
                      style={{ width: "70%" }}
                      sx={{ mt: 2 }}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: "Phone Number required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Phone Number"
                      value={value}
                      onChange={onChange}
                      id="margin-none"
                      variant="outlined"
                      style={{ width: "70%" }}
                      sx={{ mt: 2, mb: 2 }}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="message"
                  control={control}
                  rules={{
                    required: "Message is required",
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextareaAutosize
                      aria-label="maximum height"
                      minRows={9}
                      placeholder="Minimum 3 rows"
                      value={value}
                      onChange={onChange}
                      style={{ width: "70%" }}
                      sx={{ mt: 2 }}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </Grid>
              <p>{errors["message"] ? errors["message"].message : null}</p>
              <Grid item>
                <Button
                  variant="contained"
                  style={{ width: "70%" }}
                  type="submit"
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
export default contact;
