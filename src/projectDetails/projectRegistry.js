import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "diabetes-classification": lazy(() => import("./SalesProfitDeliveryDashboard")),
  leadsup: lazy(() => import("./IKNettoyageCleaningServicesWebsiteRedesign")),
  polsekrembang: lazy(() => import("./EducationQuestionPlatform")),
  floodsegmen: lazy(() => import("./InventoryManagementApplication")),
  qmeal: lazy(() => import("./EventManagementApplication")),
  lostandfound: lazy(() => import("./ExamPreparationPlatform")),
  imageclas: lazy(() => import("./DawnShopifyWebsite")),
  "financial-assistant-bot": lazy(() => import("./FashionECommercePlatform")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
