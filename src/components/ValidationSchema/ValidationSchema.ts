import * as yup from 'yup';

export const ValidationUserInformationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required('First name is required')
    .max(30, 'Are you really sure that your First Name is that big?'),
  lastName: yup
    .string()
    .trim()
    .required('Last name is required')
    .max(30, 'Are you really sure that your Last Name is that big?'),
  about: yup
    .string()
    .trim()
    .required('This field is required')
    .max(1500, 'Too many characters'),
  phoneNumber: yup
    .string()
    .matches(
      /^[+][0-9]{12}$/,
      'Номер телефона должен начинаться со знака + и содержать 12 цифр',
    )
    .required('Phone Number is required'),
  gender: yup.string().required('This field is required'),
  education: yup.object({
    title: yup
      .string()
      .trim()
      .required('This field is required')
      .max(500, 'Too many characters'),
    faculty: yup
      .string()
      .trim()
      .required('This field is required')
      .max(500, 'Too many characters'),
    spec: yup
      .string()
      .trim()
      .required('This field is required')
      .max(500, 'Too many characters'),
    yearStart: yup
      .number()
      .required('This field is required')
      .integer('fvbo')
      .min(1942, 'The value must be more than 1942')
      .max(
        new Date().getFullYear(),
        `The value must be less than ${new Date().getFullYear() + 1}`,
      ),
    yearEnd: yup
      .number()
      .required('This field is required')
      .integer('fvbo')
      .min(1942, 'The value must be more than 1942')
      .max(
        new Date().getFullYear(),
        `The value must be less than ${new Date().getFullYear() + 1}`,
      ),
  }),
  workExperience: yup.object({
    organization: yup
      .string()
      .trim()
      .required('This field is required')
      .max(50, 'Too many characters'),
    position: yup
      .string()
      .trim()
      .required('This field is required')
      .max(40, 'Too many characters'),
    yearStart: yup
      .string()
      .trim()
      .required('This field is required')
      .min(4, 'Must be more than 4 characters')
      .max(5, 'Too many characters'),
    yearEnd: yup
      .string()
      .trim()
      .min(4, 'Must be more than 4 characters')
      .max(5, 'Too many characters'),
  }),
  address: yup.object({
    city: yup
      .string()
      .trim()
      .required('This field is required')
      .max(50, 'Too many characters'),
    street: yup
      .string()
      .trim()
      .required('This field is required')
      .max(30, 'Too many characters'),
    line2: yup
      .string()
      .trim()
      .required('This field is required')
      .max(50, 'Too many characters'),
  }),
});

// gender: null,
// photo: '',
// birthDate: null,
// skills: [],
// сlassesFormat: [],
// education: {
//   title: '',
//   faculty: '',
//   spec: '',
//   yearStart: 0,
//   yearEnd: 0,
//   tillNow: false,
// },
// workExperience: {
//   organization: '',
//   position: '',
//   yearStart: 0,
//   yearEnd: 0,
//   tillNow: false,
// },
// address: {
//   city: '',
//   street: '',
//   line2: '',
// },
// _id: '',
