
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import InviteCandidate from "views/CandidateInvite";
import ManageQuestions from "views/ManageQuestions";
//import QuestionManagement from "views/QuestionManagement";
import AddQuestions from "views/AddQuestions";
import TableList from "views/TableList/TableList.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/invite-candidate",
    name: "Invite Candidate",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: InviteCandidate,
    layout: "/admin"
  },
 /*  {
    path: "/question-management",
    name: "Manage Questions",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Dashboard,
    component: QuestionManagement,
    layout: "/admin"
  }, */

  {
    path: "/add-questions",
    name: "Add Questions",
    //rtlName: "ملف تعريفي للمستخدم",
    icon:"content_paste",
    component: AddQuestions,
    layout: "/admin"
  },
  {
    path: "/manage-questions",
    name: "Manage Questions",
    // rtlName: "ملف تعريفي للمستخدم",
    icon: QuestionAnswer,
    component: ManageQuestions,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "View Status",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
];

export default dashboardRoutes;
