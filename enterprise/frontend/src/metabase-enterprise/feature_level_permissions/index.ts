import { hasPremiumFeature } from "metabase-enterprise/settings";
import { PLUGIN_FEATURE_LEVEL_PERMISSIONS } from "metabase/plugins";
import {
  canAccessSettings,
  canAccessDataModel,
  canAccessDatabaseManagement,
  getDataColumns,
} from "./utils";

import { getFeatureLevelDataPermissions } from "./permission-management";

if (hasPremiumFeature("advanced_permissions")) {
  PLUGIN_FEATURE_LEVEL_PERMISSIONS.canAccessSettings = canAccessSettings;
  PLUGIN_FEATURE_LEVEL_PERMISSIONS.canAccessDataModel = canAccessDataModel;
  PLUGIN_FEATURE_LEVEL_PERMISSIONS.canAccessDatabaseManagement = canAccessDatabaseManagement;

  PLUGIN_FEATURE_LEVEL_PERMISSIONS.getFeatureLevelDataPermissions = getFeatureLevelDataPermissions;
  PLUGIN_FEATURE_LEVEL_PERMISSIONS.getDataColumns = getDataColumns;
}
