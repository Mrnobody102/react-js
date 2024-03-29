// User
import Management from "../components/pages/user/management/Management";
import PhotoRegistration from "../components/pages/user/photo_registration/PhotoRegistration";
import RetiredPersonnelManagement from "../components/pages/user/retired_personnel_management/RetiredPersonnelManagement";

// Visit
import Request from "../components/pages/visit/Request";
import StatusList from "../components/pages/visit/StatusList";
import Cardlend from "../components/pages/visit/Cardlend";

//AM
import IDcardApp from "../components/pages/authentication/IDcardApp";
import PublicCardApplication from "../components/pages/authentication/PublicCardApplication";
import CardIssuance from "../components/pages/authentication/CardIssuance";
import PostIssueCard from "../components/pages/authentication/PostIssueCard";
import CardManagement from "../components/pages/authentication/CardManagement";
import FaceIDManagementSensetime from "../components/pages/authentication/FaceIdManagementSensetime";
import FaceIDManagementSuprema from "../components/pages/authentication/FaceIdManagementSuprema";
import FingerprintManagementUnion from "../components/pages/authentication/FingerprintManagementUnion";
import TemporaryCardRentalReturn from "../components/pages/authentication/TemporaryCardRentalReturn";
import AuthenticationMediaProductManagement from "../components/pages/authentication/AuthenticationMediaProductManagement";
import SmartCardEntryLevelManagement from "../components/pages/authentication/SmartCardEntryLevelManagement";
import CardPrintProfileManagement from "../components/pages/authentication/CardPrintProfileManagement";
import OtherCardRegistrationRequest from "../components/pages/authentication/ExternalCardRegistrationRequest";

// Entry
import PermissionPolicyManagement from "../components/pages/entry/EntryPermissionPolicyManagement";
import UserAccessPolicyManagement from "../components/pages/entry/UserAccessPolicyManagement";
import EntryBlockingPolicyManagement from "../components/pages/entry/BlockingPolicyManagement";
import EntryScheduleManagement from "../components/pages/entry/ScheduleManagement";
import ElevatorPolicyManagement from "../components/pages/entry/ElevatorPolicyManagement";
import EntryLogMonitoring from "../components/pages/entry/EntryLogMonitoring";
import EntryLogSearch from "../components/pages/entry/EntryLogSearch";
import EntryLogSearchRetired from "../components/pages/entry/RetiredEntryLogSearch";

// Organization
import CompanySiteManagement from "../components/pages/organization/CompanySiteManagement";
import DepartmentManagement from "../components/pages/organization/DepartmentManagement";
import PartnerManagement from "../components/pages/organization/PartnerManagement";

// Food and water
import 식당메뉴관리 from "../components/pages/식수/식당메뉴관리";
import 식수로그검색 from "../components/pages/식수/식수로그검색";

// Setting
import MenuManagement from "../components/pages/setting/MenuManagement";
import RoleManagement from "../components/pages/setting/RoleManagement";
import UserMenuManagementByRole from "../components/pages/setting/UserMenuManagementByRole";
import LoginIDAuthorityManagement from "../components/pages/setting/LoginIdAuthorityManagement";
import CommonCodeManagement from "../components/pages/setting/CommonCodeManagement";
import ApplicationConfiguration from "../components/pages/setting/ApplicationConfiguration";
import Notice from "../components/pages/setting/NoticeManagement";
import SMSDispatchManagement from "../components/pages/setting/SmsManagement";
import AccessAllowedIPManagement from "../components/pages/setting/AccessAllowedIpManagement";
import PrivacyProcessHistoryList from "../components/pages/setting/privacy_process_history_list/PrivacyProcessHistoryList";

// List of full menu items
const menuItems = [
  {
    id: 1,
    title: "User",
    href: "user",
    component: <Management />,
    children: [
      {
        id: 11,
        title: "User Management",
        href: "user_management",
        component: <Management />,
      },
      {
        id: 12,
        title: "User photo registration",
        href: "photo_registration",
        component: <PhotoRegistration />,
      },
      {
        id: 13,
        title: "Retired personnel management",
        href: "retired_personnel_management",
        component: <RetiredPersonnelManagement />,
      },
    ],
  },
  {
    id: 2,
    title: "Visit",
    href: "visit",
    path: "visit/visit_request",
    component: <Request />,
    children: [
      {
        id: 21,
        title: "Visit request",
        href: "visit_request",
        component: <Request />,
      },
      {
        id: 22,
        title: "Visit status list",
        href: "visit_status_list",
        component: <StatusList />,
      },
      {
        id: 23,
        title: "Visit card lend/return",
        href: "visit_card_lend_return",
        component: <Cardlend />,
      },
    ],
  },
  {
    id: 3,
    title: "Authentication Medium",
    href: "authentication_medium",
    path: "authentication_medium/id_card_application",
    component: <IDcardApp />,
    children: [
      {
        id: 31,
        title: "ID card application",
        href: "id_card_application",
        component: <IDcardApp />,
      },
      {
        id: 32,
        title: "Public card application",
        href: "public_card_application",
        component: <PublicCardApplication />,
      },
      {
        id: 33,
        title: "Card issuance",
        href: "card_issuance",
        component: <CardIssuance />,
      },
      {
        id: 34,
        title: "Post issue Card",
        href: "post_issue_card",
        component: <PostIssueCard />,
      },
      {
        id: 35,
        title: "Card management",
        href: "card_management",
        component: <CardManagement />,
      },
      {
        id: 36,
        title: "Face ID Management (Sensetime)",
        href: "face_id_management_sensetime",
        component: <FaceIDManagementSensetime />,
      },
      {
        id: 37,
        title: "Face ID Management (Suprema)",
        href: "face_id_management_suprema",
        component: <FaceIDManagementSuprema />,
      },
      {
        id: 38,
        title: "Fingerprint Management (Union)",
        href: "fingerprint_management_union",
        component: <FingerprintManagementUnion />,
      },
      {
        id: 39,
        title: "Temporary card rental application",
        href: "temporary_card_rental_application",
        component: <TemporaryCardRentalReturn />,
      },
      {
        id: 310,
        title: "Temporary card rental/return",
        href: "temporary_card_rental_return",
        component: <TemporaryCardRentalReturn />,
      },
      {
        id: 311,
        title: "Authentication media product management",
        href: "authentication_media_product_management",
        component: <AuthenticationMediaProductManagement />,
      },
      {
        id: 312,
        title: "Smart card entry level management",
        href: "smart_card_entry_level_management",
        component: <SmartCardEntryLevelManagement />,
      },
      {
        id: 313,
        title: "Card print profile management",
        href: "card_print_profile_management",
        component: <CardPrintProfileManagement />,
      },
      {
        id: 314,
        title: "Third party card registration application",
        href: "third_party_card_registration_application",
        component: <OtherCardRegistrationRequest />,
      },
    ],
  },
  {
    id: 4,
    title: "Entry",
    href: "entry",
    path: "entry/entry_permission_policy_management",
    component: <PermissionPolicyManagement />,
    children: [
      {
        id: 41,
        title: "Entry permission policy management",
        href: "entry_permission_policy_management",
        component: <PermissionPolicyManagement />,
      },
      {
        id: 42,
        title: "User access policy management",
        href: "user_access_policy_management",
        component: <UserAccessPolicyManagement />,
      },
      {
        id: 43,
        title: "Entry blocking policy management",
        href: "entry_blocking_policy_management",
        component: <EntryBlockingPolicyManagement />,
      },
      {
        id: 44,
        title: "Entry schedule management",
        href: "entry_schedule_management",
        component: <EntryScheduleManagement />,
      },
      {
        id: 45,
        title: "Elevator policy management",
        href: "elevator_policy_management",
        component: <ElevatorPolicyManagement />,
      },
      {
        id: 46,
        title: "Entry log monitoring",
        href: "entry_log_monitoring",
        component: <EntryLogMonitoring />,
      },
      {
        id: 47,
        title: "Entry log search",
        href: "entry_log_search",
        component: <EntryLogSearch />,
      },

      {
        id: 48,
        title: "Entry log search (Retired)",
        href: "entry_log_search_retired",
        component: <EntryLogSearchRetired />,
      },
    ],
  },
  {
    id: 5,
    title: "식수",
    href: "food_and_water",
    path: "food_and_water/restaurant_menu_management",
    component: <식당메뉴관리 />,
    children: [
      {
        id: 51,
        title: "식당메뉴관리",
        href: "restaurant_menu_management",
        component: <식당메뉴관리 />,
      },
      {
        id: 52,
        title: "식수로그 검색",
        href: "water_log_search",
        component: <식수로그검색 />,
      },
    ],
  },
  {
    id: 6,
    title: "Organization",
    href: "organization",
    path: "organization/company_site_management",
    component: <CompanySiteManagement />,
    children: [
      {
        id: 61,
        title: "Company/site management",
        href: "company_site_management",
        component: <CompanySiteManagement />,
      },
      {
        id: 62,
        title: "Department management",
        href: "department_management",
        component: <DepartmentManagement />,
      },
      {
        id: 63,
        title: "Partner management",
        href: "partner_management",
        component: <PartnerManagement />,
      },
    ],
  },
  {
    id: 7,
    title: "Setting",
    href: "setting",
    path: "setting/user_menu_management_by_role",
    component: <MenuManagement />,
    children: [
      {
        id: 71,
        title: "Menu management",
        href: "menu_management",
        component: <MenuManagement />,
      },
      {
        id: 72,
        title: "Role management",
        href: "role_management",
        component: <RoleManagement />,
      },
      {
        id: 73,
        title: "User/menu management by role",
        href: "user_menu_management_by_role",
        component: <UserMenuManagementByRole />,
      },
      {
        id: 74,
        title: "Login ID/Authority management",
        href: "login_id_authority_management",
        component: <LoginIDAuthorityManagement />,
      },
      {
        id: 75,
        title: "Common code management",
        href: "common_code_management",
        component: <CommonCodeManagement />,
      },
      {
        id: 76,
        title: "Application Configuration",
        href: "application_configuration",
        component: <ApplicationConfiguration />,
      },
      {
        id: 77,
        title: "Notice",
        href: "notice",
        component: <Notice />,
      },
      {
        id: 78,
        title: "SMS 발송정잭 관리",
        href: "sms_발송정잭_관리",
        component: <SMSDispatchManagement />,
      }, // Assuming 텍스트 should remain as_is
      {
        id: 79,
        title: "Access allowed IP management",
        href: "access_allowed_ip_management",
        component: <AccessAllowedIPManagement />,
      },
      {
        id: 710,
        title: "Privacy process history list",
        href: "privacy_process_history_list",
        component: <PrivacyProcessHistoryList />,
      },
    ],
  },
];

// List all childrens of menuItems
const childrenItems = menuItems.reduce((accumulator, item) => {
  if (item.children) {
    // Thêm trường "parentHref" vào mỗi item con
    const childrenWithParentHref = item.children.map((child) => ({
      ...child,
      parentHref: item.href,
    }));
    return [...accumulator, ...childrenWithParentHref];
  }
  return accumulator;
}, []);

export { menuItems, childrenItems };
