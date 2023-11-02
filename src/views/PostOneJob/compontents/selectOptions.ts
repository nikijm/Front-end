import { reactive, ref } from 'vue'

export const jobTypeOptions = ['fullTime', 'Freelance', 'Contract', 'Dispatched']
export const industryOption = [
  { label: 'No. of Employees', value: 'No. of Employees' },
  { label: 'Company Homepage', value: 'Company Homepage' },
  { label: 'About Company', value: 'About Company' },
  { label: 'Upload Logo', value: 'Upload Logo' }
]
export const jobCategoryOptions = [
  { label: 'Any', value: 'Any' },
  { label: 'UI Design', value: 'UI Design' },
  { label: 'Product Management', value: 'Product Management' },
  { label: 'Consulting', value: 'Consulting' },
  { label: 'Front-end', value: 'Front-end' },
  { label: 'Back-end', value: 'Back-end' },
  { label: 'System', value: 'System' },
  { label: 'Security', value: 'Security' },
  { label: 'Server', value: 'Server' },
  { label: 'Web', value: 'Web' },
  { label: 'Mobile App', value: 'Mobile App' },
  { label: 'Software', value: 'Software' },
  { label: 'Database', value: 'Database' },
  { label: 'Gaming', value: 'Gaming' },
  { label: 'O&M', value: 'O&M' },
  { label: 'AI', value: 'AI' }
]
export const experienceOptions = [
  { label: '1-3 Years', value: '1-3 Years' },
  { label: '3-5 Years', value: '3-5 Years' },
  { label: '5-10 Years', value: '5-10 Years' },
  { label: '10+ Years', value: '10+ Years' }
]
export const educationOptions = [
  { label: 'Any', value: 'Any' },
  { label: 'Diploma', value: 'Diploma' },
  { label: 'Undergraduate', value: 'Undergraduate' },
  { label: 'Master’s Degree', value: 'Master’s Degree' },
  { label: 'Doctorate', value: 'Doctorate' }
]

export const workStyleOptions = [
  { label: 'Office work', value: 'Office work' },
  { label: 'Office Occasional', value: 'Office Occasional' },
  { label: 'Fully remote', value: 'Fully remote' }
]
export const salaryOptions = [
  { label: 'monthly', value: 'monthly' },
  { label: 'Yearsly', value: 'Yearsly' }
]
export const countryOptions = [
  { label: 'monthly', value: 'monthly' },
  { label: 'Yearsly', value: 'Yearsly' }
]
export const languagesOptions = [
  { label: 'Japanese', value: 'Japanese' },
  { label: 'English', value: 'English' },

  { label: 'Chinese', value: 'Chinese' },
  { label: 'Korean', value: 'Korean' },
  { label: 'Spanish', value: 'Spanish' },

  { label: 'Portuguese', value: 'Portuguese' },
  { label: 'Vietnamese', value: 'Vietnamese' },
  { label: 'Tagalog (Filipino)', value: 'Tagalog (Filipino)' },

  { label: 'Thai', value: 'Thai' },
  { label: 'Bahasa Indonesia', value: 'Bahasa Indonesia' },
  { label: 'Russian', value: 'Russian' },

  { label: 'Hindi', value: 'Hindi' },
  { label: 'German', value: 'German' },
  { label: 'French', value: 'French' },

  { label: 'Italian', value: 'Italian' },
  { label: 'Dutch', value: 'Dutch' },
  { label: 'Turkish', value: 'Turkish' },

  { label: 'Ukrainian', value: 'Ukrainian' },
  { label: 'Malay', value: 'Malay' },
  { label: 'Romanian', value: 'Romanian' }
]

//表单校验规则
export const jobsFormRule = reactive({
  type: [{ required: true, message: 'Please fill in the user name', trigger: 'change' }],
  industry: [{ required: true, message: 'Please fill in the industry', trigger: 'change' }],
  title: [{ required: true, message: 'Please fill in the job title', trigger: 'blur' }],
  category: [{ required: true, message: 'Please fill in the job category', trigger: 'change' }],
  experience: [{ required: true, message: 'Please fill in the job experience', trigger: 'change' }],
  education: [{ required: true, message: 'Please fill in the job education', trigger: 'change' }],
  workStyle: [{ required: true, message: 'Please fill in the workStyle', trigger: 'change' }],
  salary: [{ required: true, message: 'Please fill in the salary', trigger: 'change' }]
})
export const jobsFormLocationRule = reactive({
  workLocation: [{ required: true }],
  country: [{ required: true, message: 'Please fill in the country', trigger: 'change' }],
  streetNumber: [{ required: true, message: 'Please fill in the streetNumber', trigger: 'blur' }],
  cityTown: [{ required: true, message: 'Please fill in the city/town', trigger: 'blur' }],
  postcode: [{ required: true, message: 'Please fill in the job postcode', trigger: 'blur' }],
  prefecture: [{ required: true, message: 'Please fill in the prefecture', trigger: 'change' }],
  skills: [{ required: true, message: 'Please fill in the skills', trigger: 'change' }],
  languages: [{ required: true, message: 'Please fill in the languages', trigger: 'change' }]
})
