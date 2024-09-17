import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      // {
      //   id: 'dashboard',
      //   title: 'Dashboard',
      //   type: 'item',
      //   url: '/dashboard',
      //   icon: 'feather icon-home',
      //   classes: 'nav-item'
      // }
    ]
  },
  // {
  //   id: 'ui-element',
  //   title: 'UI ELEMENT',
  //   type: 'group',
  //   icon: 'icon-ui',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Component',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumb & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'forms',
  //   title: 'Forms & Tables',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'forms-element',
  //       title: 'Form Elements',
  //       type: 'item',
  //       url: '/forms/basic',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     },
  //     {
  //       id: 'tables',
  //       title: 'Tables',
  //       type: 'item',
  //       url: '/tables/bootstrap',
  //       classes: 'nav-item',
  //       icon: 'feather icon-server'
  //     }
  //   ]
  // },
  // {
  //   id: 'chart-maps',
  //   title: 'Chart',
  //   type: 'group',
  //   icon: 'icon-charts',
  //   children: [
  //     {
  //       id: 'apexChart',
  //       title: 'ApexChart',
  //       type: 'item',
  //       url: 'apexchart',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     }
  //   ]
  // },
  // {
  //   id: 'pages',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'icon-pages',
  //   children: [
  //     {
  //       id: 'auth',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'feather icon-lock',
  //       children: [
  //         {
  //           id: 'signup',
  //           title: 'Sign up',
  //           type: 'item',
  //           url: '/auth/signup',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'signin',
  //           title: 'Sign in',
  //           type: 'item',
  //           url: '/auth/signin',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     // {
  //     //   id: 'disabled-menu',
  //     //   title: 'Disabled Menu',
  //     //   type: 'item',
  //     //   url: 'javascript:',
  //     //   classes: 'nav-item disabled',
  //     //   icon: 'feather icon-power',
  //     //   external: true
  //     // },
  //     // {
  //     //   id: 'buy_now',
  //     //   title: 'Buy Now',
  //     //   type: 'item',
  //     //   icon: 'feather icon-book',
  //     //   classes: 'nav-item',
  //     //   url: 'https://codedthemes.com/item/datta-able-angular/',
  //     //   target: true,
  //     //   external: true
  //     // }
  //   ]
  // },


  {
    id: 'user-management',
    title: 'الإعدادات الرئيسية',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'الإعدادات الرئيسية',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'الصلاحيات',
            type: 'item',
            url: '/Permission'
          },
          {
            id: 'badges',
            title: 'المستخدمين',
            type: 'item',
            url: '/Users'
          }
          // ,{
          //   id: 'breadcrumb-pagination',
          //   title: 'أنشطة المستخدمين',
          //   type: 'item',
          //   url: '/basic/breadcrumb-paging'
          // },
          // {
          //   id: 'collapse',
          //   title: 'إعدادات النظام',
          //   type: 'item',
          //   url: '/basic/collapse'
          // }
        ]
      }
    ]
  },



  {
    id: 'user-management',
    title: 'التعريفات',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'التعريفات',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
          {
            id: 'button',
            title: 'المصارف',
            type: 'item',
            url: '/bank'
          },
          {
            id: 'badges',
            title: 'فروع المصارف',
            type: 'item',
            url: '/BankBranches'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'تصنيف فروع المصارف ',
            type: 'item',
            url: '/ClassificationBankBranches'
          },
          {
            id: 'collapse',
            title: 'أنواع العلاوات',
            type: 'item',
            url: '/BonusesTypes'
          },
          {
            id: 'collapse',
            title: 'أنواع المستندات',
            type: 'item',
            url: '/DocumentTypes'
          },
          {
            id: 'collapse',
            title: 'أنواع التقييمات',
            type: 'item',
            url: '/EvaluationsTypes'
          },
          {
            id: 'collapse',
            title: 'أنواع المكافاّت',
            type: 'item',
            url: '/RewardsTypes'
          },
          {
            id: 'collapse',
            title: 'أنواع الإجازات',
            type: 'item',
            url: '/VacationsTypes'
          },
          {
            id: 'collapse',
            title: 'المؤهلات العلمية',
            type: 'item',
            url: '/ScientificQualifications'
          },
          {
            id: 'collapse',
            title: 'المحاكم',
            type: 'item',
            url: '/Courts'
          },
          {
            id: 'collapse',
            title: 'الجنسيات',
            type: 'item',
            url: '/Nationalities'
          },
          {
            id: 'collapse',
            title: 'الجزاءات',
            type: 'item',
            url: '/Penalties'
          }
        ]
      }
    ]
  },
  {
    id: 'user-management',
    title: 'الشؤون الإدارية',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'الشؤون الإدارية',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'button',
            title: 'الهيكلية الإدارية',
            type: 'item',
            url: '/OrganizationalUnit'
          },
          {
            id: 'badges',
            title: 'تصنيفات الوظيفية',
            type: 'item',
            url: '/ClassificationBranches'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'المسميات الوظيفية',
            type: 'item',
            url: '/JobTitle'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'تعريف منصب',
            type: 'item',
            url: '/DefinitionPosition'
          }
          ,
          {
            id: 'breadcrumb-pagination',
            title: 'إضافة الموظف',
            type: 'item',
            url: '/AddEmployee'
          }
          , {
            id: 'collapse',
            title: 'الموظفين',
            type: 'item',
            url: '/Employee'
          }
          , {
            id: 'collapse',
            title: 'علاوات الموظفين',
            type: 'item',
            url: '/EmployeeBonuses'
          }
          , {
            id: 'collapse',
            title: 'المصحات',
            type: 'item',
            url: '/Clinics'
          }
          , {
            id: 'collapse',
            title: 'إعادة تصنيف',
            type: 'item',
            url: '/ReClassification'
          }, {
            id: 'collapse',
            title: 'انتداب على وظيفة',
            type: 'item',
            url: '/SecondmentToOtherPosition'
          }
          // },
          // {
          //   id: 'collapse',
          //   title: 'تقييمات الموظف',
          //   type: 'item',
          //   url: '/EmployeeEvaluation'
          // }
         // ,
          // {
          //   id: 'collapse',
          //   title: 'تقارير الموظفين',
          //   type: 'item',
          //   url: '/basic/collapse'
          // },
          // {
          //   id: 'collapse',
          //   title: 'انتهاء الخدمة',
          //   type: 'item',
          //   url: '/basic/collapse'
          // },
          // {
          //   id: 'collapse',
          //   title: 'الدرجات والعلاوات',
          //   type: 'item',
          //   url: '/basic/collapse'
          // },
          // {
          //   id: 'collapse',
          //   title: 'حركات الموظفين',
          //   type: 'item',
          //   url: '/basic/collapse'
          // },
          // {
          //   id: 'collapse',
          //   title: 'حركات ترقيات الموظفين',
          //   type: 'item',
          //   url: '/basic/collapse'
          // }
        ]
      }
    ]
  },
];
@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
