export interface LoginContent {
  id: string;
  name: string;
  type: string;
  officeId: string;
  accessToken: string;
}

export interface LoginRequest {
  userName: string;
  password: string;
}

export interface ChangePasswordCommand  {
  NewPassword: string;
}

export interface ForgotPasswordCommand  {
  UserName: string;
}
export interface UserAuthenticationModel
{
  Id :string;
  permisstions: Array<any>;
  accessToken: string;
  isFirstTimeLogin: boolean;
}

export interface VerifyOtpCommand{
  Otp : string;
}
export let optionsBooleanGeneral = [
  { value: true, label: 'نعم' },
  { value: false, label: 'لا' },
];
export let optionsFunctionalCategory = [
  { value: 'A', label: 'عليا' },
  { value: 'B', label: 'تنفيذيه' },
  { value: 'C', label: 'أساسية' },
];

export let optionsGenderGeneral = [
  { value: 1, label: 'ذكر' },
  { value: 2, label: 'انثي' },
];

export let optionsJobClassification = [
  { value: 1, label: 'موظف' },
  { value: 2, label: 'مدير إدارة' },
  { value: 3, label: 'رئيس قسم' },
  { value: 4, label: 'رئيس وحدة' },
  { value: 5, label: 'مدير عام' },
  { value: 6, label: 'مدير مكتب' },
];

export let optionsEvaluation = [
  { value: 1, label: 'ممتاز' },
  { value: 2, label: 'جيد جدا' },
  { value: 3, label: 'جيد' },
  { value: 4, label: 'متوسط ' },
  { value: 5, label: 'ضعيف ' },
  { value: 6, label: 'إيفاد ' },
  { value: 7, label: 'لايوجد ' },
];

export let optionsSocialStatus = [
  { value: 1, label: 'أعزب' },
  { value: 2, label: 'متزوج' },
  { value: 3, label: 'متزوج ويعول' },

];
export let optionsProcedureCode = [
  { value: 1, label: 'منسب' },
  { value: 2, label: 'تعيين' },
  { value: 3, label: 'إعادة تعيين' },
  { value: 4, label: 'نقل' },
  { value: 6, label: 'تعيين بموافقة المؤسسة' },
];
export let optionsOvertime = [
  { value: 1, label: 'داخل' },
  { value: 2, label: 'خارج' },

];
export let optionsFamilyDescription = [
  { value: 1, label: 'أم' },
  { value: 2, label: 'أب' },
  { value: 3, label: 'زوجة_زوج' },
  { value: 4, label: 'ابن' },
  { value: 5, label: 'ابنة' },
];
