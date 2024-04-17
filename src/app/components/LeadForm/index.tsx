import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { useFormik } from "formik";
import { postLeadForm } from "../../utils/apiMethods";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required"),
  company: Yup.string()
    .min(2, "Company name must be at least 2 characters")
    .required("Company name is required"),
});

export default function LeadForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // Handle form submission
      console.log("Form submitted with values:", values);
      const res = await postLeadForm(values);
      console.log(res);
      navigate("/australia-business");
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Experience Excellence: Start Your Free Trial Today!
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              label="First Name"
              autoFocus
            />
            {formik.touched.firstName && formik.errors.firstName &&<div className="text-red-300 text-xs py-1">
            {formik.errors.firstName}
              </div>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              name="lastName"
              autoComplete="family-name"
            />
            {formik.touched.lastName && formik.errors.lastName &&<div className="text-red-300 text-xs py-1">
            {formik.errors.lastName}
              </div>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              autoComplete="email"
            />
             {formik.touched.email && formik.errors.email &&<div className="text-red-300 text-xs py-1">
            {formik.errors.email}
              </div>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="phone"
              label="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              type="text"
              id="phone"
            />
            {formik.touched.phone && formik.errors.phone &&<div className="text-red-300 text-xs py-1">
            {formik.errors.phone}
              </div>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              label="Company Name"
              type="text"
              id="company"
            />
             {formik.touched.company && formik.errors.company &&<div className="text-red-300 text-xs py-1">
            {formik.errors.company}
              </div>}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Start Free Trial
        </Button>
      </Box>
    </Box>
  );
}
