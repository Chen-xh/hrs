export let rules = {
  username: [
    {required: true, message: '请输入名称', trigger: 'blur'},
    {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
  ],
  gender: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  email: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  phone: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  qq: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  telephone: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  address: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  postcode: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  nationality: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  birth_place: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  birth_date: [
    {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
  ],
  ethnic: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  political_affiliation: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  political_status: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  id_number: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  social_security_number: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  age: [
    {required: true, message: '年龄不能为空'},
    {type: 'number', message: '年龄必须为数字值'}
  ],
  education: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  professional: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  salary_standard: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  bank_deposit: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  account: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  specialty: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  registrant: "",
  registration_time: "",
  hobby: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  personal_resume: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  family_relationship_information: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  remarks: '',
  position_classification: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  position: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  lo1: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  lo2: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
  lo3: [
    {required: true, message: '请选择', trigger: 'change'}
  ],
}
export let rules_salary = {
  standardName: [
    {required: true, message: '请输入名称', trigger: 'blur'},
    {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
  ],
  maker: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],
  registrant: [
    {required: true, message: '请填写', trigger: 'blur'}
  ],

}
