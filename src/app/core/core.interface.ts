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
  { value: 1, label: 'مستخدم' },
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
export let optionsPayrollStatus = [
  { value: 1, label: 'الدينار_الليبي_للمقيمين_بطرابلس' },
  { value: 2, label: 'الجنيه_الإسترليني_للمقيمين_بطرابلس' },
  { value: 3, label: 'الدولار_الأمريكي_للمقيمين_بطرابلس' },
  { value: 4, label: 'الدينار_الليبي_للمقيمين_بالحقول_والميناء' },
  { value: 5, label: 'الجنيه_الإسترليني_للمقيمين_بالحقول_والميناء' },
  { value: 6, label: 'خدمة_عسكرية' },
  { value: 7, label: 'الدولار_الأمريكي_للمقيمين_بالحقول_والميناء' },
  { value: 8, label: 'الدولار_الأمريكي_للمقيمين_من_الشرق_الأقصى' },
  { value: 9, label: 'الدولار_الأمريكي_للمقيمين_من_الشرق_الأوسط' },
];
export let optionsProcedureCodeTypeEnd = [
  { value: 41, label: 'بسبب_قانوني' },
  { value: 43, label: 'بسبب_صحي' },
  { value: 44, label: 'بسبب_الوفاة' },
  { value: 45, label: 'بسبب_التقاعد' },
  { value: 46, label: 'اسباب_اخرى' },
  { value: 50, label: 'شهيد_واجب' },
  { value: 33, label: 'اسباب_شخصية' },
  { value: 34, label: 'اسباب_صحية' },
  { value: 38, label: 'اسباب_خرى' },
  { value: 30, label: 'نقل_داخل_القطاع' },
  { value: 31, label: 'نقل_خارج_القطاع' },
];
export let optionsClinic = [
  { id: '128b34e8-6595-446c-b630-4a8e5f214d83', name: 'مصحة النفط – طرابلس' },
  { id: 'eb06d390-2879-41d8-ae24-5db13ba5f140', name: 'مصحة ابن سيناء – بنغازي' },
  { id: '4148f325-142c-47a8-bf39-b2ce174ea974', name: 'مصحـة جالو' },
];
