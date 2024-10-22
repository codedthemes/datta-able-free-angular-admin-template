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
  { value: 2, label: 'متزوج ولايعول' },
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
  { value: '49', label: 'الدينار_الليبي_للمقيمين_بطرابلس' },
  { value: '52', label: 'الدينار_الليبي_للمقيمين_بالحقول_النفطية' },
  { value: '65', label: 'دولار_أمريكي_سوق_أمريكا_نيوزيلندا_أمريكا_الشمالية_والجنوبية_كندا_اليابان' },
  { value: '66', label: 'جنيه_استرليني_سوق_بريطانيا' },
  { value: '67', label: 'يورو_سوق_أوروبا_الغربية_الأسكندنافية_جميع_دول_الغربية' },
  { value: '68', label: 'يورو_سوق_أوروبا_الشرقية_صربيا_كرواتيا_البوسنة_تركيا_روسيا_أوكرانيا_بولندا_رومانيا' },
  { value: '69', label: 'دولار_أمريكي_سوق_الشرق_الأوسط_الدول_العربية_إيران_إفريقيا' },
  { value: '70', label: 'دولار_أمريكي_سوق_الشرق_الأقصى_الهند_كوريا_الصين_باكستان_بنغلاديش_الفلبين_تايلاند' },
];
export let optionsProcedureCodeTypeEnd = [
  { value: 41, label: 'إنهاء خدمة بسبب_قانوني - 41' },
  { value: 42, label: 'فصل بسبب ضعف مستوى الأداء - 42' },
  { value: 43, label: 'إنهاء خدمة بسبب_صحي - 43' },
  { value: 44, label: 'إنهاء خدمة بسبب_الوفاة - 44' },
  { value: 45, label: 'إنهاء خدمة بسبب_التقاعد - 45' },
  { value: 46, label: 'إنهاء خدمة اسباب_اخرى - 46' },
  { value: 33, label: 'استقالة اسباب_شخصية - 33' },
  { value: 34, label: 'استقالة اسباب_صحية - 34' },
  { value: 38, label: 'استقالة لاسباب_خرى - 38' },
  { value: 30, label: 'نقل_داخل_القطاع - 30' },
  { value: 31, label: 'نقل_خارج_القطاع - 31' },
  { value: 50, label: 'إنهاء خدمة لشهيد_الواجب - 50' },
];
export let optionsClinic = [
  { id: '128b34e8-6595-446c-b630-4a8e5f214d83', name: 'مصحة النفط – طرابلس' },
  { id: 'eb06d390-2879-41d8-ae24-5db13ba5f140', name: 'مصحة ابن سيناء – بنغازي' },
  { id: '4148f325-142c-47a8-bf39-b2ce174ea974', name: 'مصحـة جالو' },
];

export let optionsPositionStatus = [
  { value: 0, label: 'شاغرة' },//Vacant
  { value: 1, label: 'فعليه' },//Actual
  { value: 2, label: 'منتدب عليها' },//Second
];
export let optionAppreciation = [
  { value: 0, label: 'ممتاز' },//Vacant
  { value: 1, label: 'جيد جدا' },//Actual
  { value: 2, label: 'جيد' },//Second
  { value: 3, label: 'مقبول'},//Second
];
