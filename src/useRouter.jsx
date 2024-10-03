import { useRoutes } from "react-router-dom";
import Home from "./page/Home";
import Statistic from "./page/Statistic";
import PersonalPlanner from "./page/PersonalPlanner";
import PersonalPlannerV2 from "./page/PersonalPlannerV2";
import Homev2 from "./page/Homev2";
import Homev3 from "./page/Homev3";
import ApartmentResults from "./page/ApartmentResults";
import ProductPage from "./page/ProductPage";
import Performent from "./page/Performent";
import ProductPagev2 from "./page/ProductPagev2";
import Feedback from "./page/Feedback";
import Filter from "./page/Filter";
import Search from "./page/Search";
import Splace from "./page/Splace";
import Login from "./page/Login";
import QrCode from "./page/QrCode";
import Performencev2 from "./page/Performencev2";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/statistic",
      element: <Statistic />,
    },
    {
      path: "/personalPlanner",
      element: <PersonalPlanner />,
    },
    {
      path: "/personalPlannerv2",
      element: <PersonalPlannerV2 />,
    },
    {
      path: "/homev2",
      element: <Homev2 />,
    },
    {
      path: "/homev3",
      element: <Homev3 />,
    },
    {
      path: "/ApartmentResults",
      element: <ApartmentResults />,
    },
    {
      path: "/productPage",
      element: <ProductPage />,
    },
    {
      path: "/performent",
      element: <Performent />,
    },
    {
      path: "/productpagev2",
      element: <ProductPagev2 />,
    },
    {
      path: "/feedback",
      element: <Feedback />,
    },
    {
      path: "/filter",
      element: <Filter />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/splace",
      element: <Splace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/qrcode",
      element: <QrCode />,
    },
    {
      path: "/performencev2",
      element: <Performencev2 />,
    },
  ]);
  return routeElements;
}
